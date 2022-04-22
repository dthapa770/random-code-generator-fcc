import { useEffect, useState } from "react";
import "./App.css";
import Button from "./component/button/button.component";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const onClickHandler = () => {
    console.log("---");
  };

  return (
    <div className="App">
      <Button buttonName="Generate Quote" onClickHandler={onClickHandler} />
    </div>
  );
};

export default App;
