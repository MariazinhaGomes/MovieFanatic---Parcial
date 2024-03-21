import { View, Text, StyleSheet, Image,  } from 'react-native'

export function Comedia() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Comédia</Text>
      <View  style={styles.linha}>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/d0701bf8-9472-4705-b2cb-c5ab7d73fd41.jpeg')}/>
        </View>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/CRÔ EM FAMÍLIA.jpeg')}/>
        </View>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/DUAS DE MIM.jpeg')}/>
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
   marginLeft:-270,
   marginBottom: -30,
   fontWeight: 'bold',
   
 },
})