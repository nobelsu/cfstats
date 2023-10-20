import { View, Text, Pressable } from "react-native";
import { styles } from "../styles";

export default function Error({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.errort}>
          "
          <Text style={{ fontWeight: "bold", color: "#BD2026" }}>
            {route.params.handle.trim()}
          </Text>
          " is not a valid handle!
        </Text>
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
