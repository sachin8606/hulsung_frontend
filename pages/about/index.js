import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
export default function About() {
  return (
    <div className="">
  

    {/* .........................about section ............................*/}


<section>
          <Container className=" py-3">
          <div className="row">
  <div className="col-md-12 text-center">
    <h4>About-Us</h4>
    <hr></hr>
    </div> 
    </div>
            <Row>
              <div className="col-lg-6 ">
              <div className="top-head2 dn-60"><h6>OUR STORY</h6></div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Lorem ipsum dolor sit amet.

“ Duis dictum, neque at hendrerit euismod, elit nulla mattis mi, vel auctor sem dolor nec nisl..</p>
             
              </div>
              <div className="col-lg-6">
              <img src="daals.jpg" className="pt-2 all"></img>
              </div>

            </Row>

          </Container >
        </section>

    {/* .........................progress section............................*/}


    <section>
          <Container className=" py-3">
      
            <Row>
              <div className="col-lg-6">
              <div className="top-head2"><h6>OUR SKILL</h6></div>
              <div className="text-center">0%</div>
      <Progress />
      <div className="text-center pt-3"> <span className="sp-left">Fast delivery </span> 25% </div>
      <Progress value="25" className=""/>
      <div className="text-center pt-3"><span className="sp-left"> Quick Order</span>50%</div>
      <Progress value={50} />
      <div className="text-center pt-3"><span className="sp-left">Fast delivery </span>75%</div>
      <Progress value={75} />
      <div className="text-center pt-3"><span className="sp-left"> Quick Order</span>100%</div>
      <Progress value="100" />
    

             
              </div>
              <div className="col-lg-6 pt-4">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Lorem ipsum dolor sit amet.

“ Duis dictum, neque at hendrerit euismod, elit nulla mattis mi, vel auctor sem dolor nec nisl. Etiam hendrerit arcu pretium, aliquet nulla eu, placerat ipsum. Nullam suscipit nulla a sapien gravida euismod. Fusce quis ligula quis dui aliquam posuere vel sed lectus. Duis dictum, neque at hendrerit euismod, elit nulla mattis mi”
volutpat cursus quam, a blandit neque accumsan vitae. Maecenas scelerisque interdum dolor in vestibulum.</p>
<p className="dn-60"> 

“  Etiam hendrerit arcu pretium, aliquet nulla eu, placerat ipsum. Nullam suscipit nulla a sapien gravida euismod. Fusce quis ligula quis dui aliquam posuere vel sed lectus. Duis dictum, neque at hendrerit euismod, elit nulla mattis mi”
volutpat cursus quam,</p>
              </div>

            </Row>

          </Container >
        </section>

        {/* ..........................our team................................. */}
        <section>
          <Container className=" py-3">
          <div className="top-head2"><h6>MEET OUR TEAM</h6></div>
            <Row className="pt-4">
              <div className="col-lg-3 zoom tst">
                <img src="team1.jpg" className="br-50"></img>
                <div className="text-center pt-3 mr-4 fw-400">
                  <h5 className="fw-400">BRYAN JHONSON</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
              <div className="col-lg-3 zoom tst">
                <img src="team2.jpg" className="br-50"></img>
                <div className="text-center pt-3 mr-4 fw-400">
                  <h5 className="fw-400">BRYAN JHONSON</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
              <div className="col-lg-3 zoom tst">
                <img src="team3.jpg" className="br-50"></img>
                <div className="text-center pt-3 mr-4 fw-400">
                  <h5 className="fw-400">BRYAN JHONSON</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>
              <div className="col-lg-3 zoom tst">
                <img src="team4.jpg" className="br-50"></img>
                <div className="text-center pt-3 mr-4 fw-400">
                  <h5 className="fw-400">BRYAN JHONSON</h5>
                  <p>CEO & Co-Founder</p>
                </div>
              </div>

            </Row>

          </Container >
        </section>
        <hr></hr>

    </div>
   
  )
}
