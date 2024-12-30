import React from 'react';
function Massage() {
    let styleFont = { fontSize: "2.5em", color: "black" }
    let styleSkill={display:"flex",}
    return (
        <div className="container row">
            <div className="container col-lg-5 col-md-6 col-sm-11  p-5 m-1 ">
                <h1>Skills</h1>
                <div className="row">
                    <div style={styleSkill} className='skillSection' >
                        <i style={styleFont} className="fa-brands fa-js skillIcon" ></i>
                        <p className='skillValue' >  90%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} class="fa-brands fa-html5"></i>
                        <p>80%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} class="fa-brands fa-react"></i>
                        <p>60%</p>
                    </div >
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} class="fa-brands fa-node"></i>
                        <p>80%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} class="fa-brands fa-java"></i>
                        <p>80%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} class="fa-solid fa-database"></i>
                        <p>60%</p>
                    </div>
                </div>
            </div>
            <div className="container col-lg-6 mt-5 mb-5  p-2 col-md-6 col-sm-11 ">
                <h4>Can drop a Message</h4>
                <div className='col-lg-12 col-sm-10'>
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-sm-9 col-lg-11 col-md-8">
                            <label for="validationCustom01" class="form-label">Email</label>
                            <input type="email" class="form-control " id="validationCustom01" required />
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="col-sm-9 col-lg-11 col-md-8">
                            <label for="validationCustomUsername" class="form-label">Username</label>
                            <textarea type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required rows={4} />
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label class="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Massage;