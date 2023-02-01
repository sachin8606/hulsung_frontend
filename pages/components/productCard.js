import React from 'react';
import Link from 'next/link';
import { Card,CardImg,CardBody,FormGroup,Input,Button } from 'reactstrap';
import axios from 'axios';

function productCard(props){

  const fun=(props)=>{
    axios.post(`http://localhost:4000/graphql?query=mutation{
      createCart(
        user:"60bdd9cbe6132e7ef876d291"
        products:{
          productId:"${props}"
          quantity:1
        }
      ){
        user
      }
    }`).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }


  function addtocart(pId){
    console.log(sessionStorage.getItem('user'));
    
    axios.post(`http://localhost:4000/graphql?query=mutation{
        addtoCart(
          user:"${sessionStorage.getItem('user')}"
          products:{
            productId:"${pId}"
            quantity:2
      }
      ){
        user
      }
    }`).then((res)=>{
      console.log(res)
    }).catch(err => console.log(err))
  }
  


  // Product Description


  // function productDetail(e){
  //   // sessionStorage.setItem('ProductDetail',e);
  //   window.location.assign('/detail/'+e);
  // }


    return(
        <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div>
                <Card>
                  <div>
                      <CardImg top width="100%" src={'http://localhost:4000/'+props.images.image} alt="Card image cap img-fill" className="img-cl " />
                      <div className="discount-label">95% off</div>
                    </div>
                    <CardBody className="card-in">
                      <Link href={"/detail/[pid]"} as={"/detail/"+props.pid}>
                      <p>{props.productName}</p>
                      </Link> 
                      <div className="pb-2 text-right">
                    <span className="app-rate">{props.rating} *</span>
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
                          <h6 className="text-center text-dark d-flex">{props.price} <span className="p-r ml-1 mrp"> ₹900</span><span className=" sudo sudo12">
                            </span></h6></div>
                        <div className="col-xl-6 col-lg-3 col-md-4 col-7">
                          <button className="btn-bg0 add"onClick={()=>addtocart(props.pid)}>ADD TO CART</button>
                        </div>





                      </div>
                    </CardBody>
                  </Card>


                </div>

              </div>
    )
}

export default productCard;