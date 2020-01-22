import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const ResultsDetail = ({ result }) => {


  // console.log(result)
  return (
    <View style={styles.container}>
      {result.image_url?<Image style={styles.imageStyle} source={{ uri: result.image_url }} />:<MaterialIcons style={styles.iconStyle} name="restaurant-menu"/>}
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle:{
    fontSize: 120,
    alignSelf: "center",
    marginHorizontal:5

  },
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold"
  }
});
export default ResultsDetail;
