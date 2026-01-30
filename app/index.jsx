import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function Home() {
  return (
    <View style={[styles.container, { backgroundColor: "#FAEDC8" }]}>
      <Text>Home</Text>
      <Link push href="/user">Ir para Usuários</Link>
      <Link push href="/product">Ir para Produtos</Link>
    </View>
  )
}
