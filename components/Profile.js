import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import * as Crypto from "expo-crypto";
import { BASE_URL, KEY, SECRET } from "@env";

export default function Profile({ navigation, route }) {
  const BASE = process.env.BASE_URL;
  const APIKEY = process.env.KEY;
  const APISECRET = process.env.SECRET;

  const [rating, changeRating] = useState("");
  const [upRank, changeUpRank] = useState("");
  const [org, changeOrg] = useState("");
  const [country, changeCount] = useState("");
  const [imgurl, changeImg] = useState("");

  async function encrypt(mes) {
    return await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA512,
      mes
    );
  }

  async function loadData() {
    const infoURL = BASE + "user.info?handles=" + route.params.handle;
    let response = await fetch(infoURL);
    let json = await response.json();
    console.log(json.result[0]);
    changeRating(json.result[0].rating);
    changeUpRank(
      json.result[0].rank[0].toUpperCase() + json.result[0].rank.slice(1)
    );
    changeOrg(json.result[0].organization);
    changeCount(json.result[0].country);
    changeImg(json.result[0].avatar);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imgurl }}
        style={{ width: "25%", aspectRatio: 1, marginBottom: 20 }}
      />
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.title}>{route.params.handle}</Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: "bold" }}>Current Rating:</Text> {rating}
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: "bold" }}>Current Rank:</Text> {upRank}
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: "bold" }}>Organization:</Text> {org}
        </Text>
        <Text style={styles.para}>
          <Text style={{ fontWeight: "bold" }}>Country:</Text> {country}
        </Text>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{ alignItems: "center", width: "100%" }}
      >
        <Text style={styles.btn}>Return</Text>
      </Pressable>
    </View>
  );
}
