import ColorCard from "./ColorCard";

const ColorCards = ({ colors, updateColor }) => {
  return (
    <>
      {colors.map((color) => (
        <ColorCard key={color} cardColor={color} updateColor={updateColor} />
      ))}
    </>
  );
};

export default ColorCards;
