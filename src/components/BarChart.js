import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../App.css'




const BarChart = ({ data }, props) => {
    // Extracting the x and y-axis data from the response
    const visitorsCount = data?.Visitors?.visitorsCount;
    console.log("data", visitorsCount)
    const visitorsDate = data?.Visitors?.visitorsDate;

    const uniqueVisitorsCount = data?.uniqueVisitors?.uniqueVisitorsCount
    const uniqueVisitorsDate = data?.uniqueVisitors?.uniqueVisitorsDate;

    let lifeTimeOrderValue = props.lifeTimeOrderValue


    // ApexCharts configuration
    const chartOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: visitorsDate,
        },
        title: {
            //   text: 'ApexCharts Line Chart For Total Visitors',
            text: 'Line Chart For Total Visitors',
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => value,
            },
        },
        markers: {
            size: 10,
            hover: {
                size: 15,
                sizeOffset: 3,
            },
        },
        //   events: {
        //     dataPointMouseEnter: (event, chartContext, { dataPointIndex }) => {
        //       setHoveredData(visitorsCount[dataPointIndex]);
        //     },
        //     dataPointMouseLeave: () => {
        //     setHoveredData(null);
        //     },
        //   },
    };

    const chartOptionss = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: uniqueVisitorsDate,
        },
        title: {
            //   text: 'ApexCharts Bar Chart For Unique Visitors',
            text: 'Bar Chart For Unique Visitors',

        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => value,
            },
        },
        markers: {
            size: 10,
            hover: {
                size: 15,
                sizeOffset: 3,
            },
        },
    };


    const chartSeries = [
        {
            name: 'Visitors Count',
            data: visitorsCount,
        },
    ];

    const chartSeriess = [
        {
            name: 'Visitors Count',
            data: uniqueVisitorsCount,
        },
    ];





    const pieChartData = visitorsCount.map((count, index) => ({
        x: visitorsDate[index],
        y:count
    }))

    const chartOptionsss = {
        chart: {
          type: 'pie',
        },
        labels: pieChartData.map((dataPoint) => dataPoint.x),
        title: {
          text: 'Pie Chart For Total Visitors',
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: (value) => value,
          },
        },
      };
    
      const chartSeriesss = pieChartData.map((dataPoint) => dataPoint.y)

    return (
        // <div>
        //     <div style={{ marginLeft: '190px' }}>
        //         <div style={{ display: 'flex' }}>
        //             <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '900px' }}>
        //                 <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={400} width={900} />
        //             </div>


        //             <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '300px', height: "280px", marginLeft: '20px' }}>
        //                 <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={200} width={300} />
        //             </div>

        //         </div>

        //         <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '300px', height: "180px", marginLeft: '200px', paddingTop: "0px" }}>
        //             ioooojoj
        //         </div>


        //         <div style={{ display: 'flex' }}>
        //             <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '425px', marginTop: '20px' }}>
        //                 <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={420} />
        //             </div>
        //             <div style={{ marginLeft: '50px', boxShadow: '1px 2px 9px #F4AAB9', width: '425px', marginTop: '20px' }}>
        //                 <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={420} />
        //             </div>
        //         </div>
        //     </div>
        // </div>






        // <div style={{display:'flex'}}>
        //     <div style={{display:"flex", flexDirection:"column"}}>

        //     <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '900px' }}>
        //     <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={400} width={900} />
        //     </div>

        //     <div style={{display:'flex'}}>
        //     <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={420} />
        //     <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={420} />
        //     </div>
        //     </div>

        //     <div style={{display:"flex", flexDirection:"column"}}>
        //     <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={200} width={300} />
        //     <h2> AVERAGE SESSION DURATION</h2>

        //     <h2>Average Order Value</h2>
        //     </div>
        // </div>


        <div style={{ display: 'flex', marginLeft: '190px' }}>
            <div style={{ display: "flex", flexDirection: "column" }}>

                <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '900px' }}>
                    <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={400} width={900} />
                </div>

                <div style={{ display: 'flex' }}>

                    <div style={{ boxShadow: '1px 2px 9px #F4AAB9', width: '425px', marginTop: '20px' }}>
                        <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={420} />
                    </div>

                    <div style={{ marginLeft: '50px', boxShadow: '1px 2px 9px #F4AAB9', width: '425px', marginTop: '20px' }}>
                        <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={420} />
                    </div>

                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>

                <div style={{ marginLeft: '30px', boxShadow: '1px 2px 9px #F4AAB9', width: '400px', paddingTop: '4rem',  }}>
                <ReactApexChart options={chartOptionsss} series={chartSeriesss} type="pie" height={400} width={400} />
                </div>

                <div style={{boxShadow: '1px 2px 9px #F4AAB9', width: '348px', marginLeft:'30px', marginTop:'50px', height:'80px',padding:'20px'}}>
                <h2> AVERAGE SESSION DURATION</h2>
                <p style={{color:'#FF4000', paddingLeft:'150px', fontWeight:700, fontSize:20}}> 01:00:00</p>
                </div>

                <div style={{boxShadow: '1px 2px 9px #F4AAB9', width: '348px',  marginLeft:'30px',  marginTop:'50px', height:'200px',padding:'20px', paddingLeft:'80px', }}>
                <h2 style={{fontWeight:800, fontSize:"28px"}}>Life Time Order Value</h2>
                <p style={{fontWeight:700, color:'#FF4000', fontSize:70, paddingBottom:'900px'}}>
                   {lifeTimeOrderValue} Rs 4720
                </p>
                </div>
            </div>
        </div>
    );
};

export default BarChart;