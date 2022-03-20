import React, { Component } from "react";
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, Image, ImageBackground } from "react-native";


let bbPaginaInicial = require('../Images/bbEntrar.jpg')
let logo = require('../Images/bblogo.png')

export default function Home() {

  return (
    <View>

      <ImageBackground style={estilo.background} source={bbPaginaInicial}>

      <View style={{ marginBottom: 230, alignItems: "center", alignContent: 'center' }}>
        <Image style={estilo.logo} source={logo} />
        {/* <View>
          <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Home')}>
            <Text style={estilo.texto}>ENTRAR</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      </ImageBackground>
    </View>

  )
}

const estilo = StyleSheet.create({
  texto: {
    color: 'white'
  },
  botao: {
    backgroundColor: '#A60E00',
    borderRadius: 10,
    width: 80,
    alignItems: 'center',
    padding: 6,
    opacity: 0.8,
    marginTop: 10
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 180,
    height: 50
  }
})
