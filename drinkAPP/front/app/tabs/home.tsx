import {useRouter} from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View, Image } from "react-native";
import {StatusBar} from "expo-status-bar";
import {BellRinging, Bookmark, Martini, MagnifyingGlass, SlidersHorizontal } from "phosphor-react-native";
import { useState } from "react";


export default function Home() {

  const [savedDrinks, setSavedDrinks] = useState<string[]>([]);

  function toggleSaveDrink(id: string) {
    if (savedDrinks.includes(id)) {
      setSavedDrinks(savedDrinks.filter(savedId => savedId !== id));
    } else {
      setSavedDrinks([...savedDrinks, id]);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Martini size={30} color="#1ab65c" weight="duotone"></Martini>
          <Text style={styles.headerLeftText}>Shotz</Text>
        </View>
        <View style={styles.headerRight}></View>
      </View>
      <Text style={styles.userName}>Olá, Paulo Costa</Text>
      <View style={styles.inputContainer}>
        <MagnifyingGlass size={30} color="#757575" weight="duotone"></MagnifyingGlass>
        <TextInput 
          style={styles.input}
          placeholder="Coloque os ingredientes" 
          placeholderTextColor="#757575"
        />
        <SlidersHorizontal size={30} color="#1ab65c" weight="duotone"></SlidersHorizontal>
      </View>
      <View style={styles.content}>
        
        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage} source={require("../assets/Gin.jpeg")}></Image>
            <View style={styles.cardInfo}>
            <Text style={styles.cardInfoTittle}>Gin Tropical</Text>
            <Text style={styles.cardInfoSubTittle}>Gin e Red Bull tropical</Text>
        </View>
          </Pressable>

          <View style={styles.cardInfoTempo}>
            <Text style={styles.cardInfoTempoText}>5 min</Text>
            <Pressable onPress={() => toggleSaveDrink('gin')}>
              <Bookmark 
                size={30} 
                color={savedDrinks.includes('gin') ? "#1ab65c" : "#f4f4f4"} 
                weight={savedDrinks.includes('gin') ? "fill" : "regular"} 
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage} source={require("../assets/negroni.jpeg")}></Image>
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTittle}>Negroni</Text>
              <Text style={styles.cardInfoSubTittle}>Gin, Vermuti tinto doce e Campari</Text>
            </View>
          </Pressable>

          <View style={styles.cardInfoTempo}>
            <Text style={styles.cardInfoTempoText}>5 min</Text>
            <Pressable onPress={() => toggleSaveDrink('negroni')}>
              <Bookmark 
                size={30} 
                color={savedDrinks.includes('negroni') ? "#1ab65c" : "#f4f4f4"} 
                weight={savedDrinks.includes('negroni') ? "fill" : "regular"} 
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage} source={require("../assets/margarita.jpeg")}></Image>
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTittle}>Margarita</Text>
              <Text style={styles.cardInfoSubTittle}>Tequila e Licor de laranja</Text>
            </View>
          </Pressable>

          <View style={styles.cardInfoTempo}>
            <Text style={styles.cardInfoTempoText}>5 min</Text>
            <Pressable onPress={() => toggleSaveDrink('margarita')}>
              <Bookmark 
                size={30} 
                color={savedDrinks.includes('margarita') ? "#1ab65c" : "#f4f4f4"} 
                weight={savedDrinks.includes('margarita') ? "fill" : "regular"} 
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage} source={require("../assets/mojito.jpeg")}></Image>
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTittle}>Mojito</Text>
              <Text style={styles.cardInfoSubTittle}>Rum branco e Hortelã</Text>
            </View>
          </Pressable>

          <View style={styles.cardInfoTempo}>
            <Text style={styles.cardInfoTempoText}>10 min</Text>
            <Pressable onPress={() => toggleSaveDrink('mojito')}>
              <Bookmark 
                size={30} 
                color={savedDrinks.includes('mojito') ? "#1ab65c" : "#f4f4f4"} 
                weight={savedDrinks.includes('mojito') ? "fill" : "regular"} 
              />
            </Pressable>
          </View>
        </View>

      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerLeft: {
    flexDirection: "row", 
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row", 
    alignItems: "center",
    gap: 4,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: "800",
  },
  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: "800",
  },
  inputContainer: {
    width:"100%",
    height:56,
    backgroundColor: '#1f22a',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: "#f4f4f4",
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
  cardButton: {
   alignItems: "flex-start",
   flexDirection: "row",
   gap: 10, 
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  cardInfo: {
    height: "100%",
    gap: 10,
  },
  cardInfoTittle: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  cardInfoSubTittle: {
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "300",
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
