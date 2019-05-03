import React from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notificar = msg => {
        if (Platform.OS === 'android') { // Também poderia testar se fosse ios
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else { // Caso a plataforma não seja android, será ios, então ele faz um alert
            Alert.alert('Informação', msg);
        }
    }

    return (
        <Button title='Plataforma?'
        onPress={() => notificar('Parabens!')}
        />
    );
}