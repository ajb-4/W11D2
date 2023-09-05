import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import {useTheme} from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { ThemeContext } from '../../context/ThemeContext';

function Greenhouse() {

  const { themeName, setThemeName } = useTheme();

  if (themeName === "day"){
    return (
      <section>
      <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
    )
  } else if (themeName === "night") {
    return (
      <section>
        <img  className='greenhouse-img'
              src={nightImage}
              alt='greenhouse' 
        />
        <LightSwitch />
        <ClimateStats />
      </section>
    )
  }

  // return (
  //   <section>
  //     <img  className='greenhouse-img'
  //           src={dayImage}
  //           alt='greenhouse' 
  //     />
  //     <img  className='greenhouse-img'
  //           src={dayImage}
  //           alt='greenhouse' 
  //     />
  //     <LightSwitch />
  //     <ClimateStats />
  //   </section>
  // );
}

export default Greenhouse;