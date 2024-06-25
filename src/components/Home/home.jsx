import React, { useEffect } from 'react'
import styles from './home.module.css';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import cowork1 from '../../home images/cowork1.png';
import cowork2 from '../../home images/cowork2.png';
import dots from '../../home images/dots.png';
import phone1 from '../../home images/phone1.png'
import phone2 from '../../home images/phone2.png'
import photo3 from '../../home images/two.png'
import photo4 from '../../home images/photoSec2.png'
import gallery1 from '../../home images/gallery1.png'
import gallery2 from '../../home images/gallery2.png'
import gallery3 from '../../home images/Rectangle 7.png'
import gallery4 from '../../home images/gallery4.png'
import gallery5 from '../../home images/gallery5.png'
import gallery6 from '../../home images/gallery6.png'



function Home() {
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
    <>
      <div className='home text-white'>
        {/* header section */}
        <section className="">
          <div className="pb-5 ">
            <div className={`${styles.header} position-relative `}>
              <div className=" w-100 ">
                <div className={`${styles.headInfo} w-75  p-1`}>
                  <h3 className='fs-2 w-50'>Flexible workspace solutions, simplified</h3>
                  <p className={`${styles.font} ${styles.secondColor} w-50 fw-bold my-1 my-md-3 `}>Elevate work and productivity with on-demand workspaces around the globe.</p>
                  <button className={`p-2 text-white ${styles.bgMain} ${styles.font} ${styles.btn} mt-5`}> Download The App </button>
                </div>
                <div className="">
                  <img className={`${styles.phone1} vibrate-1  position-absolute`} src={phone1} alt="" />
                  <img className={`${styles.phone2} vibrate-1 position-absolute`} src={phone2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* section 2 */}
        <section>
          <div className="secTwo my-5 py-5  ">
            <div className="">
              <div className="info container my-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="">
                      <p className={`${styles.Deskshare} ${styles.lightColor}`}>Layanan Kami</p>
                      <h2 className={`${styles.secondColor}`}>Flexible Workspace Rental <br /> and Business Setup.</h2>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-end ">
                    <div className={`${styles.Deskshare} ${styles.lightColor} d-flex align-items-baseline`}>
                      <p>About Us page </p>
                      <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row gy-1 d-flex align-items-center">
                  <div className=" col-6 col-lg-3">
                    <div className={`${styles.font} ${styles.bgMain} ${styles.smallText} ${styles.white50} w-100 h-100 p-3 p-md-  rounded-4`}>
                      <i className="fa-solid fa-quote-left fs-3 mb-2"></i><br />
                      <em >Join the global workspaces network and reach 250,000+ users worldwide. Boost your space. Get more bookings. Manage it seamlessly.</em>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="imgInfo rounded wow animate__fadeInUp" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                      <img className='w-100' src={cowork1} alt="" />
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="imgInfo rounded wow animate__fadeInUp" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".6s">
                      <img className='w-100' src={photo3} alt="" />
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="imgInfo rounded wow animate__fadeInUp" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".7s">
                      <img className='w-100' src={photo4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* co-work section */}
        <section className={`${styles.coWork} py-5 my-5`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 position-relative my-5">
                <div className=" ">
                  <div className="position-relative ">
                    <img className={`${styles.one} w-75 pt-3 one  wow animate__bounceInLeft`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s" src={cowork1} alt="cowork1" />
                    <div className={`${styles.counter} position-absolute wow animate__bounceInUp`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay="0.5s">
                      <p className='fs-4 m-0'>99 <sup>%</sup></p>
                      <span className={styles.smallText} >Customer Suka</span>
                    </div>
                  </div>

                  <img className={`${styles.two} w-50 position-absolute two wow animate__bounceInRight`} data-wow-iteration="1" data-wow-duration="2s" data-wow-delay=".5s" src={cowork2} alt="cowork2" />
                </div>
              </div>
              <div className=" col-md-6 desk ">
                <div className=" my-5 mx-3 ">
                  <div className="d-flex justify-content-center ">
                    <img src={dots} alt="" />
                  </div>
                  <h6 className={`${styles.Deskshare}`}>Deskshare</h6>
                  <h2 className={` ${styles.fontSize}`}>Co-work like never before</h2>
                  <p className={` ${styles.font} ${styles.smallText} my-3`}>Ignite your productivity and level up the way you #GetThingsDone with the biggest variety of on-demand workspaces in 170+ cities bookable by the hour, day, month or year!</p>
                  <div className="d-flex justify-content-center align-items-center ">
                    <button className={`p-2 text-white ${styles.bgsecond} ${styles.font} ${styles.btn} mt-5`}> + Download The App </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why  choics us  */}
        <section className='choseUs my-5 py-5'>
          <div className="container">
            <div className="head">
              <p className={`${styles.Deskshare} ${styles.lightColor}`}>Layanan Kami</p>
              <h2 className={`${styles.secondColor}`}>Why  choics us ?</h2>
            </div>
            <div className="container mt-4">
              <div className="row g-3">
                <div className="col-md-4 ">
                  <div className={`${styles.item} item text-center p-4 rounded-4`}>
                    <i className={`${styles.secondColor} fa-solid fa-compass-drafting fs-4`}></i>
                    <h3 className='my-3'>1. Explore</h3>
                    <p>The biggest variety of workspaces near you</p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className={`${styles.item} item text-center p-4 rounded-4`}>
                    <i className={`${styles.secondColor} fa-solid fa-home fs-4`}></i>
                    <h3>2. Compare</h3>
                    <p>Between spaces effortlessly to find the space that suits your needs</p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className={`${styles.item} item text-center p-4 rounded-4`}>
                    <i className={`${styles.secondColor} fa-solid fa-paint-roller fs-4`}></i>
                    <h3>3. Book</h3>
                    <p>Flexible plans with the duration you need from a single hour to a year!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-center mt-5 ">
              <span className={`${styles.Deskshare} `}>Know more about us here</span>
              <span className={`${styles.Deskshare} ${styles.lightColor} ms-1`}> About Us page <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i></span>
            </div>
          </div>
        </section>

        {/* gallery */}
        <section className={`${styles.bgMain} my-5`}>
          <div className="container py-5">
            <div className="head my-3 text-center d-flex justify-content-evenly">
              <div className="">
                <h6>Flexible workspace solutions, simplified</h6>
                <h2>Explore more about our solutions</h2>
              </div>
              <div className="">
                <img src={dots} alt="" />
              </div>
            </div>
            <div className={`${styles.gallery} container w-75`}>
              <div className="row g-2 ">
                <div className="col-5  item wow animate__fadeInTopLeft" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className='w-100   ' src={gallery1} alt="" />
                </div>
                <div className="col-3 item wow animate__fadeInTopLeft" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className='w-100 ' src={gallery2} alt="" />
                </div>
                <div className="col-4 item wow animate__fadeInTopLeft" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className='w-100  ' src={gallery3} alt="" />
                </div>
                <div className="col-4 h-75 wow animate__fadeInTopRight" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className='w-100 h-75' src={gallery4} alt="" />
                </div>
                <div className="col-4 h-75 wow animate__fadeInTopRight" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className='w-100  h-75' src={gallery5} alt="" />
                </div>
                <div className="col-4 h-75 wow animate__fadeInTopRight" data-wow-iteration="1" data-wow-duration="1s" data-wow-delay=".5s">
                  <img className='w-100  h-75' src={gallery6} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-center mt-5 ">
              <span className={`${styles.Deskshare} `}>Know more about us here</span>
              <span className={`${styles.Deskshare} ${styles.lightColor} ms-1`}> About Us page <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i></span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home