import React from 'react';
function Hero() {
    let details = ["web developer", "B.Tech Student", "MERN Developer", "FreeLencer"];
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6 p-3">
                    <h1> Hi, I am  <br />
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        <span style={{ color: "purple" }}> Ashish Prajapat</span>  </h1>
                    <h3 className='pt-1'>I am a &nbsp;
                        {
                            details.map(element => {
                                return element
                            })

                        }
                    </h3>

                </div>
                <div className="col-lg-5 col-sm-12 col-md-6 p-2">
                    <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265593/Wonderlust-DEV/mxcx2lz6uemriyypvhvq.jpg" alt="" style={{ width: "80%", borderRadius: "10%", height: "80%" }} />
                </div>

            </div>
        </div>
    );
}

export default Hero;