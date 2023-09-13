const Title = ({
  name,
  index,
  setRotation,
  setIndex,
  textEnter,
  textLeave,
}) => {
  return (
    <div
      onMouseEnter={() => {
        setRotation(index), console.log("This is working");
      }}
      onMouseLeave={() => {
        setIndex(-1);
      }}
      className="title-item"
    >
      <h1 className="w-fit" onMouseEnter={textEnter} onMouseLeave={textLeave}>{name}</h1>
    </div>
  );
};
export default Title;
