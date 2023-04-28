
import { Fragment } from "react";
import { Image } from "antd";
import CONSTANTS from '../constants/common'
const  Traffic = (location)=>{

    return(
        <Fragment>
      {location?.info?.timestamp &&  (
      
          <div>
              <h6>{CONSTANTS.TRAFFIC.TITLE}</h6>
              <Image
                width={'50%'}
                height={'35%'}
                  alt="trafficImage"
                  src={location?.info?.image}
                />
          </div>
      )}
    </Fragment>
    )

}

export default Traffic;