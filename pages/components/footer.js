import data from "../api/socialmedia.json"
import { Row, Col } from 'antd';

function Footer() {

      const SocailMedia = () => {
            return data.map((res, index) => {
              return (
                <a
                  href={`${res.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <img src={res.logo} alt={res.name} />
                </a>
              )
            })
          }
   
return <>
      <div className="footer">
            <div className="background-footer">
                  <div className="container-footer">
                        <Row gutter={16} type="flex" className="page-magin-ft">
                        <Col xs={24} sm={24} ms={6} lg={8} xl={8}>
                              <div className="logo-footer">
                                     <img src="/image/Vitamin-air-black.png" />
                              </div>
                        </Col>
                        <Col xs={24} sm={24} ms={6} lg={8} xl={8}>
                        <h4>contact us</h4>
                        <p>info@vitaminair.org</p>
                        </Col>
                        <Col  xs={24} sm={24} ms={6} lg={8} xl={8}>
                        <h4 className="followus">follow us</h4>
                        <div className="social-media-footer">
                        <SocailMedia />
                        </div>   
                        </Col>

                        </Row>
                  </div>        
            </div>
      </div>
</>

}

export default Footer;
