import { router, useGlobalSearchParams } from "expo-router";
import { Alert } from "react-native";

export default function User () {

    const { id, name } = useGlobalSearchParams();

    function goBack () { // eu acho q isso proca quando tu usa o botao voltar do mobile??? 0 ideia, mas tava no codigo do anderson
        if(!router.canGoBack()){
            Alert.alert('Erro esoterico');
        }
        router.back();
    }

    return (
        <>
        </>
    );
}