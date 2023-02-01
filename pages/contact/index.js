import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default function About() {
    return (
        <div className="theme-bg">
            {/* <section className="bg-div1">
                <h3 className="text-center text-white">Home <span>&#8680;</span> <span class="sp">Contact</span></h3>
            </section> */}
            <section>
                <div className="container pt-5">
                    <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                            <div className="top-head"><p className="pt-1">LEAVE A MESSAGE</p></div>
                            <div className="row">
                            <div className="col-xl-3 col-lg-9 col-md-4 col-4 dn-60">
                                    <p className="pt-2">Enter your mail</p>
                                    <p className="pt-4">Enter your name</p>
                                    <p className="pt-4">Write Something</p>
                                    <p className="pt-4">Pdf</p>
                                    <Button className="bg-bt">Send</Button>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 col-12">
                                    <Form>
                                        <FormGroup>

                                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your mail" />
                                        </FormGroup>
                                        <FormGroup>

                                            <Input type="name" name="name" id="examplePassword" placeholder="Enter your Name" />
                                        </FormGroup>


                                        <FormGroup>

                                            <Input type="textarea" name="text" id="exampleText" placeholder="how can we help you" />
                                        </FormGroup>
                                        <FormGroup className="dn-60">

                                            <Input type="file" name="file" id="exampleFile" />

                                        </FormGroup>

                                        <Button className="bg-bt">Send</Button>
                                    </Form>

                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 dn-60">
                            <div className="text-dark dn-60"><h5>INFORMATION</h5>
                                <p>For any feedbacks or improvements on our online store, please fill in this contact form. We will take a
                            look and reply you within 24 hours.We always need your feedbacks to continuously leverage.</p>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <img src="mail.png" width="50%"></img>
                                </div>
                                <div>
                                    <p className="mr-5">

                                        demo@fieldthemes.coms</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <img src="map.png" width="50%"></img>
                                </div>
                                <div>
                                    <p className="mr-5">

                                      demo@fieldthemes.coms</p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </section>
        

            <section className="">
                <div className="container pt-5">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe  height="300" id="gmap_canvas" className="map" src="https://maps.google.com/maps?q=Pah%2075%20bank%20calony%20%20Ajabpur%20kalan%20dehradun%20%20Uttarakhand%20Ajabpur%20kalan%20dehradun%20%20Uttarakhand&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/"></a></div>
                    </div>

                </div>
            </section>

           





        </div>
        

    )
}
