import { User } from "@/scripts/data";
import { View, Image, Text, StyleSheet } from "react-native";
import { swapLB } from "./post";
import { Button } from "@react-navigation/elements";

export default function UserHeader({name, pfp, descr}: User) {
    return (
        <View style={style.uHeader}>
            <View style={style.title}>
                <Image style={style.uPFP} source={{uri: pfp}}></Image>
                <Text style={style.name}>{name}</Text>
            </View>

            <Text style={style.uDescr}>{swapLB(descr)}</Text>

            <View style={style.stats}>
                <Text>Seguidores: </Text>
                <Text>{Math.trunc(Math.random() * 1000)}</Text>
            </View>
            <Button style={style.matchBtn}><Text style={style.textBtn}>Match</Text></Button>
        </View>
    )
}

const style= StyleSheet.create({
    stats: {
        // flex: 1,
        flexDirection: 'row',
        fontSize: 15
    },
    uDescr: {
        fontSize: 20,
        marginBottom: 10
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 10
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    uHeader: {
        width: '95%',
        maxHeight: '100%',
        margin: '2%',
        borderRadius: 6,
        padding: 12,
        backgroundColor: '#e2e1e1',
        gap: 16
    },
    uPFP: {
        width: 64,
        height: 64,
        borderRadius: 100
    },
    matchBtn: {
        height: 32,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#0275B4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})