import React from "react";
import { Image, StyleSheet, Touchable, View } from "react-native";

import common from "../../util/common";
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("Chat");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/traveller.png")}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Your Path to Effortless Travel Planning and Savings</Text>
        <Button title="Get Started" onPress={handleGetStarted} />
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: common.color.backgroundPrimary,
    paddingHorizontal: common.sizes.l,
  },
  subContainer: {
    marginTop: common.sizes.l,
    gap: common.sizes.m,
  },
  heading: {
    textAlign: "center",
    fontFamily: common.text.poppinsSemiBold,
    fontSize: common.sizes.ml,
  },
  subHeading: {
    textAlign: "center",
    fontSize: common.sizes.s,
  },
  image:{
    width: 300,
    height: 300,
    resizeMode: "contain",  
  }
});
