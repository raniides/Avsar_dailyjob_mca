import React,{Fragment,useState } from 'react'
import './AboutUs.css';
import { Link } from "react-router-dom";
import { Button} from "react-bootstrap";



    const AboutUs = () => {
        const[ toggleTab,setToggle] = useState(1)
        const toggleState=(index) =>{
            setToggle(index)
        }
    return (
        <div >
        <Fragment>
            <section className="about" style={{ backgroundColor:"#C8B5FF" }}>
                <div className="row">
                    <div className="column">
                        <div className="about-img"></div>
                    </div>
                    <div className="column">
                        <div className="tabs">
                        <Link className="" to="/home">
                      <Button
                        variant="success"
                        style={{ marginLeft: "530px",marginTop:"0px" ,backgroundColor:"magenta"}}
                        size="lg"
                      >
                        {" "}
                        Home{" "}
                      </Button>
                    </Link>

                            <div className={toggleTab ===1 ?"single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(1)}>
                                <h2>About Avsar</h2>
                            </div>

                            <div className={toggleTab ===2 ?"single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(2)}
                            >
                                <h2>Skills Used</h2>
                            </div>

                            <div className={toggleTab ===3 ?"single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(3)}
                            >
                                <h2>Team Member</h2>
                            </div>

                            <div className="tab-content">

                                {/* About Content */}

                                <div className={toggleTab=== 1? "content active-content": "content"}>
                                    <h2> Our Story</h2>
                                    <p ><b>The Avsar group is a circle of courage friends who have taken the initiative to provide a better
                                    platform for daily worker related social causes. It aims to give platforms to the workers to easily 
                                    find jobs through our website.</b></p>
                                    <h4>Avsar</h4>
                                    <p><b>Avsar is a platform to the job seeker mainly the daily worker who used to stand for the whole day hoping that some people mainly
                                    may hire them to their work . Some get opportunities but some may not.S this is the right place where the worker are hired based on their ability , work and the experience.
                                    The may not need to sit whole day in search of job, they can apply in the website and can wait for the response , while waiting aty home.</b></p>
                                </div>

                                {/* skill content*/}

                                <div className={toggleTab=== 2? "content active-content": "content"}>
                                    <h2> Skills Used</h2>
                                    <p>Skills which we have used is MERN Stack development.</p>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>Mongodb</h3>
                                                <div className="progress">
                                                    <div className="progress-bar Developer">
                                                        <span>80%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>Express JS</h3>
                                                <div className="progress">
                                                    <div className="progress-bar Designer">
                                                        <span>90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>React JS</h3>
                                                <div className="progress">
                                                    <div className="progress-bar JavaScript">
                                                        <span>85%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skills-row">
                                        <div className="skills-column">
                                            <div className="progress-wrap">
                                                <h3>Node Js</h3>
                                                <div className="progress">
                                                    <div className="progress-bar PhotoShop">
                                                        <span>88%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Experience Content */}

                                <div className={toggleTab=== 3? "content active-content": "content"}>
                                    <div className="exp-column">
                                        <h3>Akanksha Desai</h3>
                                        <span>2317</span>
                                        <p>**********************</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Priyamvada Maurya</h3>
                                        <span>2327</span>
                                        <p>**********************</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Muziba Shaikh</h3>
                                        <span>2341</span>
                                        <p>**********************</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Khushi Zalmi</h3>
                                        <span>2346</span>
                                        <p>***********************</p>
                                    </div>

                                    <div className="exp-column">
                                        <h3>Yutika Chari</h3>
                                        <span>2349</span>
                                        <p>***********************</p>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        </div>
        
 )
}
export default AboutUs;