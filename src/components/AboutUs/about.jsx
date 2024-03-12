import React from 'react';
import styles from './about.module.css';
import dotsmoke from './about-images/dotsmoke.png';
import video from './about-images/video.jpg';
import cowork1 from './about-images/cowork1.png';
import cowork2 from './about-images/cowork2.png';
export default function About() {
  return (
    <div>
      <div className={styles['header']}>
        <div className={styles['header-caption']}>
          <h2 className='fw-bold'> <span className={`${styles.span}`}> Tentang</span> Kami</h2>
          <p className={styles['cap']}>Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!</p>
        </div>
      </div>

      {/* ======================================================== */}
      <section className='co-work my-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 position-relative my-5">
              <div className="">
                <div className="position-relative">
                  <img className={`${styles.one} w-75 pt-3 one`} src={cowork2} alt="cowork2" />
                  <div className={`${styles.counter} position-absolute`}>
                    <p className='fs-4 m-0'>99 <sup>%</sup></p>
                    <span className={styles.smallText}>Customer Suka</span>
                  </div>
                </div>
                <img className={`${styles.two} w-50 position-absolute two`} src={cowork1} alt="cowork1" />
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
          <p className={styles.label2}>Tentang Kami</p>
          <img src={dotsmoke} alt="dotsmoke" className={styles.dotsmoke} />
        </div>
        <div className={styles.h2mission}>
          <h2>Berikan Layanan & Tempat Apartemen </h2>
          <h2>Terbaik Sesuai Impian Pengunjung</h2>
        </div>
        <p className={styles.p1mission}>Layanan dan Tempat Apartemen Terbaik, Sesuai Impian Anda. Rasakan kenyamanan istimewa di hunian kami.</p>
        <div className='container'>
        <div className="row ">
          <div className={`col-md-6  ${styles.vission }`}>
            <div className= {`py-5 ${styles.inner}`}>
              <div className="div"></div>
              <h4>Misi Kami</h4>
              <hr />
              <div className="missioncap d-flex  align-items-center">
                <h2 className={styles.number}>01</h2>
                <div className={styles.iconbox}>
                  <h4 >Menghadirkan Kemewahan Berkualitas Tinggi</h4>
                  <h6>Menyediakan layanan dan tempat apartemen terbaik</h6>
                </div>
              </div>
              <div className="missioncap d-flex  align-items-center">
                <h2 className={styles.number}>02</h2>
                <div className={styles.iconbox}>
                  <h4>Menghadirkan Kemewahan Berkualitas Tinggi</h4>
                  <h6>Menyediakan layanan dan tempat apartemen terbaik</h6>
                </div>
              </div>
              <div className="missioncap d-flex  align-items-center">
                <h2 className={styles.number}>03</h2>
                <div className={styles.iconbox}>
                  <h4>Menghadirkan Kemewahan Berkualitas Tinggi</h4>
                  <h6 >Menyediakan layanan dan tempat apartemen terbaik</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-6 ${styles.vission}`}>
            <div className={`${styles.inner} ${styles.vission1}`}>
              <h5>“ Lorem ipsum dolor sit amet consectetur adipsing elit. “</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* ================================================================================================================ */}
      <div className={styles.choice}>
        {/* <img src={dotsmoke} className={styles.dotsmoke2} alt="" srcSet="" /> */}
        <div className={`py-5 ${styles.choicelabel}`}>
          <p className={styles.textsmall}>Bagaimana cara kerja layanan kami</p>
          <h3 className={styles.textlarge}>Kami Memberikan Langkah </h3>
          <h3 className={styles.textlarge}>Kerja Yang Mudah </h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>01</h2>
                <h6 className={styles.boxh6}>check in</h6>
                <p className={styles.boxp}>Set tanggal check-in dan check-out sesuai keinginan</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>02</h2>
                <h6 className={styles.boxh6}>Pilih Tempat</h6>
                <p className={styles.boxp}>Pilih tempat apartemen terbaik sesuai keinginan anda</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>03</h2>
                <h6 className={styles.boxh6}>Bayar Tempat</h6>
                <p className={styles.boxp}>Lakukan pembayaran sesudah anda set tanggal check-in & check-out</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className={styles.box}>
                <h2 className={styles.number2}>04</h2>
                <h6 className={styles.boxh6}>Download Bukti</h6>
                <p className={styles.boxp}>Kami akan segera kirimkan tiket/sewa apartemen anda</p>
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
            <div className="col-md-9 col-12">
              <p className={styles.p5}>Kenapa harus gunakan layanan kami</p>
              <h3 className={styles.hstepwork}>Kami Memberikan Hasil Layanan Terbaik Untuk Apartemen Anda</h3>
              <div className="row">
                <div className="col-md-6">
                  <img src={video} className={styles.video} alt="" />
                </div>
                <div className="col-md-6">
                  <div className={`iconvideo ${styles.iconvideo}`}>
                    <i className={`fa-solid fa-shield-halved d-inline ${styles.iconsize}`}></i>
                    <div className={`div d-inline-block ${styles.div}`}>
                      <h6 className={styles.iconh6}>Garansi Layanan</h6>
                      <p className={styles.iconp}>Mendapatkan keamanan</p>
                    </div>
                  </div>
                  <div className={`iconvideo ${styles.iconvideo}`}>
                    <i className={`fa-solid fa-list d-inline ${styles.iconsize}`}></i>
                    <div className={`div d-inline-block ${styles.div}`}>
                      <h6 className={styles.iconh6}>List Apartemen Terbaik</h6>
                      <p className={styles.iconp}>Apartemen terbaik di Indonesia </p>
                    </div>
                  </div>
                  <div className={`iconvideo ${styles.iconvideo}`}>
                    <i className={`fa-solid fa-comments d-inline ${styles.iconsize}`}></i>
                    <div className={`div d-inline-block ${styles.div}`}>
                      <h6 className={styles.iconh6}>Gratis Konsultasi</h6>
                      <p className={styles.iconp}> Tersedia konsultasi terbaik </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-3 col-12 ${styles.itemss}`}>
              <i className={`fa-solid fa-quote-left ${styles.ICONN}`}></i>
              <h5 className={styles.h5text}>“ Lorem ipsum dolor sit amet consectetur adipsing elit. “</h5>
              <p className={styles.plist}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="list m-3">
                <i className="fa-solid fa-circle-check d-inline"></i>
                <p className={`d-inline ${styles.textp}`}>Konsultasi Gratis</p>
              </div>
              <div className="list m-3 ">
                <i className="fa-solid fa-circle-check d-inline"></i>
                <p className={`d-inline ${styles.textp}`}>Bersertifikat</p>
              </div>
              <div className="list m-3">
                <i className="fa-solid fa-circle-check d-inline"></i>
                <p className={`d-inline ${styles.textp}`}>Layanan Terbaik</p>
              </div>
              <div className="list m-3">
                <i className="fa-solid fa-circle-check d-inline "></i>
                <p className={`d-inline ${styles.textp}`}>Tempat Idaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


