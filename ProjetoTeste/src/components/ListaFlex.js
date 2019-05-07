import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Pedro', nota: 4.9 },
    { id: 3, nome: 'Paulo', nota: 6.5 },
    { id: 4, nome: 'Rodrigo', nota: 10 },
    { id: 5, nome: 'Vleito', nota: 7.1 },
    { id: 6, nome: 'Jufite', nota: 3.9 },
    { id: 7, nome: 'Mingau', nota: 8.9 },
    { id: 8, nome: 'Biro', nota: 9.9 },
    { id: 9, nome: 'Most', nota: 1.1 },

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Pedro', nota: 4.9 },
    { id: 13, nome: 'Paulo', nota: 6.5 },
    { id: 14, nome: 'Rodrigo', nota: 10 },
    { id: 15, nome: 'Vleito', nota: 7.1 },
    { id: 16, nome: 'Jufite', nota: 3.9 },
    { id: 17, nome: 'Mingau', nota: 8.9 },
    { id: 18, nome: 'Biro', nota: 9.9 },
    { id: 19, nome: 'Most', nota: 1.1 },

]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    //Flex
    //justifyContent: 'center' // Tabalha o alinhamento no main access
    alignItems: 'center', // Tabalha o alinhamento no cross acess
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItens = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItens}
                keyExtractor={(_, index) => index.toString()}
            />
        </ScrollView>
    );
}