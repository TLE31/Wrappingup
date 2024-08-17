// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import { Typography } from "@mui/material";
import logo from './assets/logo2.png'


const Material = [
  {
  "person" : ""
}
,{
  "keyboard" : "Bubble wrap"
},{
  "cell phone" : "Foam wrap"
},{
  "bowl" : "Polyethylene"
},{
  "cup" : "Cardboard box"
},
{
 "toothbrush" : "Plastic Blister"
},{
  "scissors" : "Plastic Blister"
},{
  "book" : "Bubble wrap"
},{
  "mouse" : "Cardboard box"
},{
  "laptop" : "Foam Padding"
},{
  "tv" : "Foam Padding"
},{
  "chair" : "Stretch wrap"
},{
  "pizza" : "cardboard box"
},{
  "potted plant" : " Polyethylene Bags"
},{
  "apple" : "Polyethylene Bags" 
},{
  "banana" : "Polyethylene Bags"
},{
  "tennis racket" : "Cardboard tube"
},{
  "knife" : "Plastic blister"
},{
  "spoon" : "Polyethylene Bags"
},{
  "teddy bear" : "Bubble wrap"
},{
  "couch" : "Bubble wrap"
},{
  "cake" : "cardboard box"
},{
  "fork" : "Polyethylene Bags"
},{
  "bottle" : "Padded box"
},{
  "sports ball" : "Sturdy box"
},{
  "suitcase" : "Stretch wrap"
},{
  "umbrella" : "Padded envelop"
},{
  "backpack" : "Cardboard box"
},{

}
] 




function Detection() {
  const [item,setItem] = useState("")
  const [material,setMaterial] = useState("")
  const [accuracy,setAccuracy] = useState("")
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Trained model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available 
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties 
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight; 


      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);
      
      console.log(obj)
      

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      
    try {
       if(obj && obj.length > 0  && obj[0].class !== undefined ){
        console.log(obj[0].class)

        setItem(obj[0].class) 
        setAccuracy(Math.floor((obj[0].score)*100))

       Material.forEach((material) => {
        const itemmaterial = Object.keys(material)[0]
        if(itemmaterial == obj[0].class) {
          setMaterial(material[itemmaterial])
        }
       })
  

       }else {
        console.log("no item")
       }
    }
    catch (error) {
    console.log(error)
    }

      drawRect(obj, ctx); 
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
      
         

    <div className="Detection">
        
        <div id="navBar">
    <div >
        <img onClick={() => {window.location = '/'}} id="logo" src={logo} alt='my logo'></img>
    </div>

    <div id='navButton'>
              <div className='navButtons'>
                 Product 
              </div> 
              <div className='navButtons'>
                 Features
              </div>
              <div className='navButtons'>
                 Creators
              </div>
    </div>
</div> 

<hr style={{margin : "0 5%"}}></hr>

      <header className="Detection-header">
        <div>

        <Webcam className="detectframe"
          ref={webcamRef}
          muted={true} 
          
          />

        <canvas
        className="detectframe"
        ref={canvasRef} 
        />
        </div>
    <div id="displaycontainer">
         <div id="displayboxcontainer">

        <div className="displaybox" >
          <h3 className="displayfont2" style={{color : "#64CCC5"}}>OBJECT</h3>
          <div className="displayfont">
            {item}
          </div>
        </div>
        <div className="displaybox" >
          <h3 className="displayfont2" style={{color : "#64CCC5"}}>PACKAGING MATERIAL</h3>
          <div className="displayfont">
            {material}
          </div>
        </div>
        <div className="displaybox">
        <h3 className="displayfont2"  style={{color : "#64CCC5"}}>ACCURACY</h3>
          <div className="displayfont">
            {accuracy} %
          </div> 
        </div>
    </div>
         </div>


      </header>
    
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
    </div>
  );
}

export default Detection;
