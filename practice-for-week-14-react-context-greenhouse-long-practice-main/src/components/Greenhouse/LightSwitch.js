import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext';
import { ThemeContext } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={function (){setThemeName("day")}}>DAY</div>
      <div className="off" onClick={function (){setThemeName("night")}}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;