import './App.css';
import Heading from './components/Heading';

import Cards from './components/Cards';
import BarChart from './components/BarChart';
import { useState, useEffect } from 'react';
import DateRange from './components/DateRange';

function App() {

  const[uniqueVisitor, setUniqueVisitor] = useState("");
  const[totalVisitor, setTotalVisitor] = useState("");
  const[conversionRate, setConversionRate] = useState("");
  const[avgOrderValue, setAvgOrderValue] = useState("");
  const[abaddonmentCount, setAbandonmentCount] = useState("");
  const[lifeTimeOrderValue, setLifeTimeOrderValue] = useState("");

  const [chartData, setChartData] = useState(undefined);

  const handleChartData = (data) => {
    setChartData(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getAllInfo');
        const data = await response.json();
        setUniqueVisitor(data?.response[1]?.totalUniqueVisitors?.value);
        setTotalVisitor(data?.response[0]?.totalVisitors?.value);
        setConversionRate(data?.response[3]?.conversionRate?.value);
        setAvgOrderValue(data?.response[4]?.avgOrderValue?.value);
        setAbandonmentCount(data?.response[5]?.cartAbandonmentCount?.value);
        setLifeTimeOrderValue(data?.response[6]?.lifetimeOrderValue?.value);


        console.log("value", uniqueVisitor )
         
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>  
     <Heading />
     <Cards uniqueVisitor ={uniqueVisitor} totalVisitor = {totalVisitor} conversionRate = {conversionRate}  avgOrderValue = {avgOrderValue} abaddonmentCount = {abaddonmentCount} lifeTimeOrderValue = {lifeTimeOrderValue} />
     <DateRange onChartData={handleChartData} />
      {chartData!==undefined && <BarChart data={chartData} lifeTimeOrderValue ={lifeTimeOrderValue} />} 
    </div>
  );
}

export default App;


