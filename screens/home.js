import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({navigation}) {

  return (

    <View style={styles.container}>
       <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      > 
      
      <Image
        source={require('../img/burger1.png')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text1}>¡Bienvenidos a blueBurger!</Text>
      <Text style={styles.text2}>La perfección en cada smash</Text>
      <Text style={styles.text3}>sabores auténticos en cada orden</Text>
      <View style={styles.button1}>
      <Button  title="Press me"
       onPress={() => navigation.navigate('Menu')} />
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
    justifyContent: 'center',
    padding: "4%"
  },
  text1:{
    fontSize: "40px",
    color: "white",
    textAlign: 'center',
    marginTop: "5%",
  },
  text2:{
    fontSize: "27px",
    color: "white",
    textAlign: 'center',
    marginTop: "5%"
  },
  text3:{
    fontSize: "25px",
    color: "white",
    textAlign: 'center',
  },
  button1:{
    backgroundColor: "white",
    width: "40%",
    height:"05%",
    borderRadius: "40%",
    marginTop: "10%"
  }
});
