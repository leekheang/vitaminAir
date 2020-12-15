import { Row, Col } from 'antd';
import pdata from '../api/partner.json';


function Partners() {
    const DisplayData = () => {          
        return  pdata.map((res, idx) => {
        return <>
         <Col xs={12} sm={8} md={4} lg={{span: 3, offset: 1}} xl={{span: 3, offset: 1}} >
             
                <img
                    className={`img-partner ${res.className}`}
                    alt={res.desc}
                    src={`http://localhost:3000${res.logo}`}
                />
            </Col>
        </>
    });
}
return <>
     <div className="container">
         <div className="main-partner"> 
              {/* <h2 className="partnerTitle">
                <center>STRATEGIC PARTNERS</center>
              </h2> */}
              <center>
                <h1 className="projectTitle">STRATEGIC PARTNERS</h1>
              </center>
              
              <center className="partnerTitle">
                  <p>We're especially pleased to have built strategic partnerships with forward thinking leaders in the business world.</p>
              </center>
              <div className="partner-row">
                  <Row justify='center'>            
                  <DisplayData /> 
                  </Row>
              
                </div>
        </div>
      </div>
</>

}

export default Partners;
