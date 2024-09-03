import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <HexColorPicker
        color={snap.color}
        onChange={(color) => (state.color = color)}
      />
    </div>
  );
};

export default ColorPicker;
