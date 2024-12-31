import React, { useState } from 'react';
function Profiles() {
    let style = { textDecoration: "none" }
    let [proFileShow, setProFileShow] = useState(false);

    let handlProfileShow = () => {
        setProFileShow((preve) => !preve);
    }
    return (
        <div className="container mt-5 mb-5 ">
            <h2>My  prifie</h2>
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 card p-4 mt-3 ">
                    <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265445/Wonderlust-DEV/ntfoizxfq7kl1fjudvdk.jpg" alt="" style={{ borderRadius: "5%" }} />
                    <div className="card-body">
                        <p>

                            <b>
                                <i class="fa-brands fa-linkedin" style={{ color: "blue" }}>
                                </i>Linkedin
                            </b>&nbsp; &nbsp; &nbsp;
                            <a href="https://www.linkedin.com/in/ashish-prajapat-528710288/" target="_blank" style={style}>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </p>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-sm-12 card mt-3 ">
                    <div style={{ backgroundColor: "black", borderRadius: "1rem" }} className='row p-2 m-2 ' >
                        <div className="imagesPofileInast col-4" >
                            <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735341889/Wonderlust-DEV/rylxngk7oqsekmsehzm0.jpg" alt="" style={{ borderRadius: "5%", width: "80%", backgroundColor: "black" }} />
                        </div>
                        <div style={{ color: "white", }} className='col-6' >
                            <h5 >Ashish Prajpat</h5>
                            <h6>Ashish_prajapt
                                <img src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif" alt="" style={{ borderRadius: "5%", width: "10%", }} />
                            </h6>
                            <h6>Rank &nbsp; {(282798).toLocaleString('en-IN')}</h6>
                        </div>
                    </div>

                    <div className="card-body" >
                        <p> <b> <img src="./leetcodeLogo.png" alt="" style={{ width: "1.3rem", backgroundColor: "black", borderRadius: "20%" }} /> Leetcode</b>
                            &nbsp; &nbsp; &nbsp;
                            <a href="https://leetcode.com/u/Ashish_prajapt/" target="_blank" style={style}>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                        </p>
                    </div>
                </div>
            </div>

            {
                proFileShow &&
                <div className="row">

                    <div className="col-lg-5 col-md-6 col-sm-12 card mt-3 ">
                        <div className='row p-2 m-2 ' style={{ height: "60%", borderRadius: "1rem", backgroundColor: "gray" }} >
                            <div className="ImageInstProfile col-4 " >
                                <img src="./insta.jpg" alt="" style={{ width: "100%", height: "70%", }} className='instaProfile' />
                            </div>
                            <div className='col-5' style={{ color: "white", width: "50%" }} >
                                <h6>Ashish Prajapat</h6>
                                <h6>ashish_coder_44</h6>
                            </div>
                        </div>

                        <div className="card-body instatCard" >
                            <p><b> <i class="fa-brands fa-square-instagram" style={{ color: "red" }}></i>Instagram</b> &nbsp; &nbsp; &nbsp; <a href="https://www.instagram.com/ashish_coder_44/profilecard/?igsh=MWZldmM4YmJhdnUwMA==" target="_blank" style={style}> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a></p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 card p-3 mt-3 ">
                        <div className="row  " style={{ backgroundColor: "gray", borderRadius: "1rem" }} >
                            <div className='p-2 col-5 '  > <center>
                                <img src="/logo.jpg" alt="" style={{ borderRadius: "5%", width: "50%" }} /></center>
                            </div>
                            <div className='col-5' style={{ color: "white", }}  >
                                <h6>Ashish P.</h6>
                            </div>
                        </div>
                        <div className="card-body" >
                            <p><b><i class="fa-brands fa-square-upwork" style={{ color: "green" }}></i>upwork</b><a href="https://www.upwork.com/freelancers/~01eb9d13384254f1ea" target='_blank' style={style}>  <i class="fa-solid fa-arrow-up-right-from-square"></i> </a></p>
                        </div>
                    </div>
                </div>

            }
            <center>
                {
                    proFileShow?(<button className='btn btn-outline-info mt-5 ' onClick={handlProfileShow} >Show Less</button>):(<button className='btn btn-outline-info mt-5 ' onClick={handlProfileShow} >Show more Profile</button>)
                }
                
            </center>
        </div>
    );
}

export default Profiles;