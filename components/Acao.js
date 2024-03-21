import { View, Text, StyleSheet, Image,  } from 'react-native'

export function Acao() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Ação</Text>
      <View  style={styles.linha}>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/Blockbuster Movies - Hollywood Good Movies & Popular Movies of all Time.jpeg')}/>
        </View>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/Terremoto_ A Falha De San Andreas (LEG).jpeg')}/>
        </View>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/Fast and Furious.jfif')}/>
        </View>       
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  imagem: {
    height: 140,
    width: 100,
    borderRadius:5,
    marginTop:40,
    marginLeft:10, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  coluna: {
    flexDirection: 'column',
    alignItems: 'center',
     
  },
 titulo:{
   marginLeft:-290,
   marginBottom: -30,
   marginTop:10,
   fontWeight: 'bold',
   
 }

 
  
})