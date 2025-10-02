import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { API_KEY, BASE_URL } from "./config";

export default function HomeScreen({ navigation }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/822119?api_key=${API_KEY}&language=es-ES`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, []);

  if (!movie) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Detail", { movie })}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} resizeMode="contain"/>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    poster: { width: 300, height: 450, borderRadius: 10, marginBottom: 20, alignSelf: "center" },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
    overview: { fontSize: 16, textAlign: "center" },
});
