import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  const categorias = ["Entradas", "Pratos Principais", "Sobremesas", "Bebidas"];

  const categoriasEmPares = [];
  for (let i = 0; i < categorias.length; i += 2) {
    categoriasEmPares.push(categorias.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias do Cardápio</Text>

      {categoriasEmPares.map((par, index) => (
        <View key={index} style={styles.row}>
          {par.map((categoria, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.button}
              onPress={() => navigation.navigate("Categoria", { categoria })}
            >
              <Text style={styles.buttonText}>{categoria}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity
        style={styles.buttonCadastroTopo}
        onPress={() => navigation.navigate("CadastroProduto")}
      >
        <Text style={styles.plus}>+</Text>
        <Text style={styles.buttonCadastroText}>Cadastrar Produto</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.signature}>
        Feito por Gustavo Marcolin Soares - TADS 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  signature: {
    fontSize: 14,
    color: "#888",
    marginTop: 10,
    fontStyle: "italic",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B2E1B",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#F8F0D8",
    flex: 0.48,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  buttonCadastroTopo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2AA4C",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    marginTop: 100,
  },
  plus: {
    fontSize: 24,
    color: "#fff",
    marginRight: 10,
    fontWeight: "bold",
  },
  buttonCadastroText: {
    fontSize: 18,
    color: "#fff",
  },
  logoContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    opacity: 0.7,
  },
});
