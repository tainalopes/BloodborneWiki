import React from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

let imagemDeFundo = require('../Images/fundo_base.jpg')

export default function Armas(){
    return(
        <View>
            <ImageBackground style={estilo.background}
                source={imagemDeFundo}>
                <ScrollView style={estilo.body}>
                    <Text style={estilo.titulo}>LISTA DE ARMAS*</Text>
                    <Text style={estilo.linha} />

                    <Text style={estilo.texto}>*em breve (;</Text>
                
                </ScrollView>

            </ImageBackground>
        </View>
    )
}

const estilo = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        /* flex: 1,
        backgroundColor: 'black' */
    },
    body: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30
    },
    titulo: {
        color: '#E6E6E6',
        fontSize: 18,
        fontFamily: 'fantasy'
    },
    texto: {
        color: '#E6E6E6',
        textAlign: 'justify',
        marginBottom: 10
    },
    linha: {
        borderTopColor: '#A60E00',
        borderTopWidth: 1,
        marginTop: 15,
        width: 300
    },
    botao: {
        backgroundColor: '#A60E00',
        borderRadius: 10,
        width: 80,
        height: 30,
        alignItems: 'center',
        padding: 6,
        opacity: 0.8,
        marginTop: 15

    },
    textoBotao: {
        fontSize: 14,
        color: 'white'
    },
    input: {
        color: 'white',
        borderColor: '#A60E00',
        borderWidth: 1,
        marginTop: 15
    }
})