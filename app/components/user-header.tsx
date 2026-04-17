import { User } from "@/scripts/data";
import { View, Image, Text, StyleSheet } from "react-native";
import { swapLB } from "./post";

export default function UserHeader({name, pfp, descr}: User) {
    return (
        <View style={style.uHeader}>
            <View style={style.title}>
                <Image style={style.uPFP} source={{uri: pfp}}></Image>
                <Text style={style.name}>{name}</Text>
            </View>

            <Text style={style.uDescr}>{swapLB(descr)}</Text>

            <View style={style.stats}>
                <Text>Followers: </Text>
                <Text>{Math.trunc(Math.random() * 1000)}</Text>
            </View>
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
        maxHeight: '25%',
        margin: '2%',
        borderRadius: 6,
        padding: 12,
        backgroundColor: '#e2e1e1'
    },
    uPFP: {
        width: 64,
        height: 64,
        borderRadius: 100
    }
})