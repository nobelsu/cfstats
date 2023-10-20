import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import * as Crypto from "expo-crypto";
import { BASE_URL, KEY, SECRET } from "@env";

export default function Home({ navigation }) {
  const BASE = process.env.BASE_URL;
  const [handle, changehand] = useState("");

  async function pressBtn() {
    // changesub("red");
    // changetex("white");
    console.log(handle);
    if (handle != "") {
      const infoURL = BASE + "user.info?handles=" + handle;
      let response = await fetch(infoURL);
      let json = await response.json();
      if (json.status == "OK") {
        navigation.navigate("Profile", { handle });
      } else {
        navigation.navigate("Error", { handle });
      }
    }
    changehand("");
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
