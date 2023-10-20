import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";

export default function Home({ navigation }) {
  const [subcol, changesub] = useState("white");
  const [texcol, changetex] = useState("black");
  const [handle, changehand] = useState("");

  function pressBtn() {
    // changesub("red");
    // changetex("white");
    navigation.navigate("Profile", { handle });
  }

  useEffect(() => {
    changesub("white");
    changetex("black");
  });

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
        <Text
          style={{
            padding: 10,
            fontSize: 15,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 10,
            width: "80%",
            maxWidth: 300,
            textAlign: "center",
            backgroundColor: subcol,
            overflow: "hidden",
            color: texcol,
          }}
        >
          Search
        </Text>
      </Pressable>
    </View>
  );
}
