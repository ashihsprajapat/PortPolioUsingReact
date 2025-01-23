function Skills() {
    let styleFont = { fontSize: "2.5em", color: "black" }
    let styleSkill={display:"flex",}
    return (
        <>
            <div className="container col-lg-5 col-md-5 col-sm-11  p-5 m-1 ">
                <h1>Skills</h1>
                <div className="row">
                    <div style={styleSkill} className='skillSection' >
                        <i style={styleFont} className="fa-brands fa-js skillIcon" ></i>
                        <p className='skillValue' >  90%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} className="fa-brands fa-html5"></i>
                        <p>80%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} className="fa-brands fa-react"></i>
                        <p>60%</p>
                    </div >
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} className="fa-brands fa-node"></i>
                        <p>80%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} className="fa-brands fa-java"></i>
                        <p>80%</p>
                    </div>
                    <div style={styleSkill} className='skillSection'>
                        <i style={styleFont} className="fa-solid fa-database"></i>
                        <p>60%</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;