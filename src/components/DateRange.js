import React, { useState } from 'react';
import { DatePicker } from 'antd';
import axios from 'axios';

const { RangePicker } = DatePicker;

const DateRange = ({ onChartData }) => {
  const [dates, setDates] = useState([]);

  const handleDateChange = (values) => {
    if (values === null) {
      setDates([]);
    } else {
      setDates(values.map((item) => item.format('YYYY-MM-DD')));
    }

    if (values !== null) {
      const [from, to] = values.map((item) => item.format('YYYY-MM-DD'));
      axios
        .post('https://socket-io-server-mc3e.onrender.com/api/v1/graph', {
          from,
          to,
        })
        .then((response) => {
          console.log('api', response);
          onChartData(response.data.response); // Pass the data to the parent component
        })
        .catch((error) => {
          console.error('Error API:', error);
        });
    }
  };

  return (
    <div style={{ margin: 20, marginLeft:'500px' }}>
      <RangePicker onChange={handleDateChange} />

      <p style={{ margin: 20 }}>{dates.join(' to ')}</p>
    </div>
  );
};

export default DateRange;