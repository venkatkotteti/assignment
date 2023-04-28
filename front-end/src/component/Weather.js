import { Fragment } from "react";
import moment from "moment/moment";
import CONSTANTS from '../constants/common'

import { WiCloud, WiDayCloudy, WiDaySunny, WiDayThunderstorm, WiDaySnow, WiNightClear, WiWindy } from "weather-icons-react";

const Weather = (weather) => {

  const formateDate = (time)=>{
    return moment(time).format('DD-MMM-YYYY HH:mm A');
  }

  const displayWeatherIcon = (condition)=>{
    const defaultCondition = CONSTANTS.WEATHER.CONDITION.DEFAULT;

    const conditionsObj = {
     [CONSTANTS.WEATHER.CONDITION.PARTLY_CLOUD]:[<WiDayCloudy size={100} color="#00d2ff" />],
     [CONSTANTS.WEATHER.CONDITION.FAIR_NIGHT]: [<WiNightClear size={100} color="#00d2ff" />],
     [CONSTANTS.WEATHER.CONDITION.FAIR_DAY]: [<WiDaySunny size={100} color="##f1ebc8" />],
     [CONSTANTS.WEATHER.CONDITION.WINDY]: [<WiWindy size={100} color="#00d2ff" />],
     [CONSTANTS.WEATHER.CONDITION.CLOUDY]: [<WiCloud size={100} color="#00d2ff" />],
     [CONSTANTS.WEATHER.CONDITION.THUNDERY]: [<WiDayThunderstorm size={100} color="#00d2ff"/>],
     [CONSTANTS.WEATHER.CONDITION.DEFAULT]:[<WiDaySnow size={100} color="00d2ff" />]
    }
   return conditionsObj[condition] ?? conditionsObj[defaultCondition]
  }
  

  return (
    <Fragment>
      {weather?.info?.timestamp &&  (
      
           <div key={weather.info.image_id}>
              <h6>{CONSTANTS.WEATHER.TITLE}</h6>
              <h4>{weather?.info?.forecast}</h4>
              <p>{displayWeatherIcon([weather?.info?.forecast])}</p>
              <h5>{formateDate(weather?.info?.timestamp)}</h5>
              </div>
      )}
    </Fragment>
  );
};

export default Weather;