import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';



function Profiles() {
    let follower=1161;
    let rank= 225386;
    let contestRating=1418;
    let totalQueSolve=374;
    let style = { textDecoration: "none" }
    // let [proFileShow, setProFileShow] = useState(false);

    // let handlProfileShow = () => {
    //     setProFileShow((preve) => !preve);
    // }
    return (
        <div className="container mt-5 mb-5 ">
            <h2>My  profiles</h2>
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ maxWidth: '100%',marginTop:1 }}>
                        <CardMedia
                            sx={{ height: 140, objectFit: 'cover' }}
                            image="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265445/Wonderlust-DEV/ntfoizxfq7kl1fjudvdk.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <i className="fa-brands fa-linkedin" style={{ color: 'blue' }}></i>
                                Linkedin
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            MERN Stack Web developer | DSA with Java | SQL | MongoDB | C |Oops| learning java full stack development <br />
                            Followers-{follower.toLocaleString('en-IN')}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a
                                href="https://www.linkedin.com/in/ashish-prajapat-528710288/"
                                target="_blank"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button size="small">Show More</Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card sx={{maxWidth: '100%',marginTop:2  }}>
                        <CardMedia
                            sx={{ height: 140, }}
                            image="https://tse1.mm.bing.net/th?id=OIP.CsDKVMiqzDgRVrIrDa9_JwHaEB&pid=Api&P=0&h=180"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <img src="./leetcodeLogo.png" alt="" style={{ width: "1.3rem", backgroundColor: "black", borderRadius: "20%" }} />

                                Leetcode
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Id : Ashish_prajapt, <br />
                                Rank : {rank.toLocaleString('en-IN')} <br />
                                Contest Rating : {contestRating.toLocaleString('en-IN')} <br />
                                Total Question Solve : {totalQueSolve.toLocaleString('en-IN')}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://leetcode.com/u/Ashish_prajapt/" target="_blank" style={style}><Button size="small">Show More</Button></a>

                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: '100%',marginTop:2 }}>
                        <CardMedia
                            sx={{ height: 140, }}
                            image="https://tse2.mm.bing.net/th?id=OIP.WlDRD25r-gHMubq52gEAXgHaDt&pid=Api&P=0&h=180"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               
                                <GitHubIcon/>
                                Github
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Id : ashihsprajapat, <br />
                                My all project public on GitHub account with documentation.
                                daily to check and use github for more new  Development  in my project
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://github.com/ashihsprajapat" target="_blank" style={style}><Button size="small">Show More</Button></a>

                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>

                    <Card sx={{maxWidth: '100%',marginTop:2  }}>
                        <CardMedia
                            sx={{ height: 140, }}
                            image="https://tse1.mm.bing.net/th?id=OIP.Kt8vROJJC_a7xz_CcYwkjQHaE7&pid=Api&P=0&h=180"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            <i className="fa-brands fa-square-upwork" style={{ color: "green" }}></i>upwork
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            MERN Stack Web Developer . Full Stack Web Developer. Leetcode CP.  <br />
                                I am a Freelencer in my college journy. Seeking some work on upwork.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://www.upwork.com/freelancers/~01eb9d13384254f1ea" target="_blank" style={style}><Button size="small">Show More</Button></a>

                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>

                    
                </Grid>
            </Grid>


            {/* <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 card p-4 mt-3 ">
                    <img src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265445/Wonderlust-DEV/ntfoizxfq7kl1fjudvdk.jpg" alt="" style={{ borderRadius: "5%" }} />
                    <div className="card-body">
                        <p>

                            <b>
                                <i className="fa-brands fa-linkedin" style={{ color: "blue" }}>
                                </i>Linkedin
                            </b>&nbsp; &nbsp; &nbsp;
                            <a href="https://www.linkedin.com/in/ashish-prajapat-528710288/" target="_blank" style={style}>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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
                                <i className="fa-solid fa-arrow-up-right-from-square"></i> </a>
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
                            <p><b> <i className="fa-brands fa-square-instagram" style={{ color: "red" }}></i>Instagram</b> &nbsp; &nbsp; &nbsp; <a href="https://www.instagram.com/ashish_coder_44/profilecard/?igsh=MWZldmM4YmJhdnUwMA==" target="_blank" style={style}> <i className="fa-solid fa-arrow-up-right-from-square"></i> </a></p>
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
                            <p><b><i className="fa-brands fa-square-upwork" style={{ color: "green" }}></i>upwork</b><a href="https://www.upwork.com/freelancers/~01eb9d13384254f1ea" target='_blank' style={style}>  <i className="fa-solid fa-arrow-up-right-from-square"></i> </a></p>
                        </div>
                    </div>
                </div>

            }
            <center>
                {
                    proFileShow ? (<button className='btn btn-outline-info mt-5 ' onClick={handlProfileShow} >Show Less</button>) : (<button className='btn btn-outline-info mt-5 ' onClick={handlProfileShow} >Show more Profile</button>)
                }

            </center> */}
        </div>
    );
}

export default Profiles;