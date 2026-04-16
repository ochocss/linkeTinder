import { StyleSheet, View } from 'react-native';
import AppHeader from '../components/app-header';
import Post from '../components/post';

export default function Home () {
    return (
        <View>
            <AppHeader></AppHeader>
            <Post>

            </Post>
        </View>
    );
}

const style = StyleSheet.create({
    container: {

    }
});