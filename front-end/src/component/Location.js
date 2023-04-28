import React, { useState, useEffect, Fragment } from 'react';
import {List,Input,Card,Row,Col,Form} from 'antd';
import CONSTANT from '../constants/common'
import Weather from './Weather';
import Traffic from './Traffic';
import axios from 'axios';
import * as geolib from 'geolib';

const LocationStyle ={
  margin:'1rem 0rem',

}
const labelStyle ={
  fontSize:'16px'
}



const Location = () => {
  const [selectedDateTime, setSelectedDateTime] = useState();
  const [inputValue, setInputValue] = useState([]);

  const [trafficData, setTrafficData] = useState([]);
  const [seachData, setSearchData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const handleDateTimeChange = (event) => {
        setSelectedDateTime(event.target.value);
    };

  const onSearch = (event)=>{
      setInputValue(event.target.value);
    }


  useEffect(() => {

    const fetchData = async () => {
     
      const [trafficInfo, weatherInfo] =  await Promise.all([
        axios.get(`https://api.data.gov.sg/v1/transport/traffic-images?date_time=${selectedDateTime}`),
        axios.get(`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?timestamp=${selectedDateTime}`)
      ]);

      const foreCastInfo = weatherInfo.data.items[0].forecasts;
      const areaInfo = weatherInfo.data.area_metadata;

      // Adding location to the Area list
      const weatherObjArr = foreCastInfo.map((item,index)=>{
        const locationObj = areaInfo[index].label_location;
       return {...item, ...locationObj}
       
      });


      const cameraInfoArr = trafficInfo.data.items[0].cameras;
      const cameraInfo = cameraInfoArr.map((item,index)=>{
        // finding the nearest locaion of the traffic
        const res = geolib.findNearest(item.location,weatherObjArr);
        return {...item,...res}

      })
      setWeatherData(weatherObjArr);
      setTrafficData(cameraInfo);
      setSearchData(cameraInfo);
     return [trafficInfo, weatherInfo];
      
    };
    
    fetchData();  
  }, [selectedDateTime]);

   useEffect(() => {
    if (inputValue !== '') {
      setTrafficData(trafficData.filter((item) => item?.area?.toUpperCase().indexOf(inputValue?.toUpperCase()) !== -1 ))
   } else {
    setTrafficData(seachData);
   }

   },[inputValue])

  
  
  return (
    <Fragment>
      <Form style={LocationStyle}>
      <Form.Item   label={<label style={labelStyle}>{CONSTANT.LOCATION.CHOOSE_DATE}</label>}>
      <Input type="datetime-local" step="1" onBlur={handleDateTimeChange} style={labelStyle}/>
      </Form.Item>
      <Input placeholder={CONSTANT.LOCATION.SEARCH_LOCATION} onChange={e => onSearch(e)}  style={labelStyle}/>
      <List
      itemLayout="vertical"
      dataSource={trafficData}
      renderItem={(item, index) => (
        <List.Item>
          <Card
            hoverable
            title={item?.area}
            key={index}
          >
           <Row>
              <Col span={12}> 
                <Traffic info={item} key={index}/>
              </Col>
              <Col  span={12}>
                <Weather info={item} key={index}/> 
              </Col>
            </Row>
          </Card> 
      </List.Item>
    )}
    />
    </Form>
    </Fragment>
  );
};

export default Location;