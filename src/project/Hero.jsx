function Hero() {
    let imageStye={borderRadius:"2rem"};
    let projectSize="col-lg-6 col-sm-12 col-md-6 p-3";
    return (
        <>
            <div className="row" >
                <div className={projectSize}>
                    <img style={imageStye} className="col-12" src="https://cms.frontendzone.com/wp-content/uploads/2023/03/mern-stack-development-services.jpg" alt="" />
                </div>
                <div className={`${projectSize} pt-5`}>
                    <h1 >Projects</h1>
                    <p style={{fontSize:"1.1rem"}}>My expertise lies in building dynamic and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I focus on developing end-to-end solutions with modern, responsive user interfaces and robust backend architecture. My projects highlight seamless integration of front-end and back-end technologies, delivering optimized and user-friendly experiences. Below are some of my MERN stack development projects, showcasing real-world applications built with the latest tools and technologies.</p>
                </div>

            </div>

        </>
    );
}

export default Hero;