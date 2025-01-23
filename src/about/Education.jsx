
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function Education() {



    return (
        <div className="container">
            <h1>Education</h1>

            <div className='col-lg-10'>

                <Accordion sx={{ backgroundColor: "rgb(231, 218, 218)" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span"><h5> College Study</h5></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>B.Tech in Computer Science <br />
                            Jagannath University, Jaipur<br />
                            Established: 2008<br />
                            Batch: 2022 - 2026<br />
                            Currently in 3rd Year | CGPA: 7.0
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: "rgb(221, 201, 201)" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span"><h5>  12<sup>th </sup>   Class</h5></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p >
                            12th Class (Science) <br />
                            GSSS Watika, Jaipur <br />
                            Passed in 2022 | Percentage: 86% | Rank: 1 <br />
                            Subjects: Physics, Chemistry, Mathematics, and Computer Science
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: "rgb(231, 218, 218)" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span"><h5>10<sup>th </sup> Class</h5></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>10th Class <br />
                            GSSS Watika, Jaipur <br />
                            Passed in 2020 <br />
                            Percentage: 81% | Rank: 3 <br />
                        </p>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}

export default Education;
