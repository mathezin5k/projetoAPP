import { Pressable, StyleSheet, Text, TextInput, View, Image } from "react-native";
import {StatusBar} from "expo-status-bar";
import {Bookmark} from "phosphor-react-native";
import { useState } from "react";

export default function SavedDrinks() {

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.userName}>Drinks Salvos</Text>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Pressable>
            {/*<Image style={styles.cardImage} source={require("../assets/Gin.jpeg")} />*/}
            <View style={styles.cardInfo}></View>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable>
            {/*<Image style={styles.cardImage} source={require("../assets/negroni.jpeg")} />*/}
            <View style={styles.cardInfo}></View>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable>
            {/*<Image style={styles.cardImage} source={require("../assets/margarita.jpeg")} />*/}
            <View style={styles.cardInfo}></View>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Pressable>
           {/* <Image style={styles.cardImage} source={require("../assets/mojito.jpeg")} />*/}
            <View style={styles.cardInfo}></View>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 20,
  },

  userName: {
    paddingTop: 80,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: "800",
  },
  
  content: {
    width: "100%",
    gap: 20,
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#1f222a",
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  cardInfo: {
    height: "100%",
    gap: 10,
    width: 0,
  },
  cardInfoTempo: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardInfoTempoText: {
    color: "#1ab65c",
    fontSize: 18,
    fontWeight: "900",
  },
});
