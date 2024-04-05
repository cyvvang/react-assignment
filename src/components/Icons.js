const Icons = ({onClickHandler, value, img}) => {
  return (
    <div className="pfp-btn" onClick={onClickHandler} value={value}>
      <img src={img}/>
    </div>
  );
}

export default Icons;