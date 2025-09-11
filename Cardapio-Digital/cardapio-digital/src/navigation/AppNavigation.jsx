import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import CategoriaProduto from "../screens/CategoriaProduto";
import CadastroProduto from "../screens/CadastroProduto";

const Stack = createNativeStackNavigator();
export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Cardápio Digital - Seu Zé" }}
        />
        <Stack.Screen
          name="Categoria"
          component={CategoriaProduto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroProduto"
          component={CadastroProduto}
          options={{ title: "Cadastrar Produto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
