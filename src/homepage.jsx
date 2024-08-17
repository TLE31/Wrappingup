

import logo from './assets/logo2.png'
import sectionOneImage from './assets/sectionOne.jpg'
import sectionTwoImage from './assets/sectiontwo.jpg'
import sectionThreeImage from './assets/sectionThree.jpg'
import sectionFourImage from './assets/sectionFour.jpg'
import sectionFiveImage from './assets/sectionfive.jpg'
import tagSideImage from './assets/tagSideImage.jpg'
import lineChart from './assets/lineChart.gif'
import packageGif from './assets/package.gif'
import brainImage from './assets/brain.gif'
import eyeImage from './assets/eye.gif'
import strategy from './assets/strategy.gif'
import interfacee from './assets/interface.gif'
import complex from './assets/complex.gif'
import './App.css'
import { Button, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll';

function Homapage() {


    const [ref1, inView1] = useInView({
        triggerOnce: true,
      });

    return <>
              

              <div id="header">
                        <div id="navBar">
                               <div >
                                   <img id="logo" src={logo} alt='my logo'></img>
                               </div>

                               <div id='navButton'>
                                         <div className='navButtons'>
                                         <Link to="productSection" smooth={true} duration={1000}>
                                           Product
                                         </Link>
                                          
                                         </div> 
                                         <div className='navButtons'>
                                          <Link to='Features' smooth={true} duration={800}>
                                            Features
                                          </Link>
                                         </div>
                                         <div className='navButtons'>
                                          <Link to='contact' smooth={true} duration={1100}>
                                            Creators
                                          </Link>
                                         </div>
                               </div>
                        </div>
                        <hr style={{margin : "0 5%"}}></hr>

                            <div id='tagContainer'>
                                <div>
                                <div id='tagline'>
                                Efficiency Unleashed: Revolutionize Your <span id='typinganimation'>  Packaging Process.</span>
                                </div>
                                <div id='subTagline'>
                                An Awesome Tool to Streamline Your Packaging Workflow. 
                                Unleash Precision Packaging: Elevate with Our Cutting-Edge Tool.
                                </div>
                                <div id='launchButton' >
                                  <Link to='Features' smooth={true} duration={800}>
                                <Button className='lbutton' sx={{ backgroundColor : "#03045e" }} variant="contained">Get started </Button>
                                  </Link>
                                
                                </div>
                                </div>
                                <div >
                                           <img  id='tagimage' className='rightAnimation' src={tagSideImage} alt='tagSideImage' ></img>
                                </div>
                            </div>

              </div> 

              <div id='Features'> </div>

                  <div id="middleComponents">

                           <div  id='firstSection'>
                                         <div >
                                                <img  id='sectionOneImage' className={`${inView1 ? 'leftAnimation' : '' }`} src={sectionOneImage} ></img>
                                         </div>
                                         <div   className={`statementContainer ${ inView1 ? 'rightAnimation' : '' }`}>
                                            <div className='mainTitle'>
                                            Unlocking the Potential: Key Features and Capabilities
                                            </div>
                                            <div  className='content'>
                                                   Embark on a transformative journey with "Wrapping Up," where we harness the extraordinary power of the COCO-SSD (Common Objects in Context - Single Shot MultiBox Detector) model to revolutionize packaging planning in the manufacturing industry. Our platform introduces a suite of essential features and functionalities, meticulously designed to simplify packaging complexities, elevate efficiency, and enhance precision.
                                            </div>
                                            <div   className='gifSection'>
                                                <div className='gifContainer' >
                                                <img className='gif' src={lineChart} ></img> <span className='gifContent'>  Elevate efficiency </span>
                                                </div>
                                                <hr className='hrline' ></hr> 
                                                <div className='gifContainer'>
                                                <img className='gif' src={packageGif} ></img> <span className='gifContent' >  Enhance precision</span>
                                                </div>

                                            </div>
                                         </div>
                           </div>

                           <div id='secondSection'>
                         
                                         <div   className={`statementContainer ${ inView1 ? 'rightAnimation' : '' }`}>
                                            <div className='mainTitle'>
                                            Smart Packaging Material Recommendations
                                            </div>
                                            <div  className='content'>
                                            Once an object is detected, our system takes it to the next level by providing intelligent packaging material recommendations.
    Leveraging the insights from COCO-SSD, users receive data-driven suggestions based on the properties and context of the detected object, ensuring optimal packaging choices.
                                            </div>
                                            <div   className='gifSection'>
                                                <div className='gifContainer' >
                                                <img className='gif' src={brainImage} ></img> <span className='gifContent'> Machine Learning  </span>
                                                </div>
                                                <hr className='hrline'></hr> 
                                                <div className='gifContainer'>
                                                <img className='gif' src={eyeImage} ></img> <span className='gifContent' >  Object Detection</span>
                                                </div>

                                            </div>
                                         </div> 

                                         <div >
                                                <img  id='sectionTwoImage' className={`${inView1 ? 'leftAnimation' : '' }`} src={sectionTwoImage} ></img>
                                         </div>
                           </div> 

                           <div  id='firstSection'>
                                         <div >
                                                <img  id='sectionOneImage' className={`${inView1 ? 'leftAnimation' : '' }`} src={sectionThreeImage} ></img>
                                         </div>
                                         <div  className={`statementContainer ${ inView1 ? 'rightAnimation' : '' }`}>
                                            <div className='mainTitle'>
                                            Automated Packaging Planning with Machine Learning
                                            </div>
                                            <div  className='content'>
                                            Gone are the days of manual packaging planning. "Wrapping Up" automates the entire process, thanks to machine learning algorithms integrated with COCO-SSD.
    Say goodbye to the complexities of planning and hello to streamlined efficiency.
                                            </div>
                                            <div   className='gifSection'>
                                                <div className='gifContainer' >
                                                <img className='gif' src={strategy} ></img> <span className='gifContent'>  Mapping item and packaging material </span>
                                                </div>
                                                <hr className='hrline'></hr> 
                                                <div className='gifContainer'>
                                                <img className='gif' src={complex} ></img> <span className='gifContent' >  No complexities</span>
                                                </div>

                                            </div>
                                         </div>
                           </div>
                             
                           <div id='secondSection'>
                         
                         <div  id='productSection'  className={`statementContainer ${ inView1 ? 'rightAnimation' : '' }`}>
                            <div className='mainTitle'>
                            Explore our ML modal
                            </div>
                            <div  className='content'>
                              <div>   
                                           <div>
       
                                   Want to experience the magic of our ML model for yourself? Click the "Use the Model" button below to access our dedicated page, where you can upload images and receive instant object detection and packaging material recommendations.    
                                          </div>
                                   <hr style={{margin : "2% 5%" , }}></hr>
                                   <div>
       
                                   Our user-friendly interface is designed with simplicity in mind, ensuring that both seasoned professionals and newcomers can easily navigate the system. 
                                     COCO-SSD's efficiency seamlessly integrates with an intuitive user experience.
                                   </div>
                                   <br></br>
                                   <div   className='gifSection'>
                                                <div className='gifContainer'>
                                                <img className='gif' src={interfacee} ></img> <span className='gifContent' > User friendly interface</span>
                                                </div>

                                            </div>
                                   
                              </div>
                              
                            </div  >
                            <div style={{display : 'flex' , justifyContent : "center", alignItems : "center" }}>

                            <Button  className='lbutton' onClick={() => { window.location = '/detection'  }} sx={{ width : "200px" , height : "50px" , backgroundColor : "#03045e" }} variant="contained">Get started </Button>
                            </div>
                         </div> 

                         <div >
                                <img  id='sectionOneImage' className={`${inView1 ? 'leftAnimation' : '' }`} src={sectionFourImage} ></img>
                         </div>
           </div>

                           <div  id='firstSection'>
                                         <div >
                                                <img  id='sectionOneImage' className={`${inView1 ? 'leftAnimation' : '' }`} src={sectionFiveImage} ></img>
                                         </div>
                                         <div className={`statementContainer ${ inView1 ? 'rightAnimation' : '' }`}>
                                            <div className='mainTitle'>
                                            Join the Packaging Revolution
                                            </div>
                                            <div  className='content'>
                                            We're at the forefront of innovation, and we invite you to join us on this exciting journey. Together, we can revolutionize the world of packaging.
                                            </div>
                                         </div>
                           </div>
                 </div > 

                 <div id='contact'></div>

                 <div  id="footer">
                                   <div id='info'>
                                   <Typography variant="button" color={'white'} display="block" gutterBottom>
                                       Contact 
                                     </Typography>
                                     <Typography variant="button" color={'white'} display="block" gutterBottom>
                                       Terms & Conditions
                                     </Typography>
                                     <Typography variant="button" color={'white'} display="block" gutterBottom>
                                       Privacy Policy
                                     </Typography>
                                     <Typography variant="button" color={'white'} display="block" gutterBottom>
                                       Refunds & Cancellation Policy
                                     </Typography>
                                   </div>
                                   
                    </div>
    </>


}

export default Homapage ;