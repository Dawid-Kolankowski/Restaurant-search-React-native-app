import React, { useState, useEffect } from "react";
import { View, Text,Image, StyleSheet,FlatList } from "react-native";
import yelp from "../api/yelp";
const ResultsShowScreen = ({ navigation }) => {

  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if(!result){
    return null;
  }
  console.log(result)
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
       showsHorizontalScrollIndicator={false}
      horizontal
      data={result.photos}
      keyExtractor={photo=>photo}
      renderItem={({item})=>{
        return <Image source={{uri:item}} style={styles.imageStyle}/>
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:35
  },
  imageStyle:{
    height:200,
    width:300,
    marginHorizontal:10,
    borderRadius:30,
    
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }

});

export default ResultsShowScreen;
