import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Container, Row } from 'reactstrap';
import ReactImageMagnify from 'react-image-magnify';
var product = 'spi.png';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, FormGroup, Input
} from 'reactstrap';
import axios from 'axios';
import { getProductDetailsbyID,addtoCart,addproductreview } from '../../api';
import { baseGraphqlApi } from '../../apiurl';

const Post = (data) => {
    

    // const router = useRouter();
    // const { pid } = router.query;

    const [productName, setProductName] = useState("");
    const [rating, setRating] = useState("");
    const [ratingCount, setRatingCount] = useState("");
    const [manufacturerCountry, setManufacturerCountry] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [shippingCharges, setShippingCharges] = useState("");
    const [CodAvailability, switchSetCodAvailability] = useState(false);
    const [price, setPrice] = useState("");
    const [specialPrice, setSpecialPrice] = useState("");
    const [ImageArray, setImageArray] = useState([]);
    const [videoarray, setvideoarray] = useState([]);
    const [label, setLabel] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [updatedat, setDate] = useState(new Date());
    const [stock, setStock] = useState("");
    const [count, setCount] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // For review states

    const[title,settitle] = useState();
    const[nickname,setnickname] = useState();
    const[review,setreview] = useState();
    const[type,settype] = useState();
    const[productIdreview,setproductIdreview] = useState();
    const[userId,setUserid] = useState();
    const[status,setstatus] = useState();
    const[featured,setfeatured] = useState();
    const[ratings,setRatings] = useState();
    const[deliveryratings,setdeliveryratings]=useState();
    const[allRatings,setallRatings] = useState();
    const[reviewImage,setreviewImage] =  useState();
    const[reviewVideo,setreviewVideo] = useState();
    const[reviewactive,setreviewactive] = useState();

    var productDetails;



    
    useEffect(()=>{
        axios.post(`${baseGraphqlApi}?query={
        ${getProductDetailsbyID(data.data)}
  }`).then((res) => {
            setDetails(res.data.data.getProductDetailsbyID);
            console.log(res)
        }).catch((error) => {
            console.log(error);
        })
    },[data.data]) 



    function setDetails(pDetails) {
        document.getElementById('shortdescription').innerHTML = pDetails.shortDescription;
        document.getElementById('description').innerHTML = pDetails.description;
        console.log(pDetails);
        setProductName(pDetails.productName);
        setRating(pDetails.rating);
        setRatingCount(pDetails.ratingCount);
        switchSetCodAvailability(pDetails.codAvailable);
        setManufacturerCountry(pDetails.manufacturerCountry);
        setDeliveryTime(pDetails.deliveryTime);
        setShippingCharges(pDetails.shippingCharges);
        setPrice(pDetails.price);
        setSpecialPrice(pDetails.specialPrice);
        setImageArray(pDetails.images)
        setvideoarray(pDetails.videos)
    }



     function reviewForm(e){
        e.preventDefault();
        var reviewData = [];
        if(!sessionStorage.getItem('user')){
            alert("Please login to your account first");
        }
        else{
            reviewData = {
                "title" : title,
                "nickname":nickname,
                "review" :  review,
                "type" : type,
                "productId": data.data,
                "userId" :  sessionStorage.getItem('user'),
                "status" : status,
                "featured" : featured,
                "ratings" : ratings,
                "deliveryratings" : deliveryratings,
                "allRatings" : allRatings,
                "reviewImage" : reviewImage,
                "reviewVideo" : reviewVideo,
                "reviewactive" : reviewactive,
                 }
                 axios.post(`${baseGraphqlApi}?query=${addproductreview(reviewData)}
                }`).then((res) => {
                            console.log(res)
                        }).catch(err => console.log(err))
                    }
        }
       

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const imageProps = {
        smallImage: {
            alt: 'Phasellus laoreet',
            isFluidWidth: true,
            src: product
        },
        largeImage: {
            src: product,
            width: 1200,
            height: 1800
        },
        enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
    };


    const incCount = () => {
        setCount(count + 1);
    }

    const decCount = () => {
        setCount(count - 1);
    }


    //   Add to Cart

    function addtotheCart() {
        if (sessionStorage.getItem('user')) {
            console.log(sessionStorage.getItem('user'))
            axios.post(`${baseGraphqlApi}?query=${addtoCart(data.data)}
    }`).then((res) => {
                console.log(res)
            }).catch(err => console.log(err))
        }
        else {
            alert("Please login to your account first");
        }
    }

    return (



        <div className="">
            {/* <section className="bg-div1">
                <h3 className="text-center text-white">Home <span>&#8680;</span> <span class="sp">About </span></h3>
            </section> */}

            {/* .........................about section ............................*/}


            <section className="theme-bg">
                <Container className=" py-4">

                    <Row>
                        <div className="col-md-12">
                            <Row>
                                <div className="col-lg-6 detail-out p-r">
                                    <ReactImageMagnify {...imageProps} />
                                    <img src="http://127.0.0.1:4000/" className="pt-2 w-100 detail-cam"></img>
                                    <div className="row">
                                        <div className="col-md-3 ml-5">  <img src="new9.jpg" className="pt-2 w-100 "></img></div>
                                        <div className="col-md-3  ml-2">  <img src="new7.jpg" className="pt-2 w-100 "></img></div>
                                    </div>
                                    <span className="wish-top"><img src="/like.png" className="crt mr-1" ></img></span>
                                </div>

                                <div className="col-lg-6 pl-5">

                                    {/* <div><h3 className="detail-head">Camera Lumix</h3></div> */}
                                    <h3 className="detail-head pt-3">{productName}</h3>
                                    <div className=" ">
                                        <h4 className="pt-1 price"><span className="t-b">₹{specialPrice}</span> <span className="p-r ml-1 mrp"> ₹{price}</span><span className="sudo-detail">
                                        </span> <span className="text-gray off">{(price - specialPrice) / price * 100}% off</span></h4>

                                    </div>
                                    <Row className="py-2">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">

                                            <ul className="d-flex no-list rev">
                                                <li className="li-w">
                                                    <img src="/star.png" className="w16"></img>
                                                    <img src="/star.png" className="w16"></img>
                                                    <img src="/star.png" className="w16"></img>
                                                    <img src="/star.png" className="w16"></img>
                                                    <img src="/star.png" className="w16"></img> </li>
                                                <li className="text-gray"> (57)</li>
                                                <li className="text-primary"><p>23 REVIEWS</p></li>
                                                <li className="ml-3"> <span>
                                                    <Button onClick={() => decCount()} className="qty-bt">-</Button>
                                                    <span className="count-sp">{count}</span>
                                                    <Button onClick={() => incCount()} className="qty-bt">+</Button>
                                                </span></li>

                                            </ul>
                                        </div>

                                        {/* <div className="col-md-4">
                    (57)
                    </div>
                    <div className="col-md-4">
                      23 REVIEWS

                    </div> */}


                                    </Row>

                                    <p id="shortdescription"></p>

                                    {/* <div className="text-dark t-b">
                                        <h2 className="pt-1 price">₹789</h2>
                                    </div> */}
                                    {/* <div className="col-12 py-1">
                    <span>
                      <Button onClick={() => decCount()} className="qty-bt">-</Button>
                      <span className="count-sp">{count}</span>
                      <Button onClick={() => incCount()} className="qty-bt">+</Button>
                    </span>

                  </div> */}

                                    <div className=" row pt-3 mr-0">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                            <button className="btn-bg" onClick={() => addtotheCart()}><img src="/cart.png" className="crt mr-1" ></img>ADD TO CART</button>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                                            <button className="btn-bg1"><img src="/red-flash.png" className="crt mr-1" ></img>Buy Now</button>
                                        </div>
                                    </div>



                                </div>


                            </Row>

                            <div className="pt-5 dn-60">
                                <ul className="d-flex list-inline">
                                    <li>
                                        <a className=" detail-head px-4">
                                            Description</a>
                                    </li>
                                    {/* <li>
                                    <a className="pf-20 br px-4">
                                    PRODUCT DETAILS</a> 
                                    </li>
                                    <li>
                                    <a className="pf-20 px-2">
                                    REVIEWS</a> 
                                    </li> */}
                                </ul>
                            </div>
                            <div className="out-box dn-60">
                                <p id="description"></p>
                                <p className="pt-3"> when an unknown printer took a galley of type and scrambled it to make a type. like Aldus PageMaker including versions of Lorem Ipsum

                                </p>
                            </div>
                        </div>

                                    {/* Add review Demo */}

                        <div>
                            <form onSubmit={reviewForm}>
                            <input type="text" placeholder="title" onChange={(e)=>settitle(e.target.value)}/>
                            <input type="text" placeholder="nickname" onChange={(e)=>setnickname(e.target.value)}/>
                            <input type="text" placeholder="review" onChange={(e)=>setreview(e.target.value)}/>
                            <input type="text" placeholder="type" onChange={(e)=>settype(e.target.value)}/>
                            <input type="text" placeholder="product" onChange={(e)=>setproductIdreview(e.target.value)}/>
                            <input type="text" placeholder="userId" onChange={(e)=>setUserid(e.target.value)}/>
                            <input type="text" placeholder="status" onChange={(e)=>setstatus(e.target.value)}/>
                            <input type="text" placeholder="featured" onChange={(e)=>setfeatured(e.target.value)}/>
                            <input type="text" placeholder="ratings" onChange={(e)=>setRatings(e.target.value)}/>
                            <input type="text" placeholder="deliveryratings" onChange={(e)=>setdeliveryratings(e.target.value)}/>
                            <input type="text" placeholder="allRatings" onChange={(e)=>setallRatings(e.target.value)}/>
                            <input type="text" placeholder="image" onChange={(e)=>setreviewImage(e.target.value)}/>
                            <input type="text" placeholder="video"  onChange={(e)=>setreviewVideo(e.target.value)}/>
                            <input type="text" placeholder="active" onChange={(e)=>setreviewactive(e.target.value)}/>
                            <button type="submit">Submit</button>
                            </form>
                        </div>



                                        {/* Add Q and Ans demo */}

                        <div>
                            <form onSubmit={submitQuestion}>
                            product: "${data.product}",
      user: "${data.user}",
      question: "${data.question}"
      mobileNo: "${data.mobileNo}",
      email: "${data.email}",
      active: "${data.active}",
      last_answer: "${data.last_answer}",
      created_at: "${data.created_at}"
                                <input type="text" placeholder="Enter Question"/>
                                <input type="text" placeholder="Enter email"/>
                                <input type="email" placeholder="Enter email"/>
                                <input type="email" placeholder="Enter email"/>
                                <input type="email" placeholder="Enter email"/>
                                <input type="email" placeholder="Enter email"/>
                                <input type="email" placeholder="Enter email"/>
                                <button type="submit">Add</button>
                            </form>
                        </div>


                        {/* <div className="col-md-3">
                            <div className="col-12 top-head"><h6 className="pt-1">TOP SALLER PRODUCTS</h6></div>
                            <div className="mt-3 div-out">
                                <div className="row p-3">
                                    <div className="col-md-5 pt-1"><img src="product1.jpg" className="mr-1 w-100" ></img></div>
                                    <div className="col-md-7 pt-1"><p className="btm">6 Product</p>
                                        <p className="left-p">Pahari Masoor Dal</p></div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-md-5 pt-1"><img src="daal.jpg" className="mr-1 w-100" ></img></div>
                                    <div className="col-md-7 pt-1"><p className="btm">6 Product</p>
                                        <p className="left-p">Pahari Masoor Dal</p></div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-md-5 pt-1"><img src="product2.jpg" className="mr-1 w-100" ></img></div>
                                    <div className="col-md-7 pt-1"><p className="btm">6 Product</p>
                                        <p className="left-p">Pahari Masoor Dal</p></div>
                                </div>

                            </div>
                            <div>
                            <div className="botton-br">
                                <div className="col-8 top-head mt-4"><h6 className="pt-1">WISHLIST</h6></div>
                                </div>
                                <div className="out-box mt-4">
                                    <h6 className="pt-3 botton-br" >No Product</h6>
                                    <button className="wish-bt"> MY WISHLIST <span>❯</span></button>
                               

                                </div>
                                </div>
                                <div>
                                <div className="botton-br">
                                <div className="col-10 top-head mt-4"><h6 className="pt-1">TESTIMONIALS</h6></div>
                                </div>
                                <div className=" col-12 out-box mt-4">
                                    <p> "standard dummy text ever since the re1500s, when an unknown printer  type specimen book. It has  "
                                 </p>
                                 <div>
                                 <img src="/testi.jpg" className="ml-5 text-center"></img>
                                 <h5 className="  text-center pt-3">jane Doe</h5>
                                 <p className="  text-center"> Online Marketer</p>
                                     
                                 </div>
                                </div>
                                </div>
                         
                        </div> */}
                        <section className="py-5">
                            <div className="col-md-12  botton-br">
                                <div className="col-xl-3 col-lg-3 col-md-4 col-6 top-head mt-4 botton-br"><h6 className="pt-1">RELATED PRODUCTS</h6></div>
                                <Row className="pt-4">
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6 pt-2">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6 pt-2">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>


                                </Row>
                            </div>
                        </section>
                        <section className="pb-3">
                            <div className="col-md-12  botton-br">
                                <div className="col-xl-3 col-lg-3 col-md-4 col-6 top-head mt-4 botton-br"><h6 className="">TOP PRODUCTS</h6></div>
                                <Row className="pt-4">
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6 ">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6 pt-2">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-6 pt-2">
                                        <div>
                                            <Card>
                                                <div>
                                                    <CardImg top width="100%" src="spi.png" alt="Card image cap img-fill" className="img-cl " />
                                                    <div className="discount-label">95% off</div>
                                                </div>
                                                <CardBody className="card-in">
                                                    <p>Mulethi Powder Tulasi</p>
                                                    <div className="pb-2 text-right">
                                                        <span className="app-rate">4.3 *</span>
                                                    </div>

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
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-5">
                                                            <h6 className="text-center text-dark d-flex">₹700 <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                                                            </span></h6></div>
                                                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                                                            <button className="btn-bg0 add">ADD TO CART</button>
                                                        </div>





                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </div>

                                    </div>


                                </Row>
                            </div>
                        </section>
                    </Row>


                </Container>
            </section>



        </div>

    )
}

export async function getServerSideProps({params:{pid}}) {
    var data = pid;
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default Post;