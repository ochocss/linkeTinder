import LogoWhite from "@/assets/images/logo_white.png";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AppHeader () {
    return (
        <View style={style.header}>
            <Image source={LogoWhite} style={style.headerLogo}></Image>
            <Text style={style.headerTitle}>linketinder</Text>
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