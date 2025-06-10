import { useRouter } from "expo-router";
import { ArrowArcLeft, EnvelopeSimple, LockKey, GoogleLogo, FacebookLogo } from "phosphor-react-native";
import {View, Text, StyleSheet, Touchable, TouchableOpacity, TextInput} from "react-native";

export default function singnup(){
    const router = useRouter();


    function handlelogin(){
        router.replace("/auth/login")
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.header}>
                <ArrowArcLeft size={32} color="#f4f4f4" weight="regular"></ArrowArcLeft>
            </TouchableOpacity>

            <Text style={styles.welcome}>Cadastro</Text>

            <View style={styles.content}>
                <View style={styles.contentInput}>
                    <EnvelopeSimple size={32} color="#757575"></EnvelopeSimple>
                    <TextInput placeholder="Seu e-mail" style={styles.input} placeholderTextColor="#757575"></TextInput>
                </View>

                <View style={styles.contentInput}>
                    <LockKey size={32} color="#757575"></LockKey>
                    <TextInput placeholder="Sua senha" style={styles.input} placeholderTextColor="#757575"></TextInput>
                </View>
            </View>

            <TouchableOpacity onPress={handlelogin} style={styles.buttonSignIn}>
                <Text style={styles.buttonSignInText}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181a20",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    header: {
    alignSelf: "flex-start",
    marginTop: 50,
    },
    welcome: {
        color: "#f4f4f4",
        marginTop: 50,
        fontSize:24,
        fontWeight: "600",
    },
    content: {
        width: "100%",
        marginTop: 50,
        alignItems:"center",
        gap: 20,

    },
    contentInput: {
        width: "100%",
        height: 56,
        backgroundColor: "#1f222a",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,

        },
    input: {
        flex: 1,
        color: "#757575",
    },
    buttonSignIn: {
        backgroundColor: "#1ab55c",
        width: "100%",
        height: 56,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    buttonSignInText: {
        color:"#f4f4f4",
        fontSize: 16,
        fontWeight: "800"
    },
})