import Link from 'next/link'
import React, { useState } from "react"
import { Layout, Menu,  Drawer, Button  } from 'antd';

import { Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;


export default function Navbar() {
  const [visible, setVisible] = useState(false)


  const handleChange = () => {
    setVisible(!visible)
  }

  

    return (
      <>
        <Layout>
        <Header className="Navbar-header Navbar-bgcolor">
          <div className="Navbar-group">
            <Row>
              <Col span={12}>
                <Link href="/">
                  <img  src="/image/VA-White-V1.png" />
                </Link>
              </Col>
              <Col span={12}>
                  <div className="Navbar-bgcolor Navbar-menu hidden-mobile">
                    
                    <Menu mode="horizontal">
                    <Menu.Item>
                      <Link href="/about">
                          About Us
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                          href="https://t.me/vitaminair"
                          target="_blank"
                          rel="noopener noreferrer"
                        >COMMUNITY</a>
                    </Menu.Item>
                    </Menu>
                  </div>
                  <div className="Navbar-bgcolor hidden-desktop">
                  <div >
                    <Button className="btn-style" type="primary" onClick={handleChange}>
                      Menu
                    </Button>
                    <Drawer
                      title="Vitamin Air"
                      placement="right"
                      closable={false}
                      onClose={handleChange}
                      visible={visible}
                    >
                     <p>
                     <Link href="/about">
                          About Us
                      </Link>
                     </p>
                     
                     <p>
                     <a
                          href="https://t.me/vitaminair"
                          target="_blank"
                          rel="noopener noreferrer"
                        >COMMUNITY</a>
                     </p>
                    </Drawer>
                  </div>
                  </div>
                  
              </Col>
            </Row>
            </div>
        </Header>
      </Layout>
      </>
    );
  }