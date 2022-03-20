import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Foundation';

let imagemDeFundo = require('../Images/fundo_base.jpg')

export default function Historia() {
    return (

        <View>
            <ImageBackground style={estilo.background}
                source={imagemDeFundo}>
                <ScrollView style={estilo.body}>

                    <Text style={estilo.titulo}>BLOODBORNE</Text>
                    <Text style={estilo.linha}></Text>

                    <Text style={estilo.texto}>
                        Bloodborne é um RPG eletrônico de ação produzido pela FromSoftware e publicado pela Sony Computer Entertainment em 24 de março de 2015 exclusivo para PlayStation 4 e sendo o quarto game da serie Souls.

                        Bloodborne foi realizado por Hidetaka Miyazaki, diretor de Demon's Souls e Dark Souls. Miyazaki afirmou que o jogo nunca foi produzido com o sentido de ser Demon's Souls II. Foi anunciado pela Sony a 9 de junho de 2014 durante a Electronic Entertainment Expo 2014, onde foi bem recebido pela critica ganhando diversos prêmios e nomeações. Bloodborne foi descrito por Paul Sullivan da Sony como “Dark Souls com caçadeiras”.

                        Bloodborne recebeu aclamação crítica em seu lançamento. Nos sites de pontuações GameRankings e Metacritic tem as médias de 91,62% e 93/100, respectivamente. A atmosfera, o enredo, a música, a apresentação, a jogabilidade e a direção em geral, foram elogiadas. Uma das principais criticas foram dirigidas aos tempos de carregamento muito longos. No entanto, em 23 de abril de 2015, a FromSoftware disponibilizou uma atualização que resolveu o problema.
                    </Text>

                    <Text style={estilo.titulo}>ENREDO</Text>
                    <Text style={estilo.linha}></Text>

                    <Text style={estilo.texto}>
                        Bloodborne tem lugar em Yharnam, uma cidade gótica/vitoriana e em ruínas, onde segundo os rumores, alberga um poderoso medicamento. Ao longo dos anos muitos viajantes faziam peregrinações a cidade procurando cura para as suas aflições.
                        O jogador tem o papel de um desses viajantes. Quando chega a Yharnam, no entanto, descobre que a cidade está atormentada por uma doença endémica que transformou a maioria dos seus habitantes em criaturas bestiais. O jogador para sobreviver deve percorrer as ruas de Yharnam e superar os seus habitantes violentamente enlouquecidos e os monstros horripilantes.
                    </Text>

                    <Text style={estilo.titulo}>THE OLD HUNTERS</Text>
                    <Text style={estilo.linha}></Text>

                    <Text style={estilo.texto}>
                        Em 24 de Novembro de 2015 o jogo recebeu sua única que DLC que foi The Old Hunters. A expansão de conteúdo adiciona um novo cenário, 11 armas brancas, 5 armas de fogo, 5 chefes e novos trajes.
                    </Text>
                    <Text style={estilo.linha}></Text>
                    
                    <View>

                        <Text style={estilo.titulo}>DEIXE SEU COMENTÁRIO AQUI:</Text>
                        <Text style={estilo.texto}>nome</Text>
                        <TextInput style={estilo.inputNome}></TextInput>
                        <Text style={estilo.texto}>comentário</Text>
                        <TextInput style={estilo.inputCom}></TextInput>

                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>ENVIAR</Text>
                        </TouchableOpacity>

                    </View>

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
        marginTop: 15
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
    inputNome: {
        borderColor: '#A60E00',
        borderWidth: 1,
        height: 10
    },
    inputCom: {
        borderColor: '#A60E00',
        borderWidth: 1
    }
})