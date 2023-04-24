import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import { styles } from "./styles";

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 15,
            position: "absolute",
            marginTop: 10,
            color: "gray"
          }}
        >
          Find your
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            position: "absolute",
            marginTop: 35,
            color: "black"
          }}
        >
          Favorite Comfort Food
        </Text>

        <Image
        style={styles.image2}source={require("../../assets/images/banner_item.png")}/>
        <View style={styles.InputContainer} />
        <TextInput
          style={styles.input1}
          placeholder={"          Search"}
        />
        <View style={{ position: "absolute", marginTop: 260, marginLeft: 15 }}>
          <Image
            style={styles.image3}
            source={require("../../assets/images/search.png")}
          />
        </View>

        <View style={styles.banner_container2}>
          <View style={styles.banner_item}>
            <Text style={{ fontSize: 19, fontWeight: "bold", marginTop: 10, marginLeft: 55 }}>
              Categories
            </Text>
          </View>
          <View style={styles.banner_item}>
            <Text
              style={{
                marginLeft: 130,
                textAlign: "right",
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 15
              }}
            >
              See all
            </Text>
          </View>
        </View>

        <TextInput
          style={styles.input2}
          placeholder={"               Garlic Shrimp   $4.90"}
        />
        <Image
          style={{
            position: "absolute",
            height: 55,
            width: 55,
            marginLeft: 65,
            marginTop: 455
          }}
          source={require("../../assets/images/Shrimp.png")}
        />
        <TextInput
          style={styles.input3}
          placeholder={"              Grilled Lobster   $10.90"}
        />
        <Image
          style={styles.image6}
          source={require("../../assets/images/Grilled_Lobster.png")}
        />
        <TextInput
          style={styles.input4}
          placeholder={"              Garlic/Pepper Crab  $6.90"}
        />
          <Image
          style={styles.image7}
          source={require("../../assets/images/crab.png")}
        />
        
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;