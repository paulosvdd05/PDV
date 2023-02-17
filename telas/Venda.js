import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TouchableHighlight, SafeAreaView, Image, Dimensions, ScrollView, Modal, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Es from '../estilos/Estilo'
import { horizontalScale, moderateScale, verticalScale } from '../componentes/Scale';

const { width, height } = Dimensions.get('window');




const Venda = ({ navigation }) => {

  const [visivelProdutos, setVisivelProdutos] = useState(false);
  const [visivelClientes, setVisivelClientes] = useState(false);

  return (
    <SafeAreaView>



      {/* Modal */}
      <Modal animationType="fade" transparent={true} visible={visivelProdutos} >
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: verticalScale(50) }}>
          <View style={Es.modal}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 20 }}>Pesquisar Produto:</Text>
              <TextInput placeholder="Digite aqui..." style={{ borderRadius: 15, borderWidth: 2, width: '70%' }} />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', marginBottom: verticalScale(10), justifyContent: "space-evenly" }}>
              <TouchableHighlight style={Es.btnProdutos} onPress={() => { setVisivelProdutos(false) }}>
                <Image style={{ height: 35, width: 35, tintColor: '#f00' }} source={require('../assets/icones/x.png')} />
              </TouchableHighlight>
            </View>
          </View>
        </View>

      </Modal>

      <Modal animationType="fade" transparent={true} visible={visivelClientes} >
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: verticalScale(50) }}>
          <View style={Es.modal}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 20 }}>Pesquisar Cliente:</Text>
              <TextInput placeholder="Digite aqui..." style={{ borderRadius: 15, borderWidth: 2, width: '70%' }} />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', marginBottom: verticalScale(10), justifyContent: "space-evenly" }}>
              <TouchableHighlight style={Es.btnProdutos} onPress={() => { setVisivelClientes(false) }}>
                <Image style={{ height: 35, width: 35, tintColor: '#f00' }} source={require('../assets/icones/x.png')} />
              </TouchableHighlight>
            </View>
          </View>
        </View>

      </Modal>



      <View style={{ borderBottomColor: '#2B3B4A', borderBottomWidth: 8 }}>
        <View style={{ marginTop: 15, marginBottom: 15, flexDirection: "row", }}>
          <TouchableHighlight style={Es.btnVenda} onPress={() => {setVisivelProdutos(true)}}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 35, width: 35, tintColor: '#5879EA' }} source={require('../assets/icones/lupplus.png')} />
              <Text style={{ color: '#5879EA', fontWeight: 'bold' }}>Produtos</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={Es.btnVenda} onPress={() => { setVisivelClientes(true)}}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ height: 35, width: 35, tintColor: '#5879EA' }} source={require('../assets/icones/person.png')} />
              <Text style={{ color: '#5879EA', fontWeight: 'bold' }}>Clientes</Text>
            </View>
          </TouchableHighlight>
          <View style={Es.boxTxtVenda}>
            <View style={{ flexDirection: "row", marginLeft: 5, }}>
              <Text style={{ fontWeight: 'bold' }}>CPF:</Text><Text id="cpf"></Text>
            </View>

            <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 2 }}>
              <Text style={{ fontWeight: 'bold' }}>Nome:</Text><Text id="nome"></Text>
            </View>

          </View>
        </View>
      </View>

      <View style={{ height: verticalScale(470) }}>
        <ScrollView>
          <View style={{ height: 50, borderBottomColor: '#2B3B4A', borderBottomWidth: 2, justifyContent: 'center' }}>
            <View style={{ marginLeft: 40, marginRight: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 15 }} id="produto_id">123456123456</Text>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 15 }} id="produto_nome">Descrição do Produto XXX</Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginLeft: 40, marginRight: 40 }}>
              <Text style={{ color: '#2B3B4A', fontSize: 12 }} id="produto_desc">20 x R$1,00 = R$20</Text>
            </View>
          </View>
          <View style={{ height: 50, borderBottomColor: '#2B3B4A', borderBottomWidth: 2, justifyContent: 'center' }}>
            <View style={{ marginLeft: 40, marginRight: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 15 }} id="produto_id">123456123456</Text>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 15 }} id="produto_nome">Descrição do Produto XXX</Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginLeft: 40, marginRight: 40 }}>
              <Text style={{ color: '#2B3B4A', fontSize: 12 }} id="produto_desc">20 x R$1,00 = R$20</Text>
            </View>
          </View>
          <View style={Es.Tabela}>
            <View style={{ marginLeft: 40, marginRight: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 15 }} id="produto_id">123456123456</Text>
              <Text style={{ color: '#2B3B4A', fontWeight: 'bold', fontSize: 15 }} id="produto_nome">Descrição do Produto XXX</Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginLeft: 40, marginRight: 40 }}>
              <Text style={{ color: '#2B3B4A', fontSize: 12 }} id="produto_desc">20 x R$1,00 = R$20</Text>
            </View>
          </View>
          <View style={Es.Tabela}>
            <View style={{ marginLeft: 40, marginRight: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={Es.fonteTabela} id="produto_id">123456123456</Text>
              <Text style={Es.fonteTabela} id="produto_nome">Descrição do Produto XXX</Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginLeft: 40, marginRight: 40 }}>
              <Text style={{ color: '#2B3B4A', fontSize: 12 }} id="produto_desc">20 x R$1,00 = R$20</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 20 }}>
        <TouchableHighlight style={Es.btnConfirma} onPress={() => { }} >
          <Image style={{ height: 35, width: 35, tintColor: '#0f0' }} source={require('../assets/icones/correct.png')} />
        </TouchableHighlight>
      </View>

    </SafeAreaView>

  );
}

export default Venda;