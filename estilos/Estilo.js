import { StyleSheet, Dimensions } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../componentes/Scale';






export default StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#fff',


    },
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    },
    btnVenda: {
        backgroundColor: '#2B3B4A',
        height: 60,
        width: 70,
        borderRadius:
            10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxTxtVenda: {
        borderColor: '#2B3B4A',
        borderWidth: 3,
        height: 60,
        width: 190,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20, 
        justifyContent: 'center'
    },
    fonteTabela:{
        color: '#2B3B4A', 
        fontWeight: 'bold', 
        fontSize: 15 
    },
    btnConfirma:{
        backgroundColor: '#2B3B4A', 
        height: 70, 
        width: 70, 
        borderRadius: 1000, 
        marginLeft: 20, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    Tabela:{
        height: 50, 
        borderBottomColor: '#2B3B4A', 
        borderBottomWidth: 2, 
        justifyContent: 'center' 
    },
    modal:{
        backgroundColor:"#fff",
        borderRadius:20,
        borderColor:'#2D3A4A',
        borderWidth:5, 
        width:horizontalScale(330),
        height:verticalScale(200 ),
        
    },
    btnProdutos: {
        backgroundColor: '#2B3B4A',
        height: 60,
        width: 70,
        borderRadius:
            10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})