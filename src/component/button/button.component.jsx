const Button = ({ buttonName, onClickHandler }) => {
  console.log(onClickHandler);
  return (
    <div className="button-container">
      <button
        className="gen-quote-button"
        onClick={onClickHandler}
        value={false}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
