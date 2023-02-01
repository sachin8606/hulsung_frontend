import Head from 'next/head'
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
export default function Terms() {
  const [count, setCount] = useState(1);

  const incCount = () => {
    setCount(count + 1);
  }

  const decCount = () => {
    setCount(count - 1);
  }
  return (
    <div className="">


      {/* .........................about section ............................*/}
      <section className="py-5 theme-bg">
        <Container>
          <Row>
            <div className="col-xl-7 col-lg-12 col-md-12 col-12 py-3">
              <Card className="card-main">
                <CardHeader className="card-head">
                  <Row>
                  <div className="col-xl-5 col-lg-12 col-md-3 col-3 py-3 fw-500"><p>My-Cart</p></div>
                  <div className="col-xl-7 col-lg-12 col-md-9 col-9 py-3 ">
                    <CardText className="d-felx">
                      <ul className="no-list d-flex bt-border1">
                        <li className="pr-2 pb-2" >Deliever To</li>
                        <li className="px-2 dn-60"> Enter delievery pin code</li>
                        <li className="px-2">Deliever</li>
                      </ul></CardText></div>

                </Row>
                </CardHeader>
                <CardBody className="card-mid">
                  <CardTitle tag="h5"> <Row>
                    <div className="col-xl-3 col-lg-12 col-md-4 col-4 py-3"><img src="as.jpg" className="w-100"></img>
                    <span className=""> 
                        <Button onClick={() => decCount()} className="qty-bt">-</Button>
                        <span className="count-sp">{count}</span>
                        <Button onClick={() => incCount()} className="qty-bt">+</Button>
                      </span></div>
                    <div className="col-xl-6 col-lg-12 col-md-8 col-8 py-3">
                      <CardText className="pt-3 text-dark l-h5"><p>Aashirvaad Shudh Chakki Atta</p>
                        <p>In Stock</p>
                      </CardText>

                      <div className="col-xl-6 col-lg-12 col-md-8 col-8">
                        <h6 className="text-center text-dark">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className="sudo1">
                        </span></h6></div>
                      <span className="dn-60"> 
                        <Button onClick={() => decCount()} className="qty-bt">-</Button>
                        <span className="count-sp">{count}</span>
                        <Button onClick={() => incCount()} className="qty-bt">+</Button>
                      </span>
                    </div>
                    <div className="col-xl-3 col-lg-12 col-md-12 col-12 py-3"><p className="text-danger l-h">Delivery by Sat Mar 13 | Free₹120</p></div>
                  </Row>
                  </CardTitle>





                </CardBody>
                <CardFooter className="text-right crd-footer"><Button className="place">Place Order</Button></CardFooter>
              </Card>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12 py-3">
              <Card className="card-main sticky">
                <CardHeader className="bg-white">Price Detail</CardHeader>
                <CardBody className="card-mid">
                  <Row>
                    <div className="col-xl-8 col-lg-12 col-md-6 col-6 pt-3">Price Item</div>

                    <div className="col-xl-4 col-lg-12 col-md-6 col-6 py-2">
                    ₹76875</div>
                    <div className="col-xl-8 col-lg-12 col-md-6 col-6 py-2">Offer Price</div>

                    <div className="col-xl-4 col-lg-12 col-md-6 col-6 py-2">
                    ₹76875</div>
                    <div className="col-xl-8 col-lg-12 col-md-6 col-6 py-2">Discount-item</div>

                    <div className="col-xl-4 col-lg-12 col-md-6 col-6 py-2">
                    ₹76875</div>
                    <div className="col-xl-8 col-lg-12 col-md-6 col-6 py-2">Total Amount</div>

                    <div className="col-xl-4 col-lg-12 col-md-6 col-6 py-2">
                    ₹76875</div>

                  </Row>
                  {/* <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button> */}
                </CardBody>
                <CardFooter className="theme-col crd-footer">You will save ₹7,260 on this order</CardFooter>
              </Card>
            </div>

          </Row>

        </Container>
      </section>





      {/* .........................progress section............................*/}



    </div>

  )
}
