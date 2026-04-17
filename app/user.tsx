import { router, useGlobalSearchParams } from "expo-router";
import { Alert, View, StyleSheet, Dimensions, FlatList, ScrollView } from "react-native";
import AppHeader from "./components/app-header";
import { PostContent, USER_POSTS, USERS } from "@/scripts/data";
import Post from "./components/post";
import UserHeader from "./components/user-header";

function filtered(id: number, ulist: PostContent[]): PostContent[] {
    var outlist: PostContent[] = [];

    for ( const post of ulist )
    {
        if (post.ownerId === id) outlist.push(post);
    }

    outlist.sort((a, b) => a.time.getTime() - b.time.getTime())

    return outlist;
}

export default function User () {

    const { ownerId } = useGlobalSearchParams();

    function goBack () { // eu acho q isso proca quando tu usa o botao voltar do mobile??? 0 ideia, mas tava no codigo do anderson
        if(!router.canGoBack()){
            Alert.alert('Erro esoterico');
        }
        router.back();
    }

    return (
        <View style={style.container}>
            <AppHeader />

            <UserHeader
                name={USERS[+ownerId].name}
                descr={USERS[+ownerId].descr}
                pfp={USERS[+ownerId].pfp}
            />

            <View style={style.postList}>
                <ScrollView style={style.postList}>
                    {/* <View style={style.postList}> */}
                    <FlatList
                        data={filtered(+ownerId, USER_POSTS)}
                        keyExtractor={(item, index) => 'key'+index}
                                                renderItem={({item}) => (
                            <Post
                                ownerId={item.ownerId}
                                text={item.text}
                                img={item.img}
                                time={item.time}
                                id={item.id}
                            />
                        )}>
                    </FlatList>
                    {/* </View> */}
                </ScrollView>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        overflow: 'scroll'
    },
    postList: {
        marginTop: '2%',
        overflow: 'scroll'
    }
});