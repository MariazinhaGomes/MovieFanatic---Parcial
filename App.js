import { SafeAreaView, Text, StyleSheet, View} from 'react-native'
import {Acao } from './components/Acao'
import {Romance} from './components/Romance'
import {Comedia} from './components/Comedia'


export default function App() {

   return (
<SafeAreaView style={styles.body}>
      <Text style={styles.titulo}>Explorar</Text>
      <View >
      <Text style={styles.button}>Buscar</Text>
                
      </View>
      <Acao/>
      <Romance/>
      <Comedia/>    
</SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center'
    
  },
  body:{
    backgroundColor:'#64B7CC'
    
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8,
    width:300,
    marginLeft:20,
    marginTop:10,
    borderRadius:10,
    fontWeight: 'bold',
    textAlign:'center',
    
  },

    
})   
     