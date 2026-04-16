import { Image, StyleSheet, Text, View } from "react-native";
import { PostContent } from "../models/user";

export default function Post (content : PostContent) {
    return (
        <View style={style.postBg}>
            <View></View>
            <Text>{content.text}</Text>
            <Image></Image>
        </View>
    ); // TODO: descobrir como fazer imagem com url, arrumar estilos
}

const style = StyleSheet.create({
    postBg: {
        backgroundColor: "#d6d6d6",
        margin: "2%",
        padding: "4%",
        borderRadius: 6,
    }
});