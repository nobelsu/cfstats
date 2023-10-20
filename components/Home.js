import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import * as Crypto from "expo-crypto";

export default function Home({ navigation }) {
  const [handle, changehand] = useState("");

  async function pressBtn() {
    // changesub("red");
    // changetex("white");
    if (handle != "") {
      await navigation.navigate("Profile", { handle });
      await changehand("");
    } else {
      return;
    }
  }

  // useEffect(() => {
  //   changesub("white");
  //   changetex("black");
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ color: "#F9CF59" }}>Codeforces</Text>{" "}
        <Text style={{ color: "#1687C8" }}>Profile</Text>{" "}
        <Text style={{ color: "#BD2026" }}>Finder</Text>
      </Text>
      <TextInput
        placeholder="Handle..."
        style={styles.inp}
        maxLength={24}
        value={handle}
        onChangeText={(text) => {
          changehand(text);
        }}
      />
      <Pressable
        style={{ width: "100%", alignItems: "center" }}
        onPress={pressBtn}
      >
        <Text style={styles.btn}>Search</Text>
      </Pressable>
    </View>
  );
}
