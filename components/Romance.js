import { View, Text, StyleSheet, Image,  } from 'react-native'

export function Romance() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Romance</Text>
      <View  style={styles.linha}>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/7e4382d6-91bb-48ce-9cf4-7fa8e96f6ced.jfif')}/>
        </View>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/2cabfefe-e1da-4281-99f3-ac65f744d15f.jfif')}/>
        </View>
        <View style={styles.coluna}>
          <Image style={styles.imagem} source={require('../assets/Purple Hearts - Cassie and Luke - Netflix Film 2022 - sofia carson and nicholas galitzine.jfif')}/>
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
   
 }

})