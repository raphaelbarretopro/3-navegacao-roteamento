import { Pressable, Text, View } from "react-native"
import { styles } from "../styles/styles"
import { router } from "expo-router"

export default function Settings() {
    const goToHome = () => {
        router.navigate("/")
    }

    return (
        <View style={[styles.container, { backgroundColor: "#fac124ff" }]}>
            <Text>Settings</Text>
            <Pressable onPress={goToHome}>
                <Text> Ir para Home</Text>
            </Pressable>
        </View>
    )
}