import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

export default function CardItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.card}>
      <Image
        source={
          typeof item.imagem === "string" ? { uri: item.imagem } : item.imagem
        }
        style={styles.image}
      />
      <View style={styles.info}>
        {/* Aqui vai exibir o ID do Produto */}
        <Text style={styles.id}>ID: {item.id}</Text>

        <Text style={styles.nome}>{item.nome}</Text>
        <Text numberOfLines={2}>{item.descricao}</Text>
        <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>

        {item.alergicos && (
          <Text style={styles.alergicos}>
            Alérgenos: {item.alergicos.join(", ")}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  id: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  preco: {
    fontSize: 16,
    color: "#333",
    marginTop: 4,
  },
  alergicos: {
    fontSize: 14,
    color: "red",
    marginTop: 4,
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  ingredientes: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  preparo: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
