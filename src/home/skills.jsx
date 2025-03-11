import JavascriptIcon from '@mui/icons-material/Javascript';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const date = new Date(2023, 1, 2);
const today = new Date();
const diff = date - today;
const finalDiff = Math.floor(diff / (1000 * 365 * 60 * 60 * 24)) < 0 ? Math.floor(diff / (1000 * 365 * 60 * 60 * 24)) * -1 : Math.floor(diff / (1000 * 365 * 60 * 60 * 24));

const dateReact = new Date(2024, 6, 4);
const diffRct = dateReact - today;
const mernDiff = Math.floor(diffRct / (1000 * 365 * 60 * 60 * 24)) < 0 ? Math.floor(diffRct / (1000 * 365 * 60 * 60 * 24)) * -1 : Math.floor(diffRct / (1000 * 365 * 60 * 60 * 24));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


function Skills() {
    let styleFont = { fontSize: "2.5em", color: "black" }
    let styleSkill = { display: "flex", }
    let [skills, setSkills] = React.useState([
        {
            show: false,
        },
        {
            show: false,
        },
        {
            show: false,
        },
        {
            show: false,
        },
        {
            show: false,
        },
        {
            show: false,
        },
    ])

    let handleShowSkill = (idx) => {
        setSkills((prevSkills) => {
            return prevSkills.map((skill, index) => {
                if (index === idx) {
                    return { ...skill, show: true };  // Set the show property of the selected skill to true
                } else {
                    return { ...skill, show: false };  // Set the show property of all other skills to false
                }
            });
        });
    }

    return (
        <>
            <div className="container col-lg-5 col-md-5 col-sm-11  p-5 m-1 ">
                <h1>My Skills</h1>
                <div className="skillscard row" >
                    <Box onMouseEnter={() => handleShowSkill(1)} className="lg-col-6" sx={{ minWidth: 275 }}  >
                        <Card variant="outlined"  >
                            <React.Fragment>
                                <CardContent>

                                    <Typography variant="h5" style={{ display: "flex" }} component="div">
                                    <i className="fa-brands fa-js"></i> &nbsp;
                                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>JavaScript</Typography>
                                    </Typography>
                                    {skills[1].show == true &&
                                        <Typography variant="body2">
                                            <Button variant="text">{finalDiff} year's of expreience</Button>
                                        </Typography>}
                                </CardContent>

                            </React.Fragment>
                        </Card>
                    </Box>
                    <Box onMouseEnter={() => handleShowSkill(2)} className="lg-col-6" sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>

                                    <Typography variant="h5" style={{ display: "flex" }} component="div">
                                        <i className="fa-brands fa-java"></i>&nbsp;
                                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Java</Typography>
                                    </Typography>
                                    {skills[2].show == true &&
                                        <Button variant="text">
                                            <Typography variant="body2">
                                                {finalDiff} year's of expreience
                                            </Typography></Button>}
                                </CardContent>

                            </React.Fragment>
                        </Card>
                    </Box>
                    <Box onMouseEnter={() => handleShowSkill(3)} className="lg-col-6" sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>

                                    <Typography variant="h5" style={{ display: "flex" }} component="div">
                                        <i className="fa-brands fa-node"></i> &nbsp;
                                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Node.js</Typography>
                                    </Typography>
                                    {skills[3].show == true &&
                                        <Button variant="text">
                                            <Typography variant="body2">
                                                {finalDiff} year's of expreience
                                            </Typography></Button>
                                    }
                                </CardContent>

                            </React.Fragment>
                        </Card>
                    </Box>
                    <Box onMouseEnter={() => handleShowSkill(4)} className="lg-col-6" sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>

                                    <Typography variant="h5" style={{ display: "flex" }} component="div">
                                        <i className="fa-brands fa-react"></i> &nbsp;
                                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>REACT </Typography>

                                    </Typography>
                                    {skills[4].show == true &&
                                        <Button variant="text">
                                            <Typography variant="body2">

                                                {mernDiff} year's of expreience
                                            </Typography>
                                        </Button>}
                                </CardContent>

                            </React.Fragment>
                        </Card>
                    </Box>
                    <Box onMouseEnter={() => handleShowSkill(5)} className="lg-col-6" sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <React.Fragment>
                                <CardContent>

                                    <Typography variant="h5" style={{ display: "flex" }} component="div">
                                        <img style={{ width: "3rem", borderRadius: "0.3rem" }} src="https://tse1.mm.bing.net/th?id=OIP.g_dIHEDos64S2RHj18d--gHaEK&pid=Api&P=0&h=180" alt="" /> &nbsp;
                                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>MERN </Typography>

                                    </Typography>
                                    {skills[5].show == true &&
                                        <Button variant="text">
                                            <Typography variant="body2">
                                                {mernDiff} year's of expreience
                                            </Typography>
                                        </Button>}
                                </CardContent>

                            </React.Fragment>
                        </Card>
                    </Box>

                </div >




            </div >
        </>
    );
}

export default Skills;