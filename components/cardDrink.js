import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function CardDrink() {
  return (
    <View style={styles.card}>
       <Text>hola estamos probando bebidas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'red',
        height: 200,
        width: 150,
        borderRadius: 10,
        margin: 10,
      },

});
