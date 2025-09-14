import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { produtosMock } from "../data/produtosMock";
import CardItem from "../components/CardItem";

const screenWidth = Dimensions.get("window").width;

export default function CategoriaProduto({ route, navigation }) {
  const { categoria } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const itens = produtosMock.filter((produto) => {
    const naCategoria = produto.categoria === categoria;

    if (searchText) {
      const pesquisa = searchText.toLowerCase();
      return (
        naCategoria &&
        (produto.nome.toLowerCase().includes(pesquisa) ||
          produto.id.toString() === pesquisa)
      );
    }

    return naCategoria;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoria}</Text>

      <TextInput
        placeholder="Pesquisar por nome ou ID"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardItem item={item} onPress={() => handleItemPress(item)} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.voltarHomeButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.voltarHomeText}>Voltar à Home</Text>
          </TouchableOpacity>
        }
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
              {selectedItem && (
                <>
                  <Image
                    source={
                      typeof selectedItem.imagem === "string"
                        ? { uri: selectedItem.imagem }
                        : selectedItem.imagem
                    }
                    style={styles.modalImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.modalTitle}>{selectedItem.nome}</Text>
                  <Text>{selectedItem.descricao}</Text>
                  <Text>Preço: R$ {selectedItem.preco.toFixed(2)}</Text>
                  {selectedItem.ingredientes && (
                    <Text>
                      Ingredientes: {selectedItem.ingredientes.join(", ")}
                    </Text>
                  )}
                  {selectedItem.preparo && (
                    <Text>Preparo: {selectedItem.preparo}</Text>
                  )}
                  {selectedItem.alergicos && (
                    <Text>Alérgenos: {selectedItem.alergicos.join(", ")}</Text>
                  )}
                </>
              )}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.fecharButton}
              >
                <Text style={styles.fecharText}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 40,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  voltarHomeButton: {
    marginTop: 20,
    backgroundColor: "#E2AA4C",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50,
  },
  voltarHomeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    width: "90%",
    maxHeight: "80%",
  },
  modalImage: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  fecharButton: {
    marginTop: 20,
    backgroundColor: "#E2AA4C",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  fecharText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
