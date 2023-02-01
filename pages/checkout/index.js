// import Head from 'next/head'
import { Container, Row, Col, Card } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Progress } from 'reactstrap';
import { CardHeader, CardFooter, CardBody, 
  CardTitle, CardText } from 'reactstrap';
export default function checkout() {
  return (
    <div className="theme-bg">

<div className="container py-5 ">
  <Row>
    <div className="col-lg-8 col-md-12 col-12">
     
      <Row className="address-div bg-white ">
      <div className="col-xl-9 col-lg-9 col-md-6 col-6"> <span className="count-add">1</span><span className="log">Log-in</span> </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-6"><button className="change-bt">Change</button></div>
      </Row>
    
      <Row className=" mt-3 shipping">
      <div className="col-lg-12"> <span className="count-add">2</span><span className="log1">Delivery Address</span> </div>

      </Row> 
      <Row className="">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
    <Form className="form-back">
      <Row form className="form-row ">
      <div className=" col-xl-6 col-lg-6 col-md-12 col-12  mt-4">
          <FormGroup>
      
            <Input type="name" name="name" id="exampleName" placeholder="Name" className="input-side" />
          </FormGroup>
      </div>
      <div className=" col-xl-6 col-lg-6 col-md-12 col-12  mt4">
          <FormGroup>
      
            <Input type="number" name="number" id="exampleNumber" placeholder="10-digit mobile number" className="input-side" />
          </FormGroup>
      </div>
      </Row>
      <Row form className="form-row">
      <div className="col-lg-6">
          <FormGroup>
      
            <Input type="pin" name="pin" id="examplePin" placeholder="Pincode" className="input-side" />
          </FormGroup>
      </div>
  
        <div className="col-lg-6">
          <FormGroup>
      
          <Input type="text" name="text" id="exampleText" placeholder="locality" className="input-side" />
          </FormGroup>
      </div>
      </Row>
      <Row form>
      <div className=" col-xl-12 col-lg-12 col-md-12 col-12">
      <FormGroup className="form-row1">
     
        <Input type="text" name="address" id="exampleAddress" placeholder="Address(Area & Street)" className="input-side" className="address"/>
      </FormGroup>
      </div>
      </Row>

      <Row form className="form-row">
      <div className=" col-xl-6 col-lg-6 col-md-6 col-6  ">
          <FormGroup>
      
            <Input type="pin" name="pin" id="examplePin" placeholder="Pincode" className="input-side" />
          </FormGroup>
      </div>
      <div className=" col-xl-6 col-lg-6 col-md-6 col-6  ">
          <FormGroup className="form-row">
          
            <Input type="text" name="text" id="exampleText" placeholder="locality" className="input-side" />
          </FormGroup>
        </div>
      </Row>
      {/* <FormGroup className="form-row">
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup> */}
 
        {/* <div className="col-lg-2">
          <FormGroup className="form-row">
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
          </div> */}
     
      {/* <FormGroup check >
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup> */}
      <Button className="chk-bt">Save and Deliver Here</Button>
    </Form>
    </div>
    </Row>
    {/* <Row className="address-div1 bg-white  mt-3">
      <div className="col-lg-9"> <span className="count-add">3</span><span className="log">ORDER SUMMERY</span> </div>
     
      </Row> */}
      <Row className="address-div1 bg-white mt-3 ">
      <div className="col-lg-9"> <span className="count-add">4</span><span className="log">PAYMENT OPTIONS</span> </div>
  
      </Row>
    </div>



    {/*..................... form ........................*/}

  
 


    <div className="col-lg-4 dn-60">
    <Card className="card-main">
        <CardHeader className="bg-white" ><span className="log">Order Summery</span></CardHeader>
        <CardBody className="card-mid">
        <Row>
              <div className="col-xl-8 col-lg-12 col-md-12 col-12 py-3 ">Subtotal</div>
              
              <div className="col-xl-4 col-lg-12 col-md-12 col-12 py-3">
              ₹76875</div>
                <div className="col-xl-8 col-lg-12 col-md-12 col-12 py-3">Offer Price</div>
              
              <div className="col-xl-4 col-lg-12 col-md-12 col-12 py-3">
              ₹76875</div>
   
              
          
     
          </Row>
          {/* <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button> */}
        </CardBody>
        <CardFooter className="theme-col crd-footer">You will save ₹7,260 on this order</CardFooter>
      </Card>
      {/* <div className="col-xl-12 col-lg-12 col-md-12 col-12 py-3"><img src="3.png" className="w-100">
      </img></div> */}
      

    </div>

  </Row>

</div>


      </div>
   
  )
}
