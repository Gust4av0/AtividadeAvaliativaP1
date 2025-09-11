import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { adicionarProduto } from "../data/produtosMock";

export default function CadastroProduto({ navigation }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");

  const handleCadastrar = () => {
    if (!nome || !preco || !categoria) {
      Alert.alert("Erro", "Nome, Preço e Categoria são obrigatórios!");
      return;
    }

    const novoProduto = {
      nome,
      descricao,
      preco: parseFloat(preco),
      categoria,
      imagem,
    };
    const produtoCadastrado = adicionarProduto(novoProduto);

    Alert.alert(
      "Sucesso",
      `Produto ${produtoCadastrado.nome} cadastrado com ID ${produtoCadastrado.id}`
    );

    // Limpar os campos
    setNome("");
    setDescricao("");
    setPreco("");
    setCategoria("");
    setImagem("");

    // Voltar para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Produto</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
      />
      <TextInput
        placeholder="URL da Imagem"
        value={imagem}
        onChangeText={setImagem}
        style={styles.input}
      />

      {/* Botão Cadastrar */}
      <TouchableOpacity onPress={handleCadastrar} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Botão Voltar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.button, styles.backButton]}
      >
        <Text style={styles.buttonText}>Voltar à Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, marginTop: 40 },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#E2AA4C",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  backButton: {
    backgroundColor: "#4B2E1B",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
