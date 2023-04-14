import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CardItem({navigation}) {
  return (
    <View style={styles.card}>
       <Button title="see" onPress={() => navigation.navigate('InfoItem')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'blue',
        height: 200,
        width: 150,
        borderRadius: 10,
        margin: 10,
      },

});
