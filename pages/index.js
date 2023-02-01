import Head from 'next/head';
import Link from "next/link";
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// const items = [
//   {
//     src: 'sp-banner.jpg',
//     altText: 'Slide 1',
//     caption: 'Slide 1'3

//   },
//   {
//     src: 'sp-banner.jpg',

//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
//   {
//     src: 'sp-banner.jpg',
//     // src: '/logo.png',
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   }
// ];

const Post = (props, Component, pageProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;



  return (
    <div>

      {/* <//.......................model body.........................> */}

      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}

      <Modal isOpen={modal} toggle={toggle} className="model-width model1">
        <ModalHeader toggle={toggle} close={closeBtn} className="model1">
          <Row>  <div className="col-md-12"><h3 className="detail-head pt-3">Pahari Masoor Dal (500gm) Organic</h3>
          </div></Row></ModalHeader>
        <ModalBody>
          <Container>
            <Row>
              <div className="col-md-12">
                <Row>
                  <div className="col-lg-6">
                    <img src="spi1.png" className="pt-2 w-100 detail-cam"></img>
                    <div className="row">
                      <div className="col-md-3 ml-5">  <img src="new9.jpg" className="pt-2 w-100 "></img></div>
                      <div className="col-md-3  ml-2">  <img src="new7.jpg" className="pt-2 w-100 "></img></div>
                    </div>

                  </div>
                  <div className="col-lg-6">

                    {/* <div><h3 className="detail-head">Camera Lumix</h3></div> */}
                    <div className=" t-b">
                      <h2 className="pt-1 price">₹789</h2>
                    </div>
                    <Row>
                      <div className="col-md-4">
                        <img src="/star.png" className="w-10"></img>
                        <img src="/star.png" className="w-10"></img>
                        <img src="/star.png" className="w-10"></img>
                        <img src="/star.png" className="w-10"></img>
                        <img src="/star.png" className="w-10"></img>
                      </div>
                      <div className="col-md-4">
                        <i class="fas fa-ad"></i>
                      </div>
                      <div className="col-md-4">

                      </div>
                    </Row>

                    <p>As seen in the nutritional table of the Masoor Dal, these lentils are
                    loaded with essential proteins, fiber, iron and other vital
                    including amino acids isoleucine and lysine. These are also good sources of
                    potassium, iron, dietary fiber, Folate, 0 fat, vitamin B1, vitamin A,
                                         vitamin K, and several others that can help you be at the pinnacle of health</p>

                    {/* <div className="text-dark t-b">
                                        <h2 className="pt-1 price">₹789</h2>
                                    </div> */}
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>

                    <div className=" row pt-3">
                      <div className="col-md-6">
                        <button className="btn-bg"><img src="/cart.png" className="crt mr-1" ></img>ADD TO CART</button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn-bg1"><img src="/like.png" className="crt mr-1" ></img>ADD TO WISHLIST</button>
                      </div>
                    </div>



                  </div>


                </Row>



              </div>
            </Row>
          </Container>
        </ModalBody>
        {/* <ModalFooter>
        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter> */}
      </Modal>


      {/* .............................................first section..............................................*/}

      <div class="jumbotron" >
        <div>
          <p class="display-4 text-right banner-head dn-60">
            Natural Health care Ingredients
    </p>
          <p class="lead text-right shop animate__animated animate__bounce animate__delay-2s"> Grocery Shopping</p>

          <p className="text-right banner-head">Save Upto 30% Off</p>
          <p class="lead text-right">
            <a class="btn  btn-lg text-right shop-bt mr-5" href="#" role="button">Shop Now</a>
          </p>
        </div>
      </div>
      <section className="background-main ">
        <div className="container c-wh">
          <div className="scroll">
            <ul className="d-flex no-list">
              <li className="top-products1 mr-2 ">Home and Kitchen</li>
              <li className="top-products1 mx-2">Egg, Meat & Fishs</li>
              <li className="top-products1 mx-2 bg-dark text-white">The <span className="text-pink">Beauty </span>Store</li>
              <li className="top-products1 mx-2">Special offer</li>
              <li className="top-products1 mr-2 ">Combo Store </li>
              <li className="top-products1 mx-2">Deal Of the Weak</li>


            </ul>
          </div>
        </div>
      </section>
      {/*............................. try.......................... */}
      <section className="background-main dn-71">
        <div className="container c-wh">
          <div className="scroll">
            <ul className="d-flex no-list">
              <li className=" mr-2 "><div className="p-r">
                <img src="front1.jpg" className="off1"></img>
                <div className="show-board">Up To 90% off</div>
                <div className="name">Summer Coolers</div>
                <div className="shop-now">Sale</div>
              </div></li>
              <li className=" mx-2"><div className="p-r">
                <img src="front2.jpg" className="off1"></img>
                <div className="show-board">Up To 90% off</div>
                <div className="name">Summer Coolers</div>
                <div className="shop-now">Sale</div>
              </div></li>
              <li className=" mx-2 bg-dark text-white"><div className="p-r">
                <img src="front3.jpg" className="off1"></img>
                <div className="show-board">Up To 90% off</div>
                <div className="name">Summer Coolers</div>
                <div className="shop-now">Sale</div>
              </div></li>
              <li className=" mx-2"><div className="p-r">
                <img src="front4.jpg" className="off1"></img>
                <div className="show-board">Up To 90% off</div>
                <div className="name">Summer Coolers</div>
                <div className="shop-now">Sale</div>
              </div></li>
              <li className=" mr-2 "><div className="p-r">
                <img src="front1.jpg" className="off1"></img>
                <div className="show-board">Up To 90% off</div>
                <div className="name">Summer Coolers</div>
                <div className="shop-now">Sale</div>
              </div></li>
              <li className="mx-2"><div className="p-r">
                <img src="front3.jpg" className="off1"></img>
                <div className="show-board">Up To 90% off</div>
                <div className="name">Summer Coolers</div>
                <div className="shop-now">Sale</div>
              </div></li>


            </ul>
          </div>
        </div>
      </section>

      {/*............................. try.......................... */}

      <section className="background-main dn-60">
        <div className="container-fluid  pb-5 ">
          <Row>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 head-mob">
              <p className="text-center text-dark fonting">Deals Of The Day</p>
            </div>
          </Row>
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 p-r">
              <img src="front1.jpg" className="w-100"></img>
              <div className="show-board">Up To 90% off</div>
              <div className="name">Summer Coolers</div>
              <div className="shop-now">Sale</div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 p-r">
              <img src="front2.jpg" className="w-100"></img>
              <div className="show-board">Up To 90% off</div>
              <div className="name">Summer Coolers</div>
              <div className="shop-now">Sale</div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 p-r">
              <img src="front3.jpg" className="w-100"></img>
              <div className="show-board">Up To 90% off</div>
              <div className="name">Summer Coolers</div>
              <div className="shop-now">Sale</div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 p-r">
              <img src="front4.jpg" className="w-100"></img>
              <div className="show-board">Up To 90% off</div>
              <div className="name">Summer Coolers</div>
              <div className="shop-now">Sale</div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 p-r">
              <img src="front1.jpg" className="w-100"></img>
              <div className="show-board">Up To 90% off</div>
              <div className="name">Summer Coolers</div>
              <div className="shop-now">Sale</div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 p-r">
              <img src="front2.jpg" className="w-100"></img>
              <div className="show-board">Up To 90% off</div>
              <div className="name">Summer Coolers</div>
              <div className="shop-now">Sale</div>
            </div>


          </div>
        </div>

      </section>

      {/* ...................2nd section,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
      {/* <section className="background-main">
        <div className="container-fluid pt-4 pb-5">
          <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <img src="left.jpg" className="w-100 ob-n"></img>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <img src="right.jpg" className="w-100 ob-n"></img>
            </div>


          </div>
        </div>
      </section> */}
      <section className="background-main">
        <div className="container-fluid">
          <div className="row same">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <img src="left1.jpg" className="left"></img>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12  dn-60">
              <img src="right1.jpg" className="w-100"></img>
            </div>


          </div>
        </div>
      </section>
      {/* -----------------section--------------------- */}
      <section className="background-main">
        <div className=" container-fluid">
          <Row>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 ">
              <p className="text-center text-dark fonting same1">My Smart Basket</p>
            </div>
          </Row>


          <div className="scroll">
            <ul className="d-flex no-list">
              {/* width: 100%;
    margin-left: 65px; */}
              <li >
                <Card className="card-ml">
                  <div>
                    <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                    <div className="discount-label">95% off</div>
                  </div>
                  <CardBody className="card-in">
                    <p>Mulethi Powder Tulasi</p>

                    <div className="row text-center">
                      <div className="col-12 ">
                        <FormGroup>

                          <Input type="select" name="select" id="exampleSelect" className="select-bar">
                            <option>500 Gm - ₹1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-6 ">
                        <h6 className="text-center text-dark">₹700</h6></div>
                      <div className="col-md-6">
                        <button className="btn-bg0">ADD TO CART</button>
                      </div>





                    </div>
                  </CardBody>
                </Card></li>
              <li ><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li>
                <Card className="card-ml">
                  <div>
                    <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                    <div className="discount-label">95% off</div>
                  </div>
                  <CardBody className="card-in">
                    <p>Mulethi Powder Tulasi</p>

                    <div className="row text-center">
                      <div className="col-12 ">
                        <FormGroup>

                          <Input type="select" name="select" id="exampleSelect" className="select-bar">
                            <option>500 Gm - ₹1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-6 ">
                        <h6 className="text-center text-dark">₹700</h6></div>
                      <div className="col-md-6">
                        <button className="btn-bg0">ADD TO CART</button>
                      </div>





                    </div>
                  </CardBody>
                </Card></li>
              <li><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>


            </ul>
          </div>






        </div>
      </section>


      {/* ...................5th section,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
      <section className="background-main">
      <div className=" container pb-2">
          <Row>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 ">
              <p className="text-center text-dark fonting same1">Shop By Category</p>
            </div>
          </Row>




          <div className="row">

            <div className="col-xl-4 col-lg-4 col-md-12  p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12  p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12  p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
          </div>
          <div className="row pt-2 dn-60">
            <div className="col-xl-4 col-lg-4 col-md-12  p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12  p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
            <div className="col-xl-4 col-lg-4 col-md-12  p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
          </div>


          <div className="row pt-2 dn-60">
            <div className="col-4 p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-2.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
            <div className="col-4 p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-1.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
            <div className="col-4 p-r">

              <div className="row s-g bg-white">
                <div className="col-5">
                  <img src="product-2.jpg" className="w-100"></img>
                </div>
                <div className="col-5">
                  <p className="up-to">Up To 70% Off</p>
                  <h5 className="main">Daal Ata and More</h5>


                </div>
                <div className="col-2">

                  <span> <img src="right-arrow.png" className="sp-img" ></img>  </span>

                </div>

              </div>

            </div>
          </div>

        </div>

      </section>


      {/* ...................section.................... */}
      <section className="background-main">
        <div className=" container-fluid pb-2">
          <Row>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-3">
              <p className="text-center text-dark fonting">My Smart Basket</p>
            </div>
          </Row>


          <div className="scroll">
            <ul className="d-flex no-list">
              {/* width: 100%;
    margin-left: 65px; */}
              <li ><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li ><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li>
                <Card className="card-ml">
                  <div>
                    <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                    <div className="discount-label">95% off</div>
                  </div>
                  <CardBody className="card-in">
                    <p>Mulethi Powder Tulasi</p>

                    <div className="row text-center">
                      <div className="col-12 ">
                        <FormGroup>

                          <Input type="select" name="select" id="exampleSelect" className="select-bar">
                            <option>500 Gm - ₹1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <div className="col-6 ">
                        <h6 className="text-center text-dark">₹700</h6></div>
                      <div className="col-md-6">
                        <button className="btn-bg0">ADD TO CART</button>
                      </div>





                    </div>
                  </CardBody>
                </Card></li>
              <li><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>
              <li><Card className="card-ml">
                <div>
                  <CardImg top width="100%" onClick={toggle} src="spi2.png" alt="Card image cap img-fill" className="img-cl " />
                  <div className="discount-label">95% off</div>
                </div>
                <CardBody className="card-in">
                  <p>Mulethi Powder Tulasi</p>

                  <div className="row text-center">
                    <div className="col-12 ">
                      <FormGroup>

                        <Input type="select" name="select" id="exampleSelect" className="select-bar">
                          <option>500 Gm - ₹1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </div>
                    <div className="col-6 ">
                      <h6 className="text-center text-dark">₹700</h6></div>
                    <div className="col-md-6">
                      <button className="btn-bg0">ADD TO CART</button>
                    </div>





                  </div>
                </CardBody>
              </Card></li>


            </ul>
          </div>






        </div>
      </section>
      {/* ...................section,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
      <section className="background-main">
        <div className="container-fluid">
          <div className="row same">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <img src="left1.jpg" className="left"></img>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12  dn-60">
              <img src="right1.jpg" className="w-100"></img>
            </div>


          </div>
        </div>
      </section>


    </div>




  );
}

export default Post;
