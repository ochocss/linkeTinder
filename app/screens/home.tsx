import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native';
import AppHeader from '../components/app-header';
import Post from '../components/post';
import { USER_POSTS } from '@/scripts/data';

export default function Home () {
    return ( // scrollview nao funciona, vou se matar
        <View style={style.container}>
            <AppHeader />
            <ScrollView style={style.postList}>
                {/* <View style={style.postList}> */}
                <FlatList
                    data={USER_POSTS}
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
    );
}

const style = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    postList: {
        marginTop: '2%',
        overflow: 'scroll'
    }
});