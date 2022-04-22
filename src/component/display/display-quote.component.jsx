import Button from "../button/button.component";

const DisplayQuote = ({ quote, author, onClickHandler }) => {
  return (
    <div className="display-quote-container">
      <h1>{quote}</h1>
      <span>-{author}</span>
    </div>
  );
};

export default DisplayQuote;
