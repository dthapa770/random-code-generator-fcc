const Button = ({ buttonName, onClickHandler }) => {
  return (
    <div>
      <button onClick={onClickHandler}>{buttonName}</button>
    </div>
  );
};

export default Button;
