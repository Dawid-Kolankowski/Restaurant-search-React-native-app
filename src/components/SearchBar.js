import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 35,
    flexDirection: "row",
  
  },
  iconStyle:{
      fontSize:40,
      alignSelf:'center',
      marginHorizontal:2
  },
  inputStyle: {
    fontSize:18,
    flex:1

  }
});

export default SearchBar;
