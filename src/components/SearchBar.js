import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
        value={searchTerm}
        onChangeText={newTerm=>onTermChange(newTerm)}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={()=> onTermSubmit()}
      />
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
    marginBottom:15,
    flexDirection: "row"
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 5
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  }
});

export default SearchBar;
