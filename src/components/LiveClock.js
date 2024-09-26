import moment from 'moment';
import React, { useEffect, useState } from 'react'
import "../comp-styles.css"

const LiveClock = () => {
    const [currentDateTime, setCurrentDateTime] = useState({
        time: moment().format('h:mm:ss A'),
        date: moment().format('dddd, MMMM Do YYYY')
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime({
            time: moment().format('h:mm:ss A'),
            date: moment().format('dddd, MMMM Do YYYY')
          });
        }, 1000);
    
        // Clean up interval on component unmount
        return () => clearInterval(interval);
      }, []);
    
      return (
        <div className='live-clock'>
          <div className='live-clock-time'>
            {currentDateTime.time}
          </div>
          <div className='live-clock-date'>
            {currentDateTime.date}
          </div>
        </div>
      );
}

export default LiveClock
