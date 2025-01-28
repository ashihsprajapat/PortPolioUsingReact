//import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState,useEffect } from 'react';



function Profiles() {
    let follower = 1161;
    
    let style = { textDecoration: "none" }
    
    let [count, setCount] = useState(1);
    let [needLeetData, setNeedData] = useState({
        status: "suceess",

        totalSolved: 199,
        easySolved: 99,
        mediumSolved: 121,
        hardSolved: 32,
        ranking: 12333,
        acceptanceRate: 60.70,
    });
    let getLeetCodeData = async () => {
        try {
            let leetcodeData = await fetch("https://leetcode-stats-api.herokuapp.com/Ashish_prajapt");
            if (!leetcodeData.ok) {
                throw new Error("Network response was not ok");
            }
            let data = await leetcodeData.json();
          //  console.log(data)
            needLeetData = {
                status: data.status,
                totalSolved: data.totalSolved,
                easySolved: data.easySolved,
                mediumSolved: data.mediumSolved,
                hardSolved: data.hardSolved,
                ranking: data.ranking,
                acceptanceRate: data.acceptanceRate,
            };
            //console.log(needLeetData, count);

            return needLeetData;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (count < 2) {
            const fetchData = async () => {
                const LeetCodeInfo = await getLeetCodeData();
                if (LeetCodeInfo) {
                    setNeedData(LeetCodeInfo);
                    setCount(prev => prev + 1);
                }
            };
            fetchData();
        }
    }, [count]);

   


    return (
        <div className="container mt-5 mb-5 ">
            <h2>My  profiles</h2>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ maxWidth: '100%', marginTop: 1 }}>
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
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ maxWidth: '100%', marginTop: 2 }}>
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
                                Rank : {needLeetData.ranking.toLocaleString('en-IN')} <br />
                                status: {needLeetData.status.toLocaleString('en-IN')} <br />
                                acceptanceRate : {needLeetData.acceptanceRate.toLocaleString('en-IN')} <br />
                                Total Question Solve :{needLeetData.totalSolved.toLocaleString('en-IN')} 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href="https://leetcode.com/u/Ashish_prajapt/" target="_blank" style={style}><Button size="small">Show More</Button></a>

                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ maxWidth: '100%', marginTop: 2 }}>
                        <CardMedia
                            sx={{ height: 140, }}
                            image="https://tse2.mm.bing.net/th?id=OIP.WlDRD25r-gHMubq52gEAXgHaDt&pid=Api&P=0&h=180"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                                <GitHubIcon />
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
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card sx={{ maxWidth: '100%', marginTop: 2 }}>
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
                        </CardActions>
                    </Card>


                </Grid>

            </Grid>


        
        </div>
    );
}

export default Profiles;