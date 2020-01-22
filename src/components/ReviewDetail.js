import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";


const ReviewDetail = ({user,review,rating}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>{user}</Text>
      <Text>{review}</Text>
      <Text style={styles.ratingStyle} >Rating: {rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

    container:{
    marginHorizontal:15,
    marginTop:10
    },
    header:{
        fontWeight:"bold"
    },
    ratingStyle:{
        marginTop:2,
        textAlign:'right',
  
    }

});
export default ReviewDetail;
