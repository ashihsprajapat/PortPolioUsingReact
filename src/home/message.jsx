import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import Skills from './skills';
function Massage() {
    const [value, setValue] = React.useState(2);
    const [formInfo, setFormInfo] = React.useState({
        mail: "",
        msg: "",
        value: 2,
    })

    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");



    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(mail, message, value)
        setMail("");
        setMessage("");
        setValue(2);
    }

    return (
        <div className="container row">
            <Skills />

            <div className="container col-lg-6 mt-5 mb-5  p-2 col-md-5 col-sm-12 ">
                <form action="" onSubmit={handleSubmit}>
                    <h4>Can drop a Message</h4>
                    <TextField id="outlined-basic" label="Mail" variant="outlined" required value={mail} onChange={(e) => { return setMail(e.target.value) }} /> <br /> <br />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Message"
                        multiline
                        minRows={9}
                        value={message}

                        onChange={(e) => { setMessage(e.target.value) }}
                        required
                    /> <br />
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Typography component="legend">Controlled</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>

                    <Button variant="contained" color="success" type='submit' size='small'>
                        Send
                    </Button>
                </form>
            </div>



        </div>
    );
}

export default Massage;