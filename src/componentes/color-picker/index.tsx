import { FC, useState } from 'react';
import { Color, ColorResult, SketchPicker } from 'react-color';

interface IColorPickerProps {
  color: Color;
  setColor: (value: Color) => void;
};

const ColorPicker: FC<IColorPickerProps> = ({ color, setColor }) => {
  const [open, setOpen] = useState(false);
  const handleChange = (colorResult: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(colorResult.rgb);
  }

  const handleClick = () => {

  };

  const handleClose = () => setOpen(!open);

  // TODO: ajustar css de exibição de cor selecionada
  return (<>
    <div onClick={handleClick}>
      <div
      //style={styles.color}
      />
    </div>
    {open ? (<div
    //style={styles.popover}
    >
      <div
        //style={styles.cover}
        onClick={handleClose}
      />
      <SketchPicker color={color} onChange={handleChange} />
    </div>) : null}
  </>);
};

export default ColorPicker;
