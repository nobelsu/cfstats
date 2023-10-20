import { View, Text, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import * as Crypto from "expo-crypto";

export default function Profile({ navigation, route }) {
  const BASE = process.env.BASE_URL;
  const APIKEY = process.env.KEY;
  const APISECRET = process.env.SECRET;

  const [hand, changeHand] = useState(route.params.handle);
  const [rating, changeRating] = useState("Unrated");
  const [upRank, changeUpRank] = useState("Unranked");
  const [org, changeOrg] = useState("N/A");
  const [country, changeCount] = useState("N/A");
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
    if (json.result[0].rating) changeRating(json.result[0].rating);
    if (json.result[0].rank)
      changeUpRank(
        json.result[0].rank[0].toUpperCase() + json.result[0].rank.slice(1)
      );
    if (json.result[0].organization) changeOrg(json.result[0].organization);
    if (json.result[0].country) changeCount(json.result[0].country);
    changeImg(json.result[0].avatar);
    changeHand(json.result[0].handle);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={{ uri: imgurl }}
          style={{ width: "30%", aspectRatio: 1, marginBottom: 20 }}
        />
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.title}>{hand}</Text>
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
            navigation.goBack();
          }}
          style={{ alignItems: "center", width: "100%" }}
        >
          <Text style={styles.btn}>Return</Text>
        </Pressable>
      </View>
    </View>
  );
}
