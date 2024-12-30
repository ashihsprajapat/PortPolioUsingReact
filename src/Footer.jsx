import React from 'react';
function Footer() {
    let style = { fontSize: "2rem", margin: "1rem" }
    let styleLink = { textDecoration: "none", marginLeft: "2rem" }
    return (
        <footer>
            <div className="row border-top">
                <div className="col-12 footerIcons " >
                    <center>
                        <a href="https://www.instagram.com/ashish_coder_44/profilecard/?igsh=MWZldmM4YmJhdnUwMA==" target="_blank">
                            <i className="fa-brands fa-square-instagram" style={style} ></i></a>
                        <a href="https://www.whatsapp.com/channel/0029VabVHVy1iUxeVcK5iz24"  target="_blank">
                            <i className="fa-brands fa-square-whatsapp" style={style}></i></a>
                        <a href="https://www.linkedin.com/in/ashish-prajapat-528710288/" target="_blank" ><i className="fa-brands fa-linkedin" style={style}></i></a>
                        <a href="">
                            <i className="fa-brands fa-youtube" style={style}></i>
                        </a>
                        <a href="https://t.me/Its_Ashish_prajapat" target="_blank">
                            <i className="fa-brands fa-telegram" style={style}></i>
                        </a>
                        <a href="">
                            <i className="fa-solid fa-phone " style={style}></i>
                        </a>

                    </center>
                </div>
                <div className="col-12">
                    <center>
                        <a href="/security" style={styleLink}>Security</a>
                        <a href="/privacy" style={styleLink}>Privacy</a>
                    </center>
                </div>
                <div className="col-12">
                    <center>
                        I am Ashish Prajapat .I am student of B.Tech at jagannath University.
                    </center>
                </div>
            </div>
        </footer>
    );
}

export default Footer;