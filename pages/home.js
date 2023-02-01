import React, { useState } from 'react';
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {ButtonGroup } from 'reactstrap';
import {
  CardHeader,
  Collapse
} from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default function Detail() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return (
    <div className="">
      {/* <section className="bg-div1">
        <h3 className="text-center text-white">Home <span>&#8680;</span> <span class="sp">Products</span></h3>
      </section> */}

      {/* .........................about section ............................*/}

      <Container>
        <Row>
          <div className="col-md-3">
            <div className="botton-br">
              <div className="col-8 top-head mt-4"><h6 className="pt-1">CATEGORIES</h6></div>
            </div>
            <div className=" accordion-1">
              <Container>
                <Row>
                  <Col className=" ml-auto" md="12">
                    <div className=" accordion my-3" id="accordionExample">
                      <Card>
                        <CardHeader
                          id="headingOne"
                          aria-expanded={openedCollapse === "collapseOne"}
                        >
                          <h5 className=" mb-0">
                            <Button
                              onClick={() =>
                                setOpenedCollapse(
                                  openedCollapse === "collapseOne"
                                    ? ""
                                    : "collapseOne"
                                )
                              }
                              className=" w-100 text-primary text-left"
                              color="link"
                            >
                             <span className="theme-col"> CAMERA </span>  <span className="f-r  theme-col">+</span>{" "}
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse
                          isOpen={openedCollapse === "collapseOne"}
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                          id="collapseOne"
                        >
                          <CardBody className=" opacity-8">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute, non cupidatat skateboard dolor brunch. Food truck
                            quino
                    </CardBody>
                        </Collapse>
                      </Card>
                      <Card>
                        <CardHeader
                          id="headingTwo"
                          aria-expanded={openedCollapse === "collapseTwo"}
                        >
                          <h5 className=" mb-0">
                            <Button
                              onClick={() =>
                                setOpenedCollapse(
                                  openedCollapse === "collapseTwo"
                                    ? ""
                                    : "collapseTwo"
                                )
                              }
                              className=" w-100 text-primary text-left collapsed"
                              color="link"
                            >
                           <span className="theme-col"> CAMERA </span>  <span className="f-r  theme-col">+</span>{" "}
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse
                          isOpen={openedCollapse === "collapseTwo"}
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                          id="collapseTwo"
                        >
                          <CardBody className=" opacity-8">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            
                    </CardBody>
                        </Collapse>
                      </Card>
                      <Card>
                        <CardHeader
                          id="headingThree"
                          aria-expanded={openedCollapse === "collapseThree"}
                        >
                          <h5 className=" mb-0">
                            <Button
                              onClick={() =>
                                setOpenedCollapse(
                                  openedCollapse === "collapseThree"
                                    ? ""
                                    : "collapseThree"
                                )
                              }
                              className=" w-100 text-primary text-left collapsed"
                              color="link"
                            >
                                 <span className="theme-col"> CAMERA </span>  <span className="f-r  theme-col">+</span>{" "}
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse
                          isOpen={openedCollapse === "collapseThree"}
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                          id="collapseThree"
                        >
                          <CardBody className=" opacity-8">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute, 
                    </CardBody>
                        </Collapse>
                      </Card>
                      <Card>
                        <CardHeader
                          id="headingFour"
                          aria-expanded={openedCollapse === "collapseFour"}
                        >
                          <h5 className=" mb-0">
                            <Button
                              onClick={() =>
                                setOpenedCollapse(
                                  openedCollapse === "collapseFour"
                                    ? ""
                                    : "collapseFour"
                                )
                              }
                              className=" w-100 text-primary text-left"
                              color="link"
                            >
                                <span className="theme-col"> CAMERA </span>  <span className="f-r  theme-col">+</span>{" "}
                            </Button>
                          </h5>
                        </CardHeader>
                        <Collapse
                          isOpen={openedCollapse === "collapseFour"}
                          aria-labelledby="headingFour"
                          data-parent="#accordionExample"
                          id="collapseFour"
                        >
                          <CardBody className=" opacity-8">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod.
                    </CardBody>
                        </Collapse>
                      </Card>
                      

                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
           
            <div className="botton-br">
                                <div className="col-10 top-head mt-4"><h6 className="pt-1">FILTER PRODUCTS BY</h6></div>
                                </div>
                                <div className="out-box mt-4">
                                    <h6 className="pt-3 botton-br" >AVAILABILITY</h6>
                                  
                                      
     <div className="bt-div pt-3">
        <Button className="chk-box mb-1"  onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>&#10004;</Button>
        <Button className="chk-box mb-1" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>&#10004;</Button>
        <Button className="chk-box mb-1" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>&#10004;</Button>
    </div>
      <p>Selected: {JSON.stringify(cSelected)}</p>

                                </div>
                                <div className="botton-br">
                                <div className="col-8 top-head mt-4"><h6 className="pt-1">WISHLIST</h6></div>
                                </div>
                                <div className="out-box mt-4">
                                    <h6 className="pt-3 botton-br" >No Product</h6>
                                    <button className="wish-bt"> MY WISHLIST <span>❯</span></button>
                               

                                </div>

          </div>
          <div className="col-lg-9 mt-5">
            <div className="row">
            <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product3.jpg" alt="Card image cap img-fill" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product1.jpg" alt="Card image cap img-fill" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product4.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>

                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product1.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product2.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product3.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product4.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product3.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>
                  <div className="col-md-4 col-lg-4 pt-2">
                    <div>
                      <Card>
                        <CardImg top width="100%" src="product7.jpg" alt="Card image cap" className="img-cl" />
                        <CardBody className="card-in">
                          <p>Mulethi Powder Tulasi</p>
                          <p className="text-center">₹700</p>
                          <div className="row text-center">
                            <div className="col-6 ">
                              <img src="cart -red.png" className="w25"></img></div>
                            <div className="col-6">
                              <img src="view -red.png" className="w25 miss"></img></div>





                          </div>
                        </CardBody>
                      </Card>

                    </div>

                  </div>



            </div>
          </div>
        </Row>

      </Container>




    </div>

  )
}
