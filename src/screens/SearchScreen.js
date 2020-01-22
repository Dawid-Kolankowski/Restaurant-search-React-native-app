import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const priceFilter = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.background}>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={newTerm => setSearchTerm(newTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          results={priceFilter("$")}
          title="Cheap"
         
        />
        <ResultsList
          results={priceFilter("$$")}
          title="Normal Price"
         
        />
        <ResultsList
          results={priceFilter("$$$")}
          title="Expensive"
         
        />
        <ResultsList
          results={priceFilter("$$$$")}
          title="Very expensive"
         
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1
  }
});

export default SearchScreen;
