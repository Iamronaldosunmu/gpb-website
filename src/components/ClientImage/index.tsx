// import cn from "classnames"

const ClientImage = ({ image, active, rotationPosition }) => {
  return (
    <img
      // className={cn({ active })}
      className={active ? "active" : ""}
      src={image}
      style={{
        transform: active
          ? `scale(1.1) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`, opacity: active ? 1 : 0.5
      }}
    ></img>
  );
};

export default ClientImage;
