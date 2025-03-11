import Button from '@mui/material/Button';
import { useContext } from 'react';
// import AppContext from '../context/AppContext';
function Hero() {
  
    
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-5 col-sm-12 col-md-6 p-2">
                    <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265593/Wonderlust-DEV/mxcx2lz6uemriyypvhvq.jpg" alt="" style={{ width: "80%", borderRadius: "10%", height: "80%" }} />
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6 p-3">
                    <h1>Ashish Prajapat </h1>
                    <h3 className='pt-1'>I am a web developer</h3>
                    <p className='pt-5'>
                        I am a third-year B.Tech student at Jagannath University, Jaipur, pursuing Computer Science. With a strong passion for coding, I specialize as a MERN Stack Developer. <br />  I enjoy solving complex problems and building scalable web applications. When I'm not coding, you can find me on the cricket field, enjoying my favorite sport.</p>
                    {/* <button className='btn btn-outline-success' >Download my Resume</button> */}
                    <Button variant="outlined" color="success" size='small' >my Resume</Button>
                </div>


            </div>
        </div>
    );
}

export default Hero;