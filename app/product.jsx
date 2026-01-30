import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"



export default function Produto() {
    return (
        <View style={[styles.container, { backgroundColor: "#f9e2a4ff" }]}>
            <Text>Produtos</Text>
            <Link push href="/product-detail">Ir para Detalhes do Produto</Link>
        </View>
    )
}