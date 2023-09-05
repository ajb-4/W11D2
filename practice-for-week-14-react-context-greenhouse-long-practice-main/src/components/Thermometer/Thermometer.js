import ReactSlider from "react-slider";
import './Thermometer.css';
import { ClimateContext } from "../../context/ClimateContext";
import { useClimate } from "../../context/ClimateContext";
import { useEffect } from "react";
function Thermometer() {
  let { temperature, setTemperature, desiredTemp, setDesiredTemp} = useClimate();


  const incrementTemp = () => {
    
    if (desiredTemp > temperature){
      setTemperature(temperature +=1)
    } else if (desiredTemp < temperature){
      setTemperature(temperature -=1)
    } else {
      clearTimeout(timeout1)
    }
  }

  const timeout1 = setTimeout(incrementTemp, 1000)

  
  useEffect(()=>timeout1, [desiredTemp])
  
  return (

    
    

    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;