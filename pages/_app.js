import "../assests/style.css";
import {  Form, FormGroup,  Input, Row, Container, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import React, { useState } from 'react';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    NavbarText,
  } from 'reactstrap';

  import {Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import { showCart } from "../api";
import { baseGraphqlApi,baseBackendApi } from "../apiurl";

function MyApp({ Component, pageProps }) {
    const [isOpen, setIsOpen] = useState(false);
    const [user,setUser] = useState();
    const[password,setPassword] = useState();

    const toggles = () => setIsOpen(!isOpen);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userId, setUserID] = useState();

    const [modal, setModal] = useState(false);
    const [isUserSignedin, setisUserSignedin] = useState(false);

    const toggle = () => setModal(!modal);


    // User Sign in

    function signIn(){
      const userSignInDetails = {
        mobile: user,
        password: password
      }

      axios.post(baseBackendApi+'/routes/userSignin',userSignInDetails)
      .then(res=>{
        console.log(res.data)
        if(res.data.userpresent){
          setisUserSignedin(true);
          setUserID(res.data.result)
          sessionStorage.setItem('user',res.data.result);
        }
      }).catch(err=>{
        console.log(err)
      })
    }


    function showtheCart(){
      if(sessionStorage.getItem('user')){
        axios.post(`${baseGraphqlApi}?query={
        ${showCart(sessionStorage.getItem('user'))}
        }`).then((res)=>{
          console.log(res)
        }).catch(err=>console.log(err))
      }
      else{
        alert("Sign in to your account first")
      }
    }




    return(
      
    <div>


      {/* Signin/SignUp Modal */}
      
       <div>
      {/* <Button color="danger" onClick={toggle}>nikiijd</Button> */}
      <Modal isOpen={modal} toggle={toggle} className="">
      <ModalHeader style={{outline: 'none'}} toggle={toggle} charCode="x" className="py-1 form-back"></ModalHeader>

        <ModalBody className="form-back" >
    
      <div className="container">
<Row className="text-center">

<div className="col-lg-12 pt-1 pb-4"><img src="/logo.png"></img></div>

<div className="col-lg-6">
  <button className="w-100 log-in mr-31" style={{outline: 'none'}}>Log-in</button>


</div>
<div className="col-lg-6">
 
  <button className="w-100 sign-up ml-31">Sign-up</button>

</div>
<div className="col-lg-6">

</div>
<div className="col-xl-12 col-lg-12 col-md-12 col-12 py-3">
  
<Form>
<InputGroup className="mt-2">
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="username" value={user} onChange={(e)=>setUser(e.target.value)}/>
      </InputGroup>
      <InputGroup className="mt-2">
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </InputGroup>
 <Button className="bg-bt mr-5 mt-3 py-2" onClick={()=>signIn()}>Sign-in</Button>
                                       

  </Form>
 </div>


</Row>
      </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
        <div className="top-bg">
        <p className="text-dark text-center">
We are delivering to your current location. 
</p>
        </div>
        <div className="top-bg1">
     <ul className="d-flex list-unstyled tp pt-3">
      
      <li><img src="/call .png" className="w-40"></img></li>
      <li><img src="/user-white.png" className="w-40"></img></li>
      <li><img src="/bag-white.png" className="w-40"></img></li>
     </ul>
        </div>
        <div className="container-fluid pb-2 top-green dn-60">
        <div className="row text-center">
        <div className="col-xl-3 col-lg-3 col-md-12 col-12"> 
           <img src="/logo.png" className="pl1-0 dn-60" width="75%"></img>
           </div>
          
           <div className="col-xl-6 col-lg-3 col-md-12 col-12 pt-3  form1">
             <Row>
             <div className="col-10"><FormGroup className="mb-sm-0">
        
        <Input type="search" name="search" id="exampleEmail" className="ou-t search-in" placeholder="Find Your Product"/>
      
     
      </FormGroup>
      </div>
       
             <div className="col-2 mx-30"><Button className="search-bt" > <img src="/search-white.png" width="40%"></img></Button></div>
  
    </Row>   
     </div>
           <div className="col-xl-3 col-lg-3 col-md-12 col-12 d-flex "> 
           <Row className="pt-3 text-center">
           <div className="col-xl-7 col-lg-3 col-md-6 col-6 over-lap"><img src="/user.png" className="w16 w-34"></img>
            <span className="pl-2 f-s14 dn-60" onClick={toggle}>Sign-in / Register</span>
           </div>
           <div className="col-xl-5 col-lg-3 col-md-6 col-6" id="UncontrolledPopover" type="button"><img src="/cart.svg" className="w27 w-34" onClick={()=>showtheCart()}></img>
           {/* <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
        <PopoverHeader>4 Cart Items</PopoverHeader>
        <PopoverBody className="card-it">
          <Row>
          <Row>
            <div className="col-md-4"><img src="/nav1.png" className="w-100"></img></div>
            <div className="col-md-6"><p>dsbhjdgxjhgdj</p></div>
            <div className="col-md-2">x</div>
            </Row>
            <Row>
            <div className="col-md-4"><img src="/nav2.png" className="w-100"></img></div>
            <div className="col-md-6"><p>dsbhjdgxjhgdj</p></div>
            <div className="col-md-2">x</div>
            </Row>
            <Row>
            <div className="col-md-4"><img src="/nav3.png" className="w-100"></img></div>
            <div className="col-md-6"><p>dsbhjdgxjhgdj</p></div>
            <div className="col-md-2">x</div>
            </Row>
            <Row>
            <div className="col-md-4"><img src="/nav4.png" className="w-100"></img></div>
            <div className="col-md-6"><p>dsbhjdgxjhgdj</p></div>
            <div className="col-md-2">x</div>
            </Row>
          </Row>
          </PopoverBody>
      </UncontrolledPopover> */}
           </div>
           </Row>
           </div>
        
        </div>
        </div>
            <div >
            <div className="col-12 form2 show theme-60">
             <Row className="ml-0">
             <div className="col-10"><FormGroup className="mb-sm-0">
        
        <Input type="search" name="search" id="exampleEmail" className="ou-t search-in" placeholder="Find Your Product"/>
      
     
      </FormGroup></div>
       
             <div className="col-2 mx-30"><Button className="search-bt" > <img src="/search-white.png" width="40%"></img></Button></div>
              
              
        
    </Row>    </div>
      {/* <Navbar id="fixed-nav" className="fixed-nav div-hieght"  light expand="md" style={{background:'#0a8b19'} }> */}
      <Navbar id="fixed-nav" className="fixed-nav div-hieght pt-2"  light expand="md">
        <NavbarBrand className="font-500 px-4 branding"> <img src="/logo.png " className="" width="75%"></img></NavbarBrand>
        <NavbarToggler onClick={toggles} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto me text-center" navbar  >
          <UncontrolledDropdown nav inNavbar className="pl-4">
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav1.png" className="dn-60"></img>
              <h6>
Best Deals
 
</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1 dropdown1 ">
                <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav2.png" className="dn-60"></img>
              <h6>Fruits & Vegetables</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav3.png" className="dn-60"></img>
              <h6>

 
Cooking Essentials
 
 

 
</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav4.png" className="dn-60"></img>
              <h6>Snacks & Beverages</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav5.png" className="dn-60"></img>
              <h6>Packaged Foods</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav6.png" className="dn-60"></img>
              <h6>Household & Pets
 
</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav7.png" className="dn-60"></img>
              <h6> Personal Care & Baby
  
 </h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav8.png" className="dn-60"></img>
              <h6> Skin Care
   
   </h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div class="col-6">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret className="text-dark font-500 show"><img src="/nav8.png" className="dn-60"></img>
              <h6>
              Eggs, Meat & Fish</h6>
              </DropdownToggle>
              <DropdownMenu right className="show1">
              <Row> <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <ul className="list-unstyled dropdown-content1">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul>
                  </div>
                  <div class="col-6 dn-60">
                  <img src="/nav-in.jpg" className="" width="100%"></img>
                  </div>
                  </Row>
              {/* <ul className="list-unstyled">
                <li href="#">Dals</li>
                <li href="#">Atta and Flours</li>
                <li href="#">Oil and Ghee</li>
                <li href="#">CONTACT US</li>
                <li>Sugar</li>
                <li>Rice</li>
                <li>Salt, Spices and Masala</li>
                <li>Nuts and Dry Fruit</li>
              </ul> */}
              </DropdownMenu>
            </UncontrolledDropdown>
        
          </Nav>
          <NavbarText  className=" text-dark font-500 px-2 dn-60">CONTACT US</NavbarText>

      

        </Collapse>
      </Navbar>
    </div>
   <Component {...pageProps}/>
   <section className="dn-60">
          <div className="container py-5">
<div className="row">
<div className="col-xl-2 col-lg-3 col-md-4 col-6">
<img src="/sp1.jpg"></img>
</div>
<div className="col-xl-2 col-lg-3 col-md-4 col-6">
<img src="/sp2.jpg"></img>
</div>
<div className="col-xl-2 col-lg-3 col-md-4 col-6">
<img src="/sp3.jpg"></img>
</div>
<div className="col-xl-2 col-lg-3 col-md-4 col-6">
<img src="/sp4.jpg"></img>
</div>
<div className="col-xl-2 col-lg-3 col-md-4 col-6">
<img src="/sp5.jpg"></img>
</div>
<div className="col-xl-2 col-lg-3 col-md-4 col-6"> 
<img src="/sp3.jpg"></img>
</div>
</div>
          </div>
        </section>
        <section>
          <div className="sub">
          <Container>
       <Row>
       <div className="col-xl-6 col-lg-3 col-md-12 col-12">
         <div className="d-flex ml-5">
         <img src="/email-white.png" className="ob-ct" width="10%"></img>
         <h4 className="text-white ml-3 mt-3">NEWSLETTER</h4>
        
         </div>
         </div>
         <div className="col-xl-6 col-lg-3 col-md-12 col-12">
       <Form inline className="ml-2">
      <FormGroup className="">
        
        <Input type="email" name="email" id="exampleEmail" className="out-line" placeholder="Enter your e-mail.." />
      </FormGroup>
      <Button className="out-line2 b-n">Subscribe</Button>
    </Form>
       </div>
       
       </Row>
       </Container>
          </div>
        </section>

   <footer style={{width: '100%;'}} className="pt-3 theme-bg">
   <Container>
     <Row>
     <div className="col-xl-4 col-lg-3 col-md-12 col-12">
       <div className="ml-4">
     <img src="/logo.png" width="55%" className="pt-5"></img>
     <h5>Got Question? Call us 24/7</h5>
     [+91]85469748957
     <p>Dehradun Uttrakhand</p>
     </div>
       </div>
       <div className="col-xl-4 col-lg-3 col-md-12 col-12 dn-60">
         <p className="ml-4 footer-p">We Using Safe Payments</p>
       
       <img src="/payment.png" width="75%"></img>
       </div> 
       <div className="col-xl-4 col-lg-3 col-md-12 col-12 dn-60">
          <Row>
          <Col xs="12" className="">
            <p className="footer-p ml-4">Navigation Links</p>
          <ul className="no-list">
            <li>Home</li>
            <li>About</li> 
            <li>Contact</li> 
            <li>Products</li>  
            <li>Privacy Policy</li>
        <li>Shipping Policy</li>
        <li>Terms & Conditions</li>     
          </ul>
          </Col>
          {/* <Col xs="6" className="">
          <p className="footer-p">Quick Links</p>
          <ul className="no-list">
      <li>Support Center</li>
        <li>FAQS</li>
        <li> Online Booking</li>
        <li>Privacy Policy</li>
        <li>Shipping Policy</li>
        <li>Terms & Conditions</li>
          </ul>
          </Col> */}
          </Row>
       </div>
     </Row>

   </Container>
   <hr></hr>
   <Container className="text-primary f-s14">
   <Row>
     <div className="col-xl-9 col-lg-12 col-md-12 col-12">
       <p>
Copyright © 2018 by OnlineShop. All Right Reserved.</p>
       </div>
       <Col xs="3" className="dn-60">
          <ul className="d-flex no-list">
            <li>
            <img src="/fb.png" className="" width="50%"></img>
            </li>
            <li>
            <img src="/tw.png" className="" width="50%"></img>
            </li>
            <li>
            <img src="/pin.png" className="" width="50%"></img>
            </li>
            <li>
            <img src="/skype.png" className="" width="50%"></img>
            </li>
          </ul>
       </Col>
     </Row>
  
   </Container>
      </footer>
   </div>
    );
  }

  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  
  //   return { ...appProps }
  // }
  
  export default MyApp;