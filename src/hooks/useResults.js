import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searching => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searching,
          location: "Wrocław"
        }
      });
      setResults(response.data.businesses);
      errorMessage ? setErrorMessage("") : null;
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("food");
  }, []);
  return [searchApi, results, errorMessage];
};
