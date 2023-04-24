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

const Cart = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView>
        
        <TextInput
          style={styles.input1}
          placeholder={"Deliver to 242 St Eve, Finland"}
        />
        <Image
          style={{
            position: "absolute",
            height: 15,
            width: 15,
            margin: "center",
            marginTop: 90,
            marginLeft: 310
          }}
          source={require("../../assets/images/arrow-down.png")}
        />

        <Text style={styles.textBody}>Fried Shrimp</Text>
        <TextInput style={styles.input2} placeholder={"   -   1    +"} />
        <Text
          style={{
            position: "absolute",
            marginLeft:  290,
            marginTop: 175,
            fontWeight: "bold"
          }}
        >
          $ 37.50
        </Text>
        <Image
          style={{
            height: 40,
            width: 80,
            marginTop: 140,
            marginLeft: 30,
            position: "absolute"
          }}
          source={require("../../assets/images/fried-shrimp.png")}
        />
        <Text style={styles.textBody}>Calamares</Text>
        <TextInput style={styles.input2} placeholder={"   -   1    +"} />
        <Text
          style={{
            position: "absolute",
            marginLeft: 290,
            marginTop: 250,
            fontWeight: "bold"
          }}
        >
          $ 37.50
        </Text>
        <Image
          style={styles.image2}
          source={require("../../assets/images/Calamares.png")}
        />
        <TextInput
          style={styles.input3}
          placeholder={
            "    Promote Code                                                    + "
          }
        />

        <Text style={{ marginLeft: 50, marginTop: 10, color: "gray" }}>
          {" "}
          Item total
        </Text>
        <Text
          style={{
            marginLeft: 285,
            position: "absolute",                  
            marginTop: 379,
            color: "gray"
          }}
        >
          {" "}
          $20.49
        </Text>

        <Text style={{marginLeft: 50, marginTop: 5, color: "gray" }}>
          {" "}
          Discount
        </Text>

        <Text
          style={{
            marginLeft: 290,
            marginTop: 404,
            color: "gray",
            position: "absolute"
          }}
        >
          {" "}
          -&10
        </Text>

        <Text style={{ marginLeft: 50, marginTop: 5, color: "gray" }}>
          {" "}
          Tax
        </Text>

        <Text
          style={{
            marginLeft: 305,
            marginTop: 425,
            color: "gray",
            position: "absolute"
          }}
        >
          {" "}
          $2
        </Text>

        <Text
          style={{
            marginLeft: 50,
            marginTop: 10,
            color: "black",
            fontWeight: "bold"
          }}
        >
          {" "}
          Total
        </Text>

        <Text
          style={{
            marginLeft: 280,
            marginTop: 455,
            color: "black",
            position: "absolute",
            fontWeight: "bold"
          }}
        >
          {" "}
          $12.49
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Cart;