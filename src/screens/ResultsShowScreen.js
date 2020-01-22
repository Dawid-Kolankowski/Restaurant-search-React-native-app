import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";
import ReviewDetail from "../components/ReviewDetail";
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [reviews, setReviews] = useState([]);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    const reviewsResponse = await yelp.get(`/${id}/reviews`);
    setReviews(reviewsResponse.data.reviews);
  };

  useEffect(() => {
    getResult(id);
  }, []);

 
  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{result.name}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.imageStyle} />;
        }}
      />
      <View style={styles.restaurantDetials}>
        <Text style={styles.textBold}>Phone</Text>
        <Text>{result.phone}</Text>
        <Text style={styles.textBold}>Location</Text>
        <Text>{result.location.address1}</Text>
        <Text>{result.location.city}</Text>
  
      </View>
      <Text style={styles.reviewsHeaderStyle}>Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={review => review.id}
        renderItem={({ item }) => {
          return (
            <ReviewDetail
              user={item.user.name}
              review={item.text}
              rating={item.rating}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  imageStyle: {
    height: 200,
    width: 300,
    marginHorizontal: 10,
    borderRadius: 30
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  restaurantDetials: {
    marginHorizontal: 15
  },
  textBold: {
    fontWeight: "bold",
    marginTop: 5
  },
  reviewsHeaderStyle:{
    marginHorizontal:15,
    fontSize:18,
    fontWeight:"bold",
    marginTop:20
  }
});

export default ResultsShowScreen;
