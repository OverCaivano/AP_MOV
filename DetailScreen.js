import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}> Estreno: {movie.release_date}</Text>
      <Text style={styles.text}> Idioma original: {movie.original_language}</Text>
      <Text style={styles.text}> Duración: {movie.runtime} min</Text>
      <Text style={styles.text}> Popularidad: {movie.popularity}</Text>
      <Text style={styles.text}> Puntaje promedio: {movie.vote_average}</Text>
      <Text style={styles.text}> Descripción:</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  text: { fontSize: 16, marginBottom: 8 },
  overview: { fontSize: 15, marginTop: 10, textAlign: "justify" },
});
