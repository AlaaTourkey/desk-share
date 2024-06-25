import React, { useEffect } from 'react';
import styles from './about.module.css';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import dotsmoke from './about-images/dotsmoke.png';
import video from './about-images/video.jpg';
import cowork1 from './about-images/cowork1.png';
import cowork2 from './about-images/cowork2.png';
export default function About() {

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow', // Class name for the elements to be animated
      animateClass: 'animated', // Animation CSS class (default is animated)
      offset: 0, // Viewport offset
      mobile: true, // Enable animations on mobile devices
      live: true // Live mode: updates the list of elements to animate when new ones are added
    });
    wow.init();
  }, []);

  return (
    <div>
      <div className={styles['header']}>
        <div className={styles['header-caption']}>
          <h2 className='fw-bold'> <span className={`${styles.span}`}> About </span> US</h2>
          <p className={styles['cap']}>At Desk Share, we are transforming the way people and businesses find and 
utilize workspaces. Our mission is to bridge the gap between workspace 
providers and users, offering a seamless and efficient platform that caters to the 
dynamic needs of professionals in today's evolving work environment.</p>
        </div>
      </div>

      {/* ======================================================== */}
      <section className='co-work my-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 position-relative my-5">
              <div className="">
                <div className="position-relative">
                  {/* <img className={`${styles.one} w-75 pt-3 one`} src={cowork2} alt="cowork2" /> */}
                  <img className={`${styles.one} w-75 pt-3 one  wow animate__bounceInLeft`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s" src={cowork2} alt="cowork1" />

                  <div className={`${styles.counter} position-absolute wow animate__bounceInUp`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay="0.5s">
                    <p className='fs-4 m-0'>99 <sup>%</sup></p>
                    <span className={styles.smallText}>Customer Suka</span>
                  </div>
                </div>
                {/* <img className={`${styles.two} w-50 position-absolute two`} src={cowork1} alt="cowork1" /> */}
                <img className={`${styles.two} w-50 position-absolute two wow animate__bounceInRight`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s" src={cowork1} alt="cowork2" />

              </div>
            </div>
            <div className="col-md-6 desk">
              <div className="my-5 mx-3">
                <div className="d-flex justify-content-center">
                  <img src={dotsmoke} alt="" />
                </div>
                <h6 className={styles.Deskshare}>Deskshare</h6>
                <h2 className={`${styles.mainColor} ${styles.fontSize}`}>Co-work like never before</h2>
                <p className={`${styles.mainColor} ${styles.font} ${styles.smallText} my-3}`}>Ignite your productivity and level up the way you #GetThingsDone with the biggest variety of on-demand workspaces in 170+ cities bookable by the hour, day, month, or year!</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className={`p-2 text-white ${styles.bgMain} ${styles.font} ${styles.btn} mt-5`}> + Download The App </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      <div className={styles['mission']}>
        <div className={styles['label']}>
          <p className={styles.label2}>Why US?</p>
          <img src={dotsmoke} alt="dotsmoke" className={styles.dotsmoke} />
        </div>
        <div className={styles.h2mission}>
          <h2> Our Vision & Mission</h2>
        </div>
        <p className={styles.p1mission}>Our vision is to create a workplace ecosystem where collaboration is not only 
encouraged but seamlessly integrated into professional interactions. We aim to 
empower individuals and startups with a variety of flexible workspace solutions, 
promoting an environment reminiscent of collaborative peer-to-peer engagement.</p>
        <div className='container'>
          <div className="row ">
            <div className={`col-md-6  ${styles.vission} `} >
              <div className={`py-5 ${styles.inner}`}>
                <div className="div"></div>
                <h4>Why Choose Desk Share?</h4>
                <hr />
                <div className="missioncap d-flex  align-items-center">
                  <h2 className={styles.number}>01</h2>
                  <div className={styles.iconbox}>
                    <h4 >Explore</h4>
                    <h6> Discover the largest variety of workspaces near you, tailored to meet 
                    your specific needs.</h6>
                  </div>
                </div>
                <div className="missioncap d-flex  align-items-center">
                  <h2 className={styles.number}>02</h2>
                  <div className={styles.iconbox}>
                    <h4>Compare</h4>
                    <h6> Effortlessly compare different spaces to find the perfect fit for your 
                    requirements.</h6>
                  </div>
                </div>
                <div className="missioncap d-flex  align-items-center">
                  <h2 className={styles.number}>03</h2>
                  <div className={styles.iconbox}>
                    <h4>Book</h4>
                    <h6 >Enjoy flexible plans that allow you to book spaces for as little as an hour 
                    or as long as a year.</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-6 ${styles.vission} `} >
              <div className={`${styles.inner} ${styles.vission1}`}>
                <h5>“ Our Story
                “</h5>
                <p> The idea for Desk Share was born out of personal struggles in finding suitable 
places to work or study. Despite the increasing popularity of coworking spaces, 
we realized that discovering and accessing them could be a daunting task. This 
frustration led to the creation of Desk Share, a solution designed to simplify the 
process of finding and booking workspaces.</p>
                <p> Join us in redefining the way you work. With Desk Share, you have the freedom to 
                choose the perfect workspace that suits your needs, ensuring you can.</p>
                <p>#GetThingsDone efficiently and effectively. Whether you're an individual looking 
for a quiet spot to work or a startup in need of a collaborative environment, Desk 
Share is here to support you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================================================================================================================ */}
      <div className={styles.choice}>
        {/* <img src={dotsmoke} className={styles.dotsmoke2} alt="" srcSet="" /> */}
        <div className={`py-5 ${styles.choicelabel}`}>
          <h3 className={styles.textlarge}>How to Join - Booking</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>01</h2>
                <h6 className={styles.boxh6}>Search for Workspaces</h6>
                <p className={styles.boxp}> Enter your location and other preferences in the search bar.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>02</h2>
                <h6 className={styles.boxh6}>Compare Options</h6>
                <p className={styles.boxp}> Select multiple workspaces to compare their features side-by-side.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>03</h2>
                <h6 className={styles.boxh6}>Booking</h6>
                <p className={styles.boxp}>Choose your desired booking period – from a single hour to a full year.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>04</h2>
                <h6 className={styles.boxh6}>Manage Your Bookings</h6>
                <p className={styles.boxp}>Access your dashboard to view all your current and past bookings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================================================================== */}
      <div className={styles.stepwork}>
        <div className={styles.smoke}>
          <img src={dotsmoke} className={styles.dotsmoke3} alt="" srcSet="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <p className={styles.p5}>Value Proposition for Desk Share</p>
              <h3 className={styles.hstepwork}>Desk Share: Revolutionizing Workspace Dynamics</h3>
              <div className="row">
                <div className="col-md-6  wow animate__zoomIn" data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s">
                  <img src={video} className={styles.video} alt="" />
                </div>
                <div className="col-md-6  wow animate__zoomIn pt-5" data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s">
                  <div className={`iconvideo ${styles.iconvideo} mb-4`}>
                    <i className={`fa-solid fa-shield-halved d-inline ${styles.iconsize}`}></i>
                    <div className={`div d-inline-block ${styles.div}`}>
                      <h6 className={styles.iconh6}>Tailored Workspace Solutions</h6>
                    </div>
                  </div>
                  <div className={`iconvideo ${styles.iconvideo} mb-4`}>
                    <i className={`fa-solid fa-list d-inline ${styles.iconsize}`}></i>
                    <div className={`div d-inline-block ${styles.div}`}>
                      <h6 className={styles.iconh6}> Enhanced Collaboration and Engagement
                      </h6>
                    </div>
                  </div>
                  <div className={`iconvideo ${styles.iconvideo} mb-4`}>
                    <i className={`fa-solid fa-comments d-inline ${styles.iconsize}`}></i>
                    <div className={`div d-inline-block ${styles.div}`}>
                      <h6 className={styles.iconh6}>Empowerment through Flexibility</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-lg-3 col-12 my-3 ${styles.itemss} wow animate__zoomIn`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s">
              <i className={`fa-solid fa-quote-left ${styles.ICONN}`}></i>
              <h5 className={styles.h5text}>“ Our Mission “</h5>
              <p className={styles.plist}>Our mission is to enhance productivity and collaboration by providing a 
comprehensive platform that connects users with a wide variety of workspaces. 
We offer flexible booking options that cater to the diverse needs of professionals, 
from hourly to yearly plans. By facilitating direct and meaningful interactions 
between workspace providers and users, we foster a dynamic and engaging 
professional community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


