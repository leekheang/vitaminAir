import { Row, Col } from 'antd';
import pdata from '../api/project.json';

function Projects() {
    const DisplayData = () => {
      return  pdata.map((res, idx) => {
        if (idx % 2 === 0) {
            return <>        
                   <div className="project-row " key={idx}>
                  <Row  gutter={50}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="projectImg" >
                            <img
                                    className="img-right"
                                    alt={res.title}
                                    src={`http://localhost:3000${res.logo}`}
                                  />
                        </div>
                      </Col>
                      <Col  xs={24} sm={24} md={12} lg={12} xl={12} >
                          <div className={`project-Txt  ${res.className}`}>
                              <h1>{res.title}</h1>
                              <p>{res.desc}</p>
                          </div>
                      </Col>
                
                </Row>
                  </div>
            </>
        } else {
          return <>
              <div className="project-row" key={idx}>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className={`project-Txt  ${res.className}` } >
                            <h1>{res.title}</h1>
                            <p>{res.desc}</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <div className="projectImg">
                          <img
                                  className="img-right"
                                  alt={res.title}
                                  src={`http://localhost:3000${res.logo}`}
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
                   <div className="project-row " key={idx}>
                  <Row  gutter={[24,24]}>
                      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="projectImg" >
                            <img
                                    className="img-right"
                                    alt={res.title}
                                    src={`http://localhost:3000${res.logo}`}
                                  />
                        </div>
                      </Col>
                      <Col  xs={24} sm={24} md={24} lg={12} xl={12} >
                          <div className={`project-Txt  ${res.className}`}>
                              <h1>{res.title}</h1>
                              <p>{res.desc}</p>
                          </div>
                      </Col>
                
                </Row>
                  </div>
            </>
    })
}
return <>
     <div className="container">
          
              <center>
                <h1 className="projectTitle">Projects</h1>
              </center>
              
              <div class="display-desktop">
              <div className="main-project">
                <DisplayData />
              </div>
              </div>
              <div className="display-mobile">
                <DisplayDataMobile />
              </div>
      </div>
</>

}

export default Projects;
