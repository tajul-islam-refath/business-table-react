import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSearchResults } from "./API/api";

function App() {
  const result = useSelector((state) => state.data.result);
  console.log(result);
  useEffect(() => {
    getSearchResults(1, 5, "0");
  }, []);
  return <div className="App"></div>;
}

export default App;
