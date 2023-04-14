import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { AppLoading } from 'expo';
// import {
//   useFonts,
//   Inter_900Black,
// } from '@expo-google-fonts/inter';



export default function InfoItem({navigation}) {
 

  return (

    <View style={styles.container}>
       
       <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      > 
      
      <Image
        source={require('../img/burgerID2.png')}
        style={{ width: 320, height: 390, }}
      />
       <View>
      <Text style={styles.text1}>¡SINGLE ONE!</Text>
      <Text style={styles.text2}>"Disfruta de una deliciosa hamburguesa con queso jugoso, cubierta con queso derretido y cargada de verduras frescas y crujientes!"</Text>
      <Text style={styles.text3}>4.993333333$</Text>
      <View style={styles.button1}>
     

      </View>
      </View>
      </LinearGradient>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom right, #4c669f, #3b5998, #192f6a)',
    alignItems: 'center',
    justifyContent: 'start',
  },
  gradient: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'start',
    padding: "4%"
  },
  text1:{
    // fontSize: "40px",
    color: "white",
    textAlign: 'left',
    marginTop: "5%",
    marginTop: "10%"
    // fontFamily:"Inter_900Black"
  },
  text2:{
    // fontSize: "18%",
    color: "white",
    textAlign: 'left',
    marginTop: "5%",
    fontWeight: "lighter"
  },
  text3:{
    // fontSize: "29%",
    color: "white",
    alignSelf: 'flex-end',
    marginTop: "10%"
  },
  button1:{
    backgroundColor: "white",
    width: "40%",
    height:"7%",
    borderRadius: "40%",
    marginTop: "10%"
  }
});
