import React from 'react'
import styles from './About.module.css';
// import cowork1 from '../../about images/Rectangle 3.png';
// import cowork2 from '../../about images/Rectangle 4.png';
// import dots from '../../about images/dot smoke (1) 1.png';


function About() {
  return (
    <>
      <div className='about text-white'>
        {/* header section */}
        {/* <section className="header  ">
          <div className={styles.header}>
            <div className="p-5  ">
              <h2>Tentang Kami</h2>
              <p className={styles.font}>Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!</p>
            </div>
          </div>
        </section> */}

        {/* co-work section */}
        {/* <section className='co-work my-5'>
          <div className="container">
            <div className="row">
              <div className="col-md-6 position-relative my-5">
                <div className=" ">
                  <div className="position-relative ">
                    <img className={`${styles.one} w-75 pt-3 one `} src={cowork1} alt="cowork1" />
                    <div className={`${styles.counter} position-absolute`}>
                      <p className='fs-4 m-0'>99 <sup>%</sup></p>
                      <span className={styles.smallText} >Customer Suka</span>
                    </div>
                  </div>
                  <img className={`${styles.two} w-50 position-absolute two`} src={cowork2} alt="cowork2" />
                </div>
              </div>
              <div className=" col-md-6 desk ">
                <div className=" my-5 mx-3 ">
                  <div className="d-flex justify-content-center ">
                    <img src={dots} alt="" />
                  </div>
                  <h6 className={`${styles.Deskshare}`}>Deskshare</h6>
                  <h2 className={`${styles.mainColor} ${styles.fontSize}`}>Co-work like never before</h2>
                  <p className={`${styles.mainColor} ${styles.font} ${styles.smallText} my-3`}>Ignite your productivity and level up the way you #GetThingsDone with the biggest variety of on-demand workspaces in 170+ cities bookable by the hour, day, month or year!</p>
                  <div className="d-flex justify-content-center align-items-center ">
                    <button className={`p-2 text-white ${styles.bgMain} ${styles.font} ${styles.btn} mt-5`}> + Download The App </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*  */}
{/* 
        <section className={`${styles.three} three my-5`}>
          <div className="container">
            <div className={` py-5`}>
              <div className="d-flex justify-content-between w-75">
                <div className="w-75">
                  <p className={`${styles.threeH4}`}>Tujuan Kami</p>
                  <h3>Berikan Layanan & Tempat Apartemen Terbaik Sesuai Impian Pengunjung</h3>
                  <p className={`${styles.font} ${styles.smallText} ${styles.threep}`} >Layanan dan Tempat Apartemen Terbaik, Sesuai Impian Anda. Rasakan kenyamanan istimewa di hunian kami.</p>
                </div>
                <div className="">
                  <img className='w-50' src={dots} alt="" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="Mission">
                  <h3 className={`${styles.brder}`} >Misi Kami</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="">
                      <span>01</span>
                    </div>
                    <div className="">
                      <h3>Menghadirkan Kemewahan Berkualitas Tinggi</h3>
                      <p>Menyediakan layanan dan tempat apartemen terbaik</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default About