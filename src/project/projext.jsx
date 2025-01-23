import Hero from "./Hero";



function ProjectPage() {
   // let styleImag = { border: "1px solid black", borderRadius: "0.5rem" };
    let styleLink = { textDecoration: "none" };
    return (
        <div className="container">
            
            <Hero/>
            <div className="row">
                <div className="col-lg-5 col-ms-11 col-md-6 mt-3 mb-2  ">
                    <div className="card projectCard ">
                        {/* <img style={styleImag} src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735265887/Wonderlust-DEV/m236z7oedz4o81bvqfbq.png" alt="" /> */}
                        <div className="card-body row">
                            <h4> <b> Airbnb  (Full-Stack Web Application)</b> </h4>
                            <p>
                               
                                This is a full-stack Airbnb clone built using the MVC architecture. The      front-end is developed using EJS ,while the back-end is powered by Node.js and Express to handle HTTP requests and manage the application logic.
                                <a href="https://airbnb-project-236a.onrender.com/" target='_blank' style={styleLink}>Vsite website &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                                <br />
                                 
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-ms-11 col-md-6  mt-3 mb-2 ">
                    <div className="card projectCard">
                        {/* <img style={styleImag} src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735266152/Wonderlust-DEV/kuk16dl4xs3eg6j95ati.png" alt="" /> */}
                        <div className="card-body">
                            <h4><b>TradeFlow (MERN Stack)</b></h4>
                            <p>
                                TradeFlow is a modern stock trading platform built using the MERN stack.The application offers real-time stock price updates, enabling users to manage their portfolios efficiently. With secure user authentication powered by JWT,
                                <a href="" style={styleLink}>Vsite website &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-ms-11 col-md-6  mt-3 mb-2 ">
                    <div className="card projectCard">
                        {/* <img style={styleImag} src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735266437/Wonderlust-DEV/tglkjwprcqkudt8pk8jq.png" alt="" /> */}
                        <div className="card-body">
                            <h4><b>Portfolio Website (Built with React)</b></h4>
                            <p>
                                My Portfolio Website showcases a collection of my projects and skills, built using React to provide a dynamic and interactive experience.The site includes sections for project details, technologies used, and a contact form, all designed to offer an engaging user experience.
                                <a href="" style={styleLink}>Vsite website &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-ms-11 col-md-6  mt-3 mb-5 ">
                    <div className="card projectCard">
                        {/* <img style={styleImag} src="https://res.cloudinary.com/dzekonjpb/image/upload/v1735266648/Wonderlust-DEV/ylcuidhbqefwthyavxbl.png" alt="" /> */}
                        <div className="card-body">
                            <h4><b>ProgressPulse</b> </h4>
                            <p>
                            ProgressPulse is a task management application designed to help users track their progress and achieve their goals. The frontend, developed with EJS, is enhanced with an interactive progress graph that visually displays task completion and overall progress, providing users with a clear view of their achievements.
                            <a href="" style={styleLink}>Vsite website &nbsp; <i className="fa-solid fa-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;