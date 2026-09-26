import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const destinos = {
  "Rio de Janeiro": 850,
  "São Paulo": 700,
  "Salvador": 1200,
  "Recife": 1500,
  "Foz do Iguaçu": 1000,
  "Brasília": 900,
};

export default function App() {
  const [cidade, setCidade] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.titulo}> Viagem</Text>

        <Text style={styles.subtitulo}>
          Escolha seu destino
        </Text>

        <View style={styles.lista}>
          {Object.keys(destinos).map((destino) => (
            <TouchableOpacity
              key={destino}
              style={[
                styles.cidade,
                cidade === destino && styles.cidadeSelecionada,
              ]}
              onPress={() => setCidade(destino)}
            >
              <Text
                style={[
                  styles.textoCidade,
                  cidade === destino && styles.textoSelecionado,
                ]}
              >
                {destino}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {cidade && (
          <View style={styles.resultado}>
            <Text style={styles.pequeno}>
              VIAGEM PARA
            </Text>

            <Text style={styles.destino}>
              {cidade}
            </Text>

            <Text style={styles.preco}>
              R$ {destinos[cidade].toLocaleString("pt-BR")}
            </Text>

            <Text style={styles.info}>
              Valor estimado da viagem
            </Text>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  content: {
    padding: 25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 30,
  },

  subtitulo: {
    fontSize: 18,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 25,
  },

  lista: {
    gap: 12,
  },

  cidade: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cidadeSelecionada: {
    backgroundColor: "#040508",
    borderColor: "#2563EB",
  },

  textoCidade: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1F2937",
  },

  textoSelecionado: {
    color: "#FFFFFF",
  },

  resultado: {
    backgroundColor: "#0e1118",
    marginTop: 25,
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },

  pequeno: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "bold",
  },

  destino: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },

  preco: {
    color: "#60A5FA",
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 20,
  },

  info: {
    color: "#9CA3AF",
    marginTop: 5,
  },
});
