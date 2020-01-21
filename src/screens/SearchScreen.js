import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi,results,errorMessage]=useResults();

  return (
    <View style={styles.background}>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={newTerm => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length}</Text>
      <ResultsList title="Cheap"/>
      <ResultsList title="Regular Price"/>
      <ResultsList title="Expensive"/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    height: "100%"
  }
});

export default SearchScreen;
