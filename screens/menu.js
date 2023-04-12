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

export default function Menu() {
  const [tab, setTab] = useState(true);
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
        <View style={styles.button2}>
          <Button title="Hamburgesas"  onPress={() => setTab(true)}/>
        </View>
        <View style={styles.button2}>
          <Button title="Bebidas" onPress={() => setTab(false)}/>
        </View>
      </View>

      <ScrollView horizontal={true} >
        {tab === true ? (
          <View style={styles.container}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
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
});
