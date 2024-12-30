import React from 'react';
function Profiles() {
    let style = { textDecoration: "none" }
    return (
        <div className="container">
            <h2>My  prifie</h2>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-11 card p-4 ">
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
                <div className="col-lg-4 col-md-4 col-sm-11 card p-4 ">
                    <img src="./insta.jpg" alt="" style={{ borderRadius: "5%", width: "100%", height: "40%" }} className='instaProfile' />
                    <div className="card-body instatCard" >
                        <p><b> <i class="fa-brands fa-square-instagram" style={{ color: "red" }}></i>Instagram</b> &nbsp; &nbsp; &nbsp; <a href="https://www.instagram.com/ashish_coder_44/profilecard/?igsh=MWZldmM4YmJhdnUwMA==" target="_blank" style={style}> <i class="fa-solid fa-arrow-up-right-from-square"></i> </a></p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-11 card ">
                    <div className="card p-3 bg-black row leetcodeImage">
                        <div >
                            <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735341889/Wonderlust-DEV/rylxngk7oqsekmsehzm0.jpg" alt="" style={{ borderRadius: "5%", width: "40%", backgroundColor: "black" }} />
                        </div>
                        <div style={{ color: "white" }}>
                            <h5 >Ashish Prajpat</h5>
                            <h6>Ashish_prajapt
                                <img src="https://assets.leetcode.com/static_assets/marketing/2024-50.gif" alt="" style={{ borderRadius: "5%", width: "10%", backgroundColor: "black" }} />
                            </h6>
                            <h6>Rank &nbsp; {(282798).toLocaleString('en-IN')}</h6>
                        </div>
                    </div>
                    <div className="card-body" >
                        <p> <b> <img src="./leetcodeLogo.png" alt="" style={{ width: "2rem", backgroundColor: "black", borderRadius: "20%" }} /> Leetcode</b>
                            &nbsp; &nbsp; &nbsp;
                            <a href="https://leetcode.com/u/Ashish_prajapt/" target="_blank" style={style}>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-11 card p-3">
                    <img src="./upwork.png" alt="" style={{ borderRadius: "5%", width: "100%" }} />
                    <div className="card-body" >
                        <p><a href="" style={style}> <b><i class="fa-brands fa-square-upwork" style={{ color: "green" }}></i>upwork</b> </a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profiles;