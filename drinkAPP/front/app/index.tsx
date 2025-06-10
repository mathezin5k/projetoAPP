import {View, Text} from "react-native";
import Login from "./auth/login";
import { useEffect } from "react";
import {useRouter} from "expo-router"

export default function Index(){
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            const isLoggedIn = false;

            if(isLoggedIn){
                router.navigate("./tabs/index");
            }
            else{
                return <Login></Login>
            }
        }, 1000)
    }, [])
    return(
        <Login></Login>
    );
}