import React from 'react'

const Cards = (props) => {
    let uniqueVisitor = props.uniqueVisitor
    let totalVisitor = props.totalVisitor
    let conversionRate = props.conversionRate
    let avgOrderValue = props.avgOrderValue
    let abaddonmentCount = props.abaddonmentCount
    let lifeTimeOrderValue = props.lifeTimeOrderValue
    return (
        <div style={{ display: 'flex', marginTop: "10px", flexWrap: 'wrap', marginBottom: '10px', alignItems:'start', }}>

            <div style={{ width: '180px', height: '135px', background: "linear-gradient(#804EEA, #3C37F6)", marginLeft: '200px', marginRight:'30px', marginBottom: '10px' }}>

                <p style={{ fontFamily: 'Spinnaker', fontWeight: '400px', color: '#FFFFFF', fontSize: '18px', paddingLeft: '50px', paddingTop: '2px' }}> UNIQUE <br />VISITORS</p>

                <p style={{ fontFamily: 'Spectral', fontWeight: '800', fontSize: '28px', paddingLeft: '75px', paddingBottom: '70px', color: '#FFFFFF' }}>{uniqueVisitor}</p>
            </div>



            <div style={{ width: '180px', height: '135px', background: "linear-gradient(#804EEA, #3C37F6)", marginLeft: '15px', marginRight:'30px'}}>

                <p style={{ fontFamily: 'Spinnaker', fontWeight: '400px', color: '#FFFFFF', fontSize: '18px', paddingLeft: '50px', paddingTop: '2px' }}> TOTAL <br />VISITORS</p>

                <p style={{ fontFamily: 'Spectral', fontWeight: '800', fontSize: '28px', paddingLeft: '50px', paddingBottom: '70px', color: '#FFFFFF' }}>{totalVisitor}</p>
            </div>


            <div style={{ width: '180px', height: '135px', background: "linear-gradient(#804EEA, #3C37F6)", marginLeft: '15px', marginRight:'30px'}}>

                <p style={{ fontFamily: 'Spinnaker', fontWeight: '400px', color: '#FFFFFF', fontSize: '18px', paddingLeft: '42px', paddingTop: '2px' }}> CONVERSION <br />RATE</p>

                <p style={{ fontFamily: 'Spectral', fontWeight: '800', fontSize: '28px', paddingLeft: '45px', paddingBottom: '70px', color: '#FFFFFF' }}> {conversionRate} </p>
            </div>

            <div style={{ width: '180px', height: '135px', background: "linear-gradient(#804EEA, #3C37F6)", marginLeft: '15px', marginRight:'30px'}}>

                <p style={{ fontFamily: 'Spinnaker', fontWeight: '400px', color: '#FFFFFF', fontSize: '18px', paddingLeft: '20px', paddingTop: '2px' }}> AVERAGE ORDER VALUE</p>

                <p style={{ fontFamily: 'Spectral', fontWeight: '800', fontSize: '28px', paddingLeft: '50px', paddingBottom: '70px', color: '#FFFFFF' }}> {avgOrderValue} </p>
            </div>




            <div style={{ width: '180px', height: '135px', background: "linear-gradient(#804EEA, #3C37F6)", marginLeft: '15px',marginRight:'30px' }}>

                <p style={{ fontFamily: 'Spinnaker', fontWeight: '400px', color: '#FFFFFF', fontSize: '18px', paddingLeft: '20px', paddingTop: '2px' }}> ABANDONMENT  <br />COUNT</p>

                <p style={{ fontFamily: 'Spectral', fontWeight: '800', fontSize: '28px', paddingLeft: '80px', paddingBottom: '70px', color: '#FFFFFF' }}>{abaddonmentCount}</p>
            </div>





            <div style={{ width: '180px', height: '135px', background: "linear-gradient(#804EEA, #3C37F6)", marginLeft: '200px', marginRight:'30px' }}>

                <p style={{ fontFamily: 'Spinnaker', fontWeight: '400px', color: '#FFFFFF', fontSize: '18px', paddingLeft: '10px', paddingTop: '2px' }}> LIFE TIME ORDER VALUE</p>

                <p style={{ fontFamily: 'Spectral', fontWeight: '800', fontSize: '28px', paddingLeft: '50px', paddingBottom: '70px', color: '#FFFFFF' }}> {lifeTimeOrderValue} </p>
            </div>

        </div>
    )
}

export default Cards