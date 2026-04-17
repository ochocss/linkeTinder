import { USERS } from '@/scripts/data'
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { PostContent } from "@/scripts/data";
import { Link } from "expo-router";

export const swapLB = (str: string) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });

export default function Post ({ownerId, text, img, time, id} : PostContent) {
    return (
        <View style={style.postBody}>
            <Link href={{
                pathname: '/user',
                params: {
                    ownerId: ownerId
                }
            }}>
                <View style={style.postHeader}>
                    <Image source={{uri: USERS[ownerId].pfp}} style={style.accountPic} resizeMode="cover"></Image>
                    <Text style={style.accountName}>{USERS[ownerId].name}</Text>
                    <Text style={style.postTime}>{`${time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}`}</Text>
                </View>
            </Link>

            <Text style={style.text}>{swapLB(text)}</Text>
            {
                img === undefined ?
                (<></>)
                :
                (<Image source={{uri: img}} style={style.image}></Image>)
            }
        </View>
    );
}

const style = StyleSheet.create({
    postBody: {
        backgroundColor: '#e2e1e1',
        borderRadius: 6,
        flex: 1,
        flexDirection: 'column',
        width: '95%',
        padding: '4%',
        margin: 'auto',
        marginBottom: '4%'
    },
    postHeader: {
        marginTop: '2%',
        height: '5%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
        fontWeight: 'bold'
    },
    postTime: {
        fontSize: 12,
        maxWidth: '15%',
        right: 0,
        color: '#383838',
        fontWeight: '100'
    },
    accountPic: {
        height: 32,
        width: 32,
        borderRadius: '100%',
    },
    accountName: {
        fontSize: 20
    },
    text: {
        fontSize: 18
    },
    image: {
        objectFit: 'fill',
        overflow: 'hidden',
        marginTop: '2%',
        borderRadius: 6,
        width: '100%',
        height: Dimensions.get('window').height / 4,
    }
});