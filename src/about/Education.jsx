import React, { useState } from 'react';
function Education() {
    let [showEducation, setShowEducation] = useState(0);
    let [showEdu, setShowEdu] = useState([
        {
            Index: 0,
            show: false,
        },
        {
            Index: 1,
            show: false,
        },
        {
            Index: 2,
            show: false,
        },
        {
            Index: 3,
            show: false,
        },
    ])
    function handlShowEducation(index) {
        setShowEdu((prvenet) =>
            prvenet.map((item) => {
                return item.Index === index ? { ...item, show: !item.show } : { ...item }
            })
        )
    }
    return (
        <div className="container">
            <h1>Education</h1>
            <div className="row mt-5 mb-5 ">
                <div className='row col-12'>
                    <div className="col-4 educationSection " onClick={() => handlShowEducation(1)} >
                        <button className='btn btn-outline-primary fs-5' >
                            College Study &nbsp;
                            {
                                showEdu[1].show ? (<i class="fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)
                            }
                        </button>

                    </div>
                    <div className="col-4 educationSection " onClick={() => handlShowEducation(2)} >
                        <button className='btn btn-outline-primary fs-5'>
                            12<sup>th </sup>   Class &nbsp;
                            {
                                showEdu[2].show ? (<i class="fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)
                            }
                        </button>
                    </div>
                    <div className="col-4 educationSection " onClick={() => handlShowEducation(3)}>
                        <button className='btn btn-outline-primary fs-5'>
                            10<sup>th </sup> Class&nbsp;
                            {
                                showEdu[3].show ? (<i class="fa-solid fa-chevron-up"></i>) : (<i className="fa-solid fa-chevron-down"></i>)
                            }
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-9  pt-4 row m-1 offset-2">
                    <div className='row' >
                        {
                            showEdu[1].show == true && <div className='card p-3 col-lg-5 col-sm-11 col-md-5 m-1' >
                                <p>B.Tech in Computer Science <br />
                                    Jagannath University, Jaipur<br />
                                    Established: 2008<br />
                                    Batch: 2022 - 2026<br />
                                    Currently in 3rd Year | CGPA: 7.0
                                </p>
                            </div>
                        }
                        {
                            showEdu[2].show == true && <div className='card p-3 col-lg-5 col-sm-11 col-md-5 m-1 '>
                                <p >
                                    12th Class (Science) <br />
                                    GSSS Watika, Jaipur <br />
                                    Passed in 2022 | Percentage: 86% | Rank: 1 <br />
                                    Subjects: Physics, Chemistry, Mathematics, and Computer Science
                                </p>
                            </div>
                        }
                        {
                            showEdu[3].show == true && <div className='card p-3 col-lg-5 col-sm-11 col-md-5'>
                                <p>10th Class <br />
                                    GSSS Watika, Jaipur <br />
                                    Passed in 2020 <br />
                                    Percentage: 81% | Rank: 3 <br />
                                </p>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Education;