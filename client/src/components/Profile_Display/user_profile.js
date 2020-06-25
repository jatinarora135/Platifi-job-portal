import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab,Pagination,ProgressBar} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Aux from "./hoc/_Aux";
//import '../../App.css';

import './css/animate.css';
import './css/style.css';

import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import image from './download.jpg';


import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

const{Header,Footer,Sider,Content}=Layout;



class Profile extends React.Component {
    render() {
   

     return (
                <Aux>
                    <div>
                      <Layout>

                      <Header style={{padding:10}}>

                       <Avatar style={{float:'right'}}icon="User" />
                      <Title level={3} style={{color:'white',textAlign:'left'}} >PlatiFi Jobs</Title>
                      </Header>
                          <Layout>
                             <Sider>
                                 <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
                                 <Menu.Item key='Dashboard'>
                                 <Link to="/dashboard">User Profile </Link>
                                 </Menu.Item>
                                 </Menu>
                             </Sider>
                             <Layout>
                          <Content style={{ padding: '0 10px' }}>
                              <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                                <div >
                                  <div class="row clearfix">

                                    <div class="span_4 column">
                                      <div class="column">
                                        <div class="overlay"></div>
                                        <div class="img d-flex align-self-stretch align-items-center">
                                        <img style={{marginLeft:0},{marginTop:100}}src={image} alt="profile-pic" />
                                        </div>
                                        <div class="counter-wrap ftco-animate d-flex mt-md-3">
                                        <div class="text">
                                          <p style={{marginLeft:40}}><a href="/profiles#/user-profile" class="btn btn-primary py-3 px-3">Download CV</a></p>
                                        </div>
                                      </div>
                                    </div>
                                    </div>
                                    <div class="span_4 column">
                                      <div class="row justify-content-start pb-3">
                                        <div style={{padding:0},{marginTop:30}} class="col-md-12 heading-section ftco-animate">
                                          <h3 style={{marginLeft:0},{marginRight:130},{fontSize:30}} ><b>Jatin Arora</b></h3>
                                          <ul class="about-info mt-4 px-md-0 px-2" style={{fontSize:20}}>
                                            <li class="d-flex"><span>Name:</span> <span>Jatin Arora</span></li>
                                            <li class="d-flex"><span>Date of birth:</span> <span>June 30, 1999</span></li>
                                            <li class="d-flex"><span>Address:</span> <span>Bathinda,Punjab</span></li>
                                            <li class="d-flex"><span>Email: </span> <a style={{fontSize:20}} href="mailto:jatinarora135@gmail.com">  jatinarora135@gmail.com </a></li>
                                            <li class="d-flex"><span>Phone: </span> <span>9501949367</span></li>
                                            <li class="d-flex"><span>Education: </span> <span>B.E. Computer Science</span></li>
                                            <li class="d-flex"><span>College: </span> <span>Bits Pilani</span></li>
                                            <li class="d-flex"><span>Cgpa: </span> <span> </span></li>
                                             <br/>
                                               <div class="counter-wrap ftco-animate d-flex mt-md-3">
                                                 <div class="text">
                                                    <p style={{marginLeft:60}}><a href="/profiles#/user-profile" class="btn btn-primary py-3 px-3">Send Offer</a></p>
                                                 </div>
                                               </div>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

<div class="span_4 column">
                                            <div class="row">
                                              <div class="col-md-3">
                                               
                                              </div>
                                                <div id="page-3" class= "page three" style={{padding:40}}>
                                                  <h2 class="skills">Skills</h2>
                                                  
                                                  <div >
                                                    <div>
                                                      <div >
                                                        <h3>ReactJs</h3>
                                                        <div>
                                                        <div class="progress" style={{width:100}}>
                                                        </div>
                                                          <div>
                                                        <ProgressBar animated now={55} />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <br/>
                                                    <div>
                                                      <div >
                                                        <h3>NodeJs</h3>
                                                        <div>
                                                        <div class="progress" style={{width:100}}>
                                                        </div>
                                                          <div>
                                                        <ProgressBar animated now={50} />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <br/>
                                                  
                                                   <div>
                                                      <div >
                                                        <h3>MongoDb</h3>
                                                        <div>
                                                        <div class="progress" style={{width:100}}>
                                                        </div>
                                                          <div>
                                                        <ProgressBar animated now={50} />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <br/>

                                                    <div>
                                                      <div >
                                                        <h3>Data Structures</h3>
                                                        <div>
                                                        <div class="progress" style={{width:100}}>
                                                        </div>
                                                          <div>
                                                        <ProgressBar animated now={70} />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <br/>
                                                    <div>
                                                      <div >
                                                        <h3>SQL</h3>
                                                        <div>
                                                        <div class="progress" style={{width:100}}>
                                                        </div>
                                                          <div>
                                                        <ProgressBar animated now={95} />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <br/>
                                                    <div>
                                                      <div >
                                                        <h3>ExpressJs</h3>
                                                        <div>
                                                        <div class="progress" style={{width:250}}>
                                                        </div>
                                                          <div>
                                                        <ProgressBar animated now={15} />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    
                                                
                                            </div>
                                            </div>

                                          </div>
                                          </div>


                                  </div>
                                </div>
                              </section>
                                  
                                    </Content>
                                  <Footer>
                                 </Footer>
                             </Layout>
                          </Layout>
                       </Layout>
                    </div>
            </Aux>
        );
    }
}



export default Profile;

