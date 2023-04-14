import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardItem from "../components/cardItem";
import CardDrink from "../components/cardDrink";
import React, { useState } from "react";

export default function Menu({navigation}) {
  const [tab, setTab] = useState(true);
  const [color, setColor] = useState(true);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <Text>Menu</Text>
        <Text>Time: 20min</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <View style={color === true ? styles.buttonAct : styles.button2}>
          <Button title="Hamburgesas"  onPress={() => {
              setTab(true);
              setColor(true);
            }} 
            color={color === true ? "white" : "white"}
            />
        </View>
        <View style={color === true ? styles.button2 : styles.buttonAct}>
          <Button title="Bebidas" onPress={() => {
              setTab(false);
              setColor(false);
            }}
            color={color === true ? "white" : "black"}
          
          />
        </View>
      </View>

      <ScrollView horizontal={true} >
        {tab === true ? (
          <View>
          <View style={styles.container}>
            <CardItem navigation={navigation}/>
            <CardItem navigation={navigation}/>
            <CardItem navigation={navigation}/>
            <CardItem navigation={navigation}/>
            <CardItem navigation={navigation}/>
          </View>
          <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5%",
        }}
      >
        <Text>burger 1</Text>
        <Text>$4,99</Text>
      </View>
          </View>
        ) : (
          <View style={styles.container}>
            <CardDrink />
            <CardDrink />
            <CardDrink />
            <CardDrink />
            <CardDrink />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  button2: {
    backgroundColor: "#012559",
    width: "40%",
    height: "110%",
    borderRadius: "40%",
  },
  buttonAct: {
    backgroundColor: "#2C7BEC",
    width: "40%",
    height: "110%",
    borderRadius: "40%",
    color: "black",
  },
});
