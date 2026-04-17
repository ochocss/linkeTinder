import { StyleSheet, View } from 'react-native';
import AppHeader from '../components/app-header';
import Post from '../components/post';

export default function Home () {
    return (
        <View>
            <AppHeader />
            <Post
                username={"Júnior Entrosa"}
                profilepic={"https://as2.ftcdn.net/jpg/01/40/87/71/1000_F_140877194_Ns1yqiZNk64k8yELu6zXtx9SmRgslkey.jpg"}
                text={"Semana passada minha casa explodiu. Enquanto muitos entrariam em pânico e se desesperariam, aproveitei a oportunidade para aprender sobre relacionamentos.\n\nPoucos tem essa mentalidade"}
                image={"https://s2-g1.glbimg.com/DNzoT4EIZK1GvLUQDjo-UFoYKHo=/0x0:1700x1065/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/V/f/8HnuXLQqqe0oBr5M5GwQ/casa.jpg"}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {

    }
});