import React,{useState} from 'react'
import CoreSec from './coresec';
import Data from './data';
import "./Asset/about.css"
import photo from './Asset/dorimon.png'
const Readmorequestion = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0,0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        <h5 className='text-muted '>{isReadMore ? "+" : "-"}</h5>
        
      </span>
    </p>
  );
};
const About = () => {
  const [active,setActive]=useState("FirstCard")
  return (
   <>
   
   <div className=' bg-success text-light text-center  py-4 '>
      Learn how we can help grow your business by scheduling a call today!
      </div>
      <section>
    <div id="intro" class="bgimage text-light  container-fluid">
    <h1 className='position-absolute top-50 start-50 translate-middle' >ABOUT</h1>
    </div>
  </section>
  <div class="container m-5">
  <div class="row">
    <div class="col  ">
    <img src={photo} alt="" />
    </div>
    <div class="col me-2">
      <div className='shadow-sm p-4'> <button className='btn btn-outline-success mx-2 ' onClick={()=>setActive("FirstCard")}>About CODE WRAP</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive("SecondCard")}>Our Mission</button>
      <button className='btn btn-outline-success mx-2' onClick={()=>setActive("ThirdCard")}>Founder's Message</button>
      </div>
      <div>
        {active==="FirstCard"&&<CoreSec data={Data} cardIndex={0}/>}
        {active==="SecondCard"&&<CoreSec data={Data} cardIndex={1}/>}
        {active==="ThirdCard"&&<CoreSec data={Data} cardIndex={2}/>}
        
       
      </div>
    

    </div>
  </div>
  </div>
  <div class=" m-5 p-5  bg-light ">
  <div class="row ">
    <div class="col mt-5">
      <h1>Frequently  Asked </h1>
      <h1 className='mt-3'>Questions</h1>
    </div>
    <div class="col mt-5 text-muted">
      <h5> Do you provide free consultations?</h5>
      <p><Readmorequestion> We sure do! Call <span className='text-success'> (413) 553-1992</span> for more information or get your <span  className='text-success'>free quote online.</span> </Readmorequestion></p>
      <h5>How long will it take before my website is ready?</h5>
      <p><Readmorequestion> Depending on the complexity of the project the amount of time will vary. Generally our websites take anywhere from 2 to 4 weeks from the quote to completion.
        </Readmorequestion></p>
      <h5>Are there any hidden costs?</h5>
      <p><Readmorequestion> Certainly not! We are transparent in our pricing so that the quote you receive is the price you pay. Once you have begun a project with us, we work diligently to give you the quality product you deserve!</Readmorequestion></p>

    
    </div>
    
    
  </div>
  </div>
  <div className=' text-center text-light  endingsection'>
<p className='pt-5 bottom-title'>Build Your Brand</p>
<h4 className='text-success'>Do you want to maximize your businesses potential?</h4>
<p className='pt-3'>Our expert team in Berkshire Massachusetts specializes in branding, web design and online marketing. We build strategic,</p>
  <p>engaging experiences that reinforce credibility, communicate key messages and turn prospects into profits.</p>
  <button type="button" class="btn btn-success btn-lg m-3">Get Started Now</button>
  </div>
  </>
  )
}

export default About
