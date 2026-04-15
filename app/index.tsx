import LogoWhite from "@/assets/images/logo_white.png";
import { Button } from "@react-navigation/elements";
import { Image, StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";

export default function App ()
{
    return (
        <View style={style.main}>
            <View style={style.header}>
                <Image source={LogoWhite} style={style.headerLogo}></Image>
                <Text style={style.headerTitle}>linketinder</Text>
            </View>
            <View style={style.menu}>
                <Button>Aa</Button>
                <Button>Aa</Button>
            </View>
            <Home></Home>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#0275B4',
        gap: '10px',
        height: '12vh',
        alignItems: 'center',
        padding: '3%'
    },

    headerLogo: {
        width: 100,
        height: '100%',
        objectFit: 'contain',
        resizeMode: 'contain'
    },

    headerTitle: {
        color: '#FFFFFF',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        fontSize: '32px'
    },

    menu: {
        display: 'flex',
        flexDirection: 'row'
    },
});