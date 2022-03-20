import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'

let imagemDeFundo = require('../Images/fundo_base.jpg')
let adella = require('../Images/Npcs/adella.png')
let alfredo = require('../Images/Npcs/alfredo.png')
let annelise = require('../Images/Npcs/annalise.png')
let aranha = require('../Images/Npcs/aranha.png')
let arianna = require('../Images/Npcs/arianna.png')
let boneca = require('../Images/Npcs/boneca.png')
let djura = require('../Images/Npcs/djura.png')
let gehrman = require('../Images/Npcs/gehrman.png')
let homemCetico = require('../Images/Npcs/homem_cetico.png')
let iosefka = require('../Images/Npcs/iosefka.png')
let jovem = require('../Images/Npcs/jovem.png')
let mendigo = require('../Images/Npcs/mendigo.png')
let ministroDoSangue = require('../Images/Npcs/ministro_do_sangue.png')
let moradorCapela = require('../Images/Npcs/morador_capela.png')
let reitor = require('../Images/Npcs/reitor_willem.png')
let valtr = require('../Images/Npcs/valtr.png')
let velha = require('../Images/Npcs/velha.png')

let adelina = require('../Images/Npcs/adelina.png')
let brador = require('../Images/Npcs/brador.png')
let simon = require('../Images/Npcs/brador.png')
let yamamura = require('../Images/Npcs/yamamura.png')

export default function Npcs() {
    return (

        <View>
            <ImageBackground style={estilo.background}
                source={imagemDeFundo}>

                <ScrollView style={estilo.body}>

                    <Text style={estilo.titulo}>LISTA DE NPC's DO JOGO BASE</Text>
                    <Text style={estilo.linha} />

                    <Image style={estilo.imagens} source={adella} />
                    <Text style={estilo.texto}>Adella | Freira da Igreja da Cura</Text>

                    <Image style={estilo.imagens} source={alfredo} />
                    <Text style={estilo.texto}>Alfredo</Text>

                    <Image style={estilo.imagens} source={annelise} />
                    <Text style={estilo.texto}>Annalise | Rainha dos Vileblood</Text>

                    <Image style={estilo.imagens} source={aranha} />
                    <Text style={estilo.texto}>Remenda | a Aranha</Text>

                    <Image style={estilo.imagens} source={arianna} />
                    <Text style={estilo.texto}>Arianna, Mulher da Noite</Text>

                    <Image style={estilo.imagens} source={boneca} />
                    <Text style={estilo.texto}>Boneca Simples</Text>

                    <Image style={estilo.imagens} source={djura} />
                    <Text style={estilo.texto}>Djura | Caçador aposentado</Text>

                    <Image style={estilo.imagens} source={gehrman} />
                    <Text style={estilo.texto}>Gehrman | O Primeiro Caçador</Text>

                    <Image style={estilo.imagens} source={homemCetico} />
                    <Text style={estilo.texto}>Homem Cético</Text>

                    <Image style={estilo.imagens} source={iosefka} />
                    <Text style={estilo.texto}>Iosefka</Text>

                    <Image style={estilo.imagens} source={jovem} />
                    <Text style={estilo.texto}>Jovem e irmã mais velha</Text>

                    <Image style={estilo.imagens} source={mendigo} />
                    <Text style={estilo.texto}>Mendigo suspeito</Text>

                    <Image style={estilo.imagens} source={ministroDoSangue} />
                    <Text style={estilo.texto}>Ministro do Sangue</Text>

                    <Image style={estilo.imagens} source={moradorCapela} />
                    <Text style={estilo.texto}>Morador da Capela Oedon</Text>

                    <Image style={estilo.imagens} source={reitor} />
                    <Text style={estilo.texto}>Reitor Willem</Text>

                    <Image style={estilo.imagens} source={valtr} />
                    <Text style={estilo.texto}>Valtr</Text>

                    <Image style={estilo.imagens} source={velha} />
                    <Text style={estilo.texto}>Velha Solitária</Text>

                    <Text style={estilo.titulo}>LISTA DE NPC's DA DLC</Text>
                    <Text style={estilo.linha} />

                    <Image style={estilo.imagens} source={adelina} />
                    <Text style={estilo.texto}>Santa Adelina</Text>

                    <Image style={estilo.imagens} source={brador} />
                    <Text style={estilo.texto}>Brador</Text>

                    <Image style={estilo.imagens} source={simon} />
                    <Text style={estilo.texto}>Simon | O Angustiado</Text>

                    <Image style={estilo.imagens} source={yamamura} />
                    <Text style={estilo.texto}>Yamimura | Velho Caçador</Text>

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
        marginTop: 15,
        width: 300
    },
    imagens: {
        width: 100,
        height: 100,
        borderRadius: 10
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