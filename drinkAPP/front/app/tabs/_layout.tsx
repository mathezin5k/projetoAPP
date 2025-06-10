import {Tabs} from "expo-router";
import { Bookmark, House, Plus } from 'phosphor-react-native';

export default function TabsLayout() {
  return(
    <Tabs 
    screenOptions={{
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#181a20"
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#1ab6c5",
    tabBarInactiveTintColor: "#757575"
    }}>

  <Tabs.Screen name = "home"
  options={{
    tabBarIcon: ({color}) => (
      <House size={32} color={color} weight="fill"></House>
    ) 
  }}></Tabs.Screen>
  <Tabs.Screen name = "booking"
    options={{
      tabBarIcon: ({color}) => (
        <Bookmark size={32} color={color} weight="fill"></Bookmark>
      ) 
    }}></Tabs.Screen>
    </Tabs>

)}
