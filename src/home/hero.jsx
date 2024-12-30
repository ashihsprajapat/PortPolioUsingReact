import React from 'react';
function Hero() {
    return (
        <div className="container pt-5">
            <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 p-3">
                <h1> Hi, I am <span style={{color:"purple"}}> Ashish Prajapat</span>  </h1>
                <h3 className='pt-1'>I am a web developer</h3>
                <p className='pt-5'> 
                I am a third-year B.Tech student at Jagannath University, Jaipur, pursuing Computer Science. With a strong passion for coding, I specialize as a MERN Stack Developer. I enjoy solving complex problems and building scalable web applications. When I'm not coding, you can find me on the cricket field, enjoying my favorite sport.</p>
            </div>
                <div className="col-lg-5 col-sm-12 col-md-6 p-2">
                <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265593/Wonderlust-DEV/mxcx2lz6uemriyypvhvq.jpg" alt="" style={{width:"80%",borderRadius:"10%",height:"80%"}} />
                </div>
                
            </div>
        </div>
    );
}

export default Hero;