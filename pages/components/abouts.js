import { Row, Col } from 'antd';
import pdata from '../api/abouts.json';
import member from '../api/teammembers.json';

function abouts() {
    const DisplayData = () => {
      return  pdata.map((res, idx) => {
        if (idx % 2 === 0) {
            return <>        
                   <div className="about-row" key={idx}>
                  <Row>
                      <Col span={12}>
                        <div className="aboutImg" >
                            <img
                                    className="img-about"
                                    alt={res.title}
                                    src={`${res.logo}`}
                                  />
                        </div>
                      </Col>
                      <Col span={12}>
                          <div className={`about-Txt  ${res.className}`}>
                              <h1>{res.title}</h1>
                              <p>{res.desc}</p>
                          </div>
                      </Col>
                
                </Row>
                  </div>
            </>
        } else {
          return <>
              <div className="about-row" key={idx}>
                <Row>
                    <Col span={12}>
                        <div className={`about-Txt  ${res.className}` } >
                            <h1>{res.title}</h1>
                            <p>{res.desc}</p>
                        </div>
                    </Col>
                    <Col span={12}>
                      <div className="aboutImg">
                          <img
                                  className="img-about"
                                  alt={res.title}
                                  src={`${res.logo}`}
                                />
                      </div>
                    </Col>
                  </Row>
              </div>
          </>
        }
      });
  }

    
  const DisplayDataMobile = () => {
    return  pdata.map((res, idx) => {
         return <> 
             <div className="about-row" key={idx}>
                  <Row>
                      <Col  xs={24} sm={24} md={24}>
                        <div className="aboutImg" >
                            <img
                                    className="img-about"
                                    alt={res.title}
                                    src={`${res.logo}`}
                                  />
                        </div>
                      </Col>
                      <Col  xs={24} sm={24} md={24} >
                          <div className={`about-Txt  ${res.className}`}>
                              <h1>{res.title}</h1>
                              <p>{res.desc}</p>
                          </div>
                      </Col>
                
                </Row>
                </div>
         
         </>
    })
  
  }
const Objectives = () => {
  return <>
        <div className="title-objective">
             <p className="subtitle-objective">Sustainability, peace, love, harmony, sharing, growth, and abundance, with a focus on setting a good example for generations into the future.</p>
             <p>To live together in a collaborative community, encouraging each other and our surrounding communities to live         in harmony with each other and our natural environment.</p>
             <p>To grow in size and recognition to influence others around the world by example, education, and research.</p>
             <p>To facilitate workshops, adventure tours, and retreats that promote personal growth and sustainable lifestyles.</p>
             <p>To offer re-education and employment opportunities for local families engaged in illegal forest activities.</p>
             <p>To discover and create innovative business and employment opportunities for Cambodian youths.</p>
        </div>
    </>
}

const Teamember = () => {
  return  member.map((res, idx) => {
   
    return <>    
      <Col className="about-member" xs={12} sm={12} ms={6} lg={6} xl={8}>
            <div className="logo-team">
                      <img
                            className="img-member"
                            alt={res.name}
                            src={`${res.logo}`}
                                />
                       <div className="member-team">
                            <h4>{res.name}</h4>
                            <p>{res.position}</p>
                    </div>
            </div>
      </Col>
    </>

  });
}

const Team = () => {

   return <>
     <div className="team">
            <div className="background-team">
                  <div className="container-team">
                        <Row gutter={16} type="flex" className="page-magin-ft">
                            <Teamember />
                        </Row>
                  </div>     
            </div>
      </div>
   </>
}
return <>
     <div className="container about-container ">
              <h2 className="aboutTitle">
                <center>ABOUT US</center>
              </h2>
              <div className="display-desktop">
              <DisplayData />
              </div>
              <div className="display-mobile">
              <DisplayDataMobile />
              </div>
              <h2 className="aboutTitle">
                <center>Objectives</center>
              </h2>
              <Objectives />
              <h2 className="aboutTitle">
                <center>Team Member</center>
              </h2>
              <Team />
      </div>
</>

}

export default abouts;
