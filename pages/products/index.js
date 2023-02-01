import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Head from 'next/head'
import { Container, Row, Button } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { allproducts } from '../../api';
import { baseGraphqlApi } from '../../apiurl';
const ProductCard = dynamic(()=>import('../components/productCard'))






function products(){

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const [count, setCount] = useState(1);
  const [productList, setProductList] = useState([]);
  var d;
  // Getting product List

  useEffect(()=>{
    axios.get(`${baseGraphqlApi}?query={
   ${allproducts()}
}`).then((result)=>{
  d = result.data.data.allproducts;
  setProductList(result.data.data.allproducts)
  console.log(d)
}).catch((err)=>{
  console.log(err)
})
  },[])







  const incCount = () =>{
    setCount(count+1);
  }

  const decCount = () =>{
    setCount(count-1);
  }

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
    <div>
      
    <div className="theme-bg">
      {/* <section className="bg-div1">
        <h3 className="text-center text-white">Home <span>&#8680;</span> <span class="sp">Products</span></h3>
      </section> */}

      {/* .........................about section ............................ */}

      <Container className="pb-5 pt-3">
    




        <Row>
          <div className="col-md-3 dn-60">



            <div className="botton-br ">
              <div className="col-10 top-head mt-4"><h6 className="pt-1 ">FILTER PRODUCTS BY</h6></div>
            </div>
            <div className="out-box mt-4">
              <h6 className="pt-3 botton-br" >AVAILABILITY</h6>


              <div className="bt-div pt-3">
                <Button className="chk-box mb-1" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>&#10004;</Button>
                <Button className="chk-box mb-1" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>&#10004;</Button>
                <Button className="chk-box mb-1" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>&#10004;</Button>
              </div>
              <p>Selected: {JSON.stringify(cSelected)}</p>

            </div>
       

          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-12 mt-2">
     

          <div className="pb-2 scroll">
          <ul className="d-flex no-list">
            <li className="top-products mr-2 ">Product</li>
            <li className="top-products mx-2">Product</li>
            <li className="top-products mx-2">Product</li>
            <li className="top-products mx-2">Product</li>
            <li className="top-products mr-2 ">Product</li>
            <li className="top-products mx-2">Product</li>
            
       
          </ul>
        </div>
        <div></div>
               
      <Row className="address-div3 dn-60">
      <div className="col-lg-9"><span className="log3 ">FILTER</span><span><img src="filter-black.png" className="w-5"></img></span> </div>
   
      </Row>
      {/* <ProductCard/> */}
      {/* <Dynamic/> */}
      <Row className="address-div3 dn-24 ">
      <div className="col-lg-9 "></div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-center"><span className="log3">FILTER</span><span className="pl-2"><img src="filter-black.png" className="w-10"></img></span> </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-center left-line"><span className="log3">Sort</span><span className="pl-1"><img src="sort-black.png" className="w-10"></img></span> </div>
      </Row>
           <Row className="pt-3">
             

                {productList.map((item) => (
                <ProductCard
                pid = {item.id}
                SKU = {item.SKU}
                productName = {item.productName}
                rating={item.rating}
                price={item.price}
                specialPrice = {item.specialPrice}
                images = {item.images[0]}
                />
              ))}

           </Row>
               {/* <div className="col-xl-3 col-lg-3 col-md-4 col-6">
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
              <div className="col-xl-3 col-lg-3 col-md-4 col-6 mt-4">
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
              <div className="col-xl-3 col-lg-3 col-md-4 col-6 mt-4">
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
            <Row className="pt-4"> */}
              {/* <div className="col-xl-3 col-lg-3 col-md-4 col-6">
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
              <div className="col-xl-3 col-lg-3 col-md-4 col-6 mt-4">
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
              <div className="col-xl-3 col-lg-3 col-md-4 col-6 mt-4"> */}
                {/* <div>
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
             */}
           
             
             


            {/* </Row> */}
            {/*----------------------- pagination ---------------------------*/}
            
            <Row className="pt-3 pl-4">
            <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
    </Row>

          </div>
        </Row>

      </Container>

   


    </div>
    </div>
  )
}

export default products;