import { useState } from "react";
import "./App.css";
import Button from "./component/button/button.component";
import DisplayQuote from "./component/display/display-quote.component";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const onClickHandler = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="App">
      <div className="main-container">
        <DisplayQuote quote={quote} author={author} />
        <Button buttonName="Generate Quote" onClickHandler={onClickHandler} />
      </div>
    </div>
  );
};

export default App;
