import LogoWhite from "@/assets/images/logo_white.png";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AppHeader () {
    return (
        <Link style={style.header} href={{pathname: '/'}}>
            <Image source={LogoWhite} style={style.headerLogo}></Image>
            <Text style={style.headerTitle}>linketinder</Text>
        </Link>
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
        height: '10%',
        width: '100%',
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
        fontSize: 32
    },
});