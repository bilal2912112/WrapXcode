import React from 'react'
import BottomImage from "../Footer/Assets/Asset-2.png"
import './Assets/footer.css'
const footer = () => {
  return (
   <>
     <footer className='bg-dark text-white pt-4 mt-0 pb-2 strickly-footer'>
     <div class="container">
  <div class="row">
  <div class="col ">
    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact Us</h5>
<p>
Email: <span className='text-success'>info@brickhousewebdesign.com</span> 
</p>
<p>
Phone: <span className='text-success'>(413) 553-1992</span> 
</p>
<p>
    <i className='fas fa-home me-3'></i>+9123223-12112
</p>
    </div>
    <div class="col  ">
    <h1 className='text-uppercase mb-4 font-weight-bold text-warning text-end'>Company</h1>
                     <img src={BottomImage} className="float-end" width="50%" height="auto"/>
                    
                     
    </div>
   
  </div>
  
</div>

<div class="bottom text-center bg-dark">
        <div class="container">           
            <div class="row">
                <div class="col-md-12">
                    <div class="container-inside">
                        <div class="content-left text-left ">                        
                            <div class="copyright site-info ">                     
                                <p>Copyright © 2021. All Rights Reserved.</p> 
                            </div>
                        </div>

                                                <div class="content-right text-right">
                           <div id="nav_menu-5" class="widget widget_nav_menu"></div> 
                                                  </div>
                                            </div>
                </div>                   
            </div>
        </div>
    </div>
     </footer>
   </>
  )
}

export default footer
