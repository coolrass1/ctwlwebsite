import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

function CustomInput(props) {
    console.log(JSON.stringify(props))
  return (
    <div  onClick={props.onClick} className="flex justify-center items-center gap-1 py-2">
           <span className="text-green-900 cursor-pointer">
          <FaCalendarAlt />
        </span>
    
      <input
        type="text"
        className="form-control"
        onClick={props.onClick}
        value={props.value}
        onChange={props.onChange}
       
      />
      
     
    </div>
  );
}

const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(null);

    const handleChange = (date) => {
      setStartDate(date);
    };
  
    return (
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy"
        showTimeSelect
       
      />
    );
}

export default MyDatePicker