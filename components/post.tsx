import { Image, StyleSheet, Text, View } from "react-native";
import { PostContent } from "../models/postContent";

export default function Post ({profilepic, username, text, image} : PostContent) {
    return (
        <View style={style.postBg}>
            <View style={style.upperHbox}>
                <Image source={{uri: profilepic}} style={style.accountPic} resizeMode="cover"></Image>
                <Text style={style.accountName}>{username}</Text>
            </View>
            <Text>{text}</Text>
            <Image source={{uri: image}} style={style.image}></Image>
        </View>
    );
}

const style = StyleSheet.create({
    postBg: {
        backgroundColor: "#ebebeb",
        margin: "2%",
        padding: "4%",
        borderRadius: 6,
        color: "#000000",
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },

    upperHbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    accountName: {
        fontSize: 20
    },

    accountPic: {
        width: 48,
        height: 48,
        borderRadius: 100
    },

    image: {
        width: '100%',
        height: 180,
        borderRadius: 6,
    }
});