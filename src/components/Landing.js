import React from 'react';
import { Link } from 'react-router-dom';
import background from './../img/back3.jpg';
import blueplanet from './../img/reblueplanet.png';
import lightblueplanet from './../img/relightblueplanet.png';
import redplanet from './../img/reredplanet.png';
import redsmallplanet from './../img/reredsmallplanet.png';
import orangeplanet from './../img/orangeplanet.png';
import longstar from './../img/longstar.svg';
import star from './../img/star.svg';

const Landing = (props) => {
    return (
        <>  
            <div className="section s1">
                
                <section className="intro">
                    <div className="intro__container">
                        <div className="intro__content">
                            <div className="intro__title col-6">
                                <div className="intro__title--intro">
                                    <span className="intro--hi">Habit Tracker,</span>
                                    <div className="text--highlight">
                                        <div className="space--white-1 space--white"></div>
                                        <span className="intro--hi"> Made Fun</span>
                                    </div>
                                    <br/>
                                    <span className="intro--hi">and </span>
                                    <div className="text--highlight">
                                        <div className="space--white-2 space--white"></div>
                                        <span className="intro--hi">Productive</span>
                                    </div>
                                </div>
                                <div className="intro__title--about">
                                    <p>There's no time better than now</p>
                                </div>
                                <div className="intro__title--button">
                                    <a href="#/register" className="hoverbutton"><span>Sign up</span></a>
                                    <div className="arrow">
                                        <img src="img/arrowwhite.png" height="70" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blueplanet">
                        <img src={blueplanet} alt=""/>
                    </div>
                    <div className="lightblueplanet">
                        <img src={lightblueplanet} alt=""/>
                    </div>
                    <div className="redsmallplanet">
                        <img src={redsmallplanet} alt=""/>
                    </div>
                    <div className="redplanet">
                        <img src={redplanet} alt=""/>
                    </div>
                    <div className="orangeplanet">
                        <img src={orangeplanet} alt=""/>
                    </div>
                    <div className="longstars">
                        <img src={longstar} alt=""/>
                    </div>
                    <div className="stars">
                        <img src={star} alt=""/>
                    </div>
                    <div className="landing__background">
                        <img src={background} alt=""></img>
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Landing;