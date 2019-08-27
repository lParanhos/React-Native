const functions = require('firebase-functions');
const cors = require('cors')({ origin: true })
const fs = require('fs');
const uuid = require('uuid-v4');
const { Store } = require('@google-cloud/storage');
const storage = new Storage({
    projectId: 'lambe-5b982',
    keyFilename: 'lambe-5b982.json'

})
exports.uploadImage = functions.https.onRequest((request, response) => {

    cors(request, response, () => {
        try {
            fs.writeFileSync('/tmp/imageTosave.jpg',
                request.body.image, 'base64') // Escreve o arquivo de forma sincrona

            const bucket = storage.bucket('lambe-5b982.appspot.com') // Local onde vamos armazenar os arquivos
            const id = uuid();
            bucket.upload('/tmp/imageTosave.jpg', {
                uploadType: 'media',
                destination: `/posts/${id}.jpeg`,
                metadata: {
                    metadata: {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens: id
                    }
                }
            }, (error, file) => {
                if (error) {
                    console.log(error)
                    return response.status(500).json({ error })
                } else {
                    const filename = encodeURIComponent(file.name);
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'
                        + bucket.name + '/o/' + filename + '?alt=media&token=' + id;
                    return response.status(201).json({ imageUrl });
                }
            })
        } catch (error) {
            console.log(error)
            return response.status(500).json({ error })
        }
    });
});
