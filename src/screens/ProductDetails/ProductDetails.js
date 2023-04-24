import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import { styles } from "./styles";

const ProductDetails = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView>
  
        <Text style={styles.textBody}>Seafood Platter</Text>

        <Image
          style={styles.image1}
          source={require("../../assets/images/seafood-platter.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            position: "absolute",
            marginLeft: 80,
            marginTop: 355
          }}
        ></Text>

        <Text
          style={{
            color: "grey",
            fontSize: 15,
            position: "absolute",
            marginLeft: 60,
            marginTop: 418
          }}
        >
          Price
        </Text>
        <TextInput style={styles.input2} placeholder={"   -     1     +"} />

        <Text
          style={{
            color: "green",
            fontSize: 19,
            fontWeight: "bold",
            position: "absolute",
            marginLeft: 60,
            marginTop: 438
          }}
        >
          $12
        </Text>
        <TextInput style={styles.input} placeholder={"Add to chart"} />
        <View
          style={{
            height: "%",
            marginTop: 22,
            marginBottom: 15
          }}
        ></View>

      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductDetails;