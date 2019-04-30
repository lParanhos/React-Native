import React from 'react';
import { View, Text } from 'react-native';

import Padrao from '../style/Padrao';
import If from './if';

// ************* Renderização Condicional *************


function imparOuPar(num) {
    /* if (num % 2 === 0) {
        return <Text style={Padrao.ex}>Par</Text>
    }
    else
        return <Text style={Padrao.ex}>Impar</Text> */
    const v = num % 2 === 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props =>
    <View>
        {/**Método 2 */}
        {imparOuPar(props.numero)}
        {/*  Método 1 
    props.numero % 2 === 0
        ? <Text style={Padrao.ex}>Par</Text>
        : <Text style={Padrao.ex}>Impar</Text> */
        }
    </View>



// export default props =>
//     <View>
//         <If test={num % 2 === 0}>
//             {/**Caso o resultado seja verdadeiro tudo que estiver aqui dentro do if, será retornado */}
//             <Text>PAr</Text>
//         </If>
//     </View>
