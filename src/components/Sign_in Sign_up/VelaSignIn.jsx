import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/velasignin.css'
import { LinkContainer } from 'react-router-bootstrap';

function VelaSignIn() {
  
	return (

<div className="container">
      <div className="main-body">
        {/* Breadcrumb */}
       

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>Umair Ali</h4>
                      <p class="text-secondary mb-1">Front end Developer</p>
                      <p class="text-muted font-size-sm">Lahore</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary mx-2">Message</button>
                    </div>
                  </div>
              </div>
            </div>
            <div className="card" style={{marginTop: "45px"}}>
              <ul className="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg><span className='mx-3'>Website</span></h6>
                    <span class="text-secondary">https://umair-developer.netlify.app/</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><span className="mx-3">Github</span></h6>
                    <span class="text-secondary">https://github.com/Umair0089560</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg><span className="mx-3">Twitter</span></h6>
                    <span class="text-secondary">https://twitter.com/UmairAl28647687</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg><span className="mx-3">Instagram</span></h6>
                    <span class="text-secondary">https://www.instagram.com/umair47222/</span>
                  </li>
              
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
              <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     Umair Ali
                    </div>
                  </div>
             
                  <div class="row mt-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    Umair@gmail.com
                    </div>
                  </div>
             
                  <div class="row mt-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      +923470432774
                    </div>
                  </div>
             
                  <div class="row mt-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    +923470432774
                    </div>
                  </div>
             
                  <div class="row mt-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    Lahore
                    </div>
                  </div>
             
                  <div class="row mt-3">
                    <div class="col-sm-12">
                      <LinkContainer to={"/edit"}>
                      <a className="btn btn-danger text-light" target="__blank">Edit</a>
                      </LinkContainer>
                    </div>
                  </div>
              </div>
            </div>

            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                  <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2"></i>Notifications</h6>
                      <div style={{height: "280px", overflowY: "scroll"}}>
                      <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                      <div class="dropdown-list-image mr-3"><img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                      <div class="font-weight-bold mr-3">
                          <div class="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                          <div class="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                      </div>
                      <span class="ml-auto mb-auto">
                          <div class="btn-group">
                              <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="mdi mdi-dots-vertical"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
                                  <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i> Delete</button>
                                  <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn Off</button>
                              </div>
                          </div>
                          <br />
                          <div class="text-right text-muted pt-1">3d</div>
                      </span>
                  </div>
                     
                  <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                      <div class="dropdown-list-image mr-3">
                          <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                      </div>
                      <div class="font-weight-bold mr-3">
                          <div class="mb-2"><span class="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                          <button type="button" class="btn btn-outline-success btn-sm">Say congrats</button>
                      </div>
                      <span class="ml-auto mb-auto">
                          <div class="btn-group">
                              <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="mdi mdi-dots-vertical"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
                                  <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i> Delete</button>
                                  <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn Off</button>
                              </div>
                          </div>
                          <br />
                          <div class="text-right text-muted pt-1">4d</div>
                      </span>
                  </div>
                  <div class="p-3 d-flex align-items-center osahan-post-header">
                      <div class="dropdown-list-image mr-3">
                          <img class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                      </div>
                      <div class="font-weight-bold mr-3">
                          <div>
                              <span class="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                              <div class="small text-success"><i class="fa fa-check-circle"></i> You sent Mandeep a message</div>
                          </div>
                      </div>
                      <span class="ml-auto mb-auto">
                          <div class="btn-group">
                              <button type="button" class="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i class="mdi mdi-dots-vertical"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
                                  <button class="dropdown-item" type="button"><i class="mdi mdi-delete"></i> Delete</button>
                                  <button class="dropdown-item" type="button"><i class="mdi mdi-close"></i> Turn Off</button>
                              </div>
                          </div>
                          <br />
                          <div class="text-right text-muted pt-1">4d</div>
                      </span>
                  </div>
                      </div>
                
                  
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                  <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2"></i>Reminder</h6>

                  <div class="col-md-5" style={{height: "280px",   width: "100%", overflowY: "scroll"}}>
            <div class="widget widget-reminder">
                <div class="widget-reminder-header">TODAY, Aug 19</div>
                <div class="widget-reminder-container">
                    <div class="widget-reminder-time">
                        09:00<br />
                        12:00
                    </div>
                    <div class="widget-reminder-divider bg-success"></div>
                    <div class="widget-reminder-content">
                        <h4 class="widget-title">Meeting with HR</h4>
                        <div class="widget-desc"><i class="fa fa-map-pin"></i> Conference Room</div>
                    </div>
                </div>
                <div class="widget-reminder-container">
                    <div class="widget-reminder-time">
                        20:00<br />
                        23:00
                    </div>
                    <div class="widget-reminder-divider bg-primary"></div>
                    <div class="widget-reminder-content">
                        <h4 class="widget-title">Dinner with Richard</h4>
                        <div class="widget-desc"><i class="fa fa-map-pin"></i> Tom's Too Restaurant</div>
                        <div class="m-t-15">
                            <a href="#" class="pull-right">Contact</a>
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" width="16" class="img-circle pull-left m-r-5" alt="" /> Richard Leong
                        </div>
                    </div>
                </div>
                <div class="widget-reminder-header">TOMORROW, Aug 20</div>
                <div class="widget-reminder-container">
                    <div class="widget-reminder-time">All day</div>
                    <div class="widget-reminder-divider bg-purple"></div>
                    <div class="widget-reminder-content">
                        <h4 class="widget-title"><i class="fa fa-gift text-purple"></i> Terry Birthday</h4>
                    </div>
                </div>
                <div class="widget-reminder-container">
                    <div class="widget-reminder-time">
                        00:00<br />
                        00:30
                    </div>
                    <div class="widget-reminder-divider bg-danger"></div>
                    <div class="widget-reminder-content">
                        <h4 class="widget-title">Server Maintenance</h4>
                        <div class="widget-desc"><i class="ti-pin"></i> Data Centre</div>
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
      </div>
    </div>
	);
}
export default VelaSignIn;