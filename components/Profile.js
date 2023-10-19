import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../styles";

export default function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.handle}</Text>
    </View>
  );
}
