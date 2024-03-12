import React from 'react'

function Blog() {
  return (
    <div className='container-fluid p-0'>
        <section style={{
            backgroundImage:"url('/assets/blog images/images/image.png')",
            padding:"20rem 0rem",
            backgroundRepeat:"no-repeat"}}>
            <div className="container">
            <h1 className='text-center mb-4 text-white'>Our Newsroom</h1>
            <div className=' px-4 '>
                <form>
                    <div className="row rounded p-1 bg-white justify-content-between align-items-center">
                        <div class="col-md-10 col-8 p-0">
                        <input type="text" className="form-control border-0 fw-medium p-3 ps-4 fs-5" placeholder='search article' style={{color:"#5A7184"}} />
                        </div>
                        <div className="col-md-2 col-4 p-0">
                        <input type="submit" value="search" className="form-control btn btn-primary border-0 p-3 fs-5"  style={{backgroundColor:"#62929E"}}/>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </section>
        <div className="container">
        <section className='row justify-content-md-center p-5' style={{marginTop:"-10rem"}}>
            <div className='card shadow-sm mb-5 bg-transparent rounded border-0 shadow-lg p-0 overflow-hidden'>
                <div className="row g-0 ">
                <div className="col-md-6">
                    <img src="/assets/blog images/images/featured.png" class="img-fluid rounded-start border border-0" alt="..." style={{height:"100%",objectFit:"cover"}}/>
                </div>
                <div className="col-md-6 text-start p-4 bg-white">
                    <div className="card-body ">
                        <div className="card-text mb-4">
                            <span className='bg-success-subtle text-center p-2 col-2 rounded text-success'>FEATURED</span>
                        </div>
                        <div className="card-text mb-4">
                            <h2 style={{color:"#183B56"}}>
                            Cheap Airline Tickets Great Ways To Save
                            </h2>
                        </div>
                        <div className="card-text mb-4">
                            <p style={{color:"#5A7184"}}>In this digital generation where information can be easily obtained within seconds, business cards ...</p>
                        </div>
                        <div className="card-text mb-4"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className='mb-5'>
            <div className="row justify-content-between align-items-end mb-4">
                <div className='col-md-6 text-start'>
                    <h3 className='fw-bold' style={{color:"#183B56"}}>Popular Articles</h3>
                    <p style={{color:"#5A7184"}}>We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>
                </div>
                <div className='col-md-2 d-flex justify-content-end'>
                    <button type="button" className="btn btn-outline-primary">View all</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-6 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/Image 2.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                        <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">How to prevent and protect your family from Carbon monoxide</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/Image 3.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                    <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">Motherhood is the hardest and the best job ever</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='mb-5'>
            <div className="row justify-content-between align-items-end mb-4">
                <div className='col-md-6 text-start'>
                    <h3 className='fw-bold' style={{color:"#183B56"}}>Recent Articles</h3>
                    <p style={{color:"#5A7184"}}>Here’s what we've been up to recently.</p>
                </div>
                <div className='col-md-2 d-flex justify-content-end'>
                    <button type="button" className="btn btn-outline-primary">View all</button>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/Base.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                        <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">How to prevent and protect your family from Carbon monoxide</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/Base 2.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                    <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">Motherhood is the hardest and the best job ever</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/Base 3.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                    <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">Motherhood is the hardest and the best job ever</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='mb-5'>
            <div className="row justify-content-between align-items-end mb-4">
                <div className='col-md-6 text-start'>
                    <h3 className='fw-bold' style={{color:"#183B56"}}>Recent Articles</h3>
                    <p style={{color:"#5A7184"}}>Here’s what we've been up to recently.</p>
                </div>
                <div className='col-md-2 d-flex justify-content-end'>
                    <button type="button" className="btn btn-outline-primary">View all</button>
                </div>
            </div>
            <div className='card shadow-sm mb-5 bg-body-tertiary rounded border-0 shadow-lg p-0'>
                <div className="row g-0">
                <div className="col-md-6">
                    <img src="/assets/blog images/images/case studies.png" class="img-fluid border border-0" alt="..."
                    style={{height:"100%",objectFit:"cover"}}/>
                </div>
                <div className="col-md-6 text-start p-4">
                    <div className="card-body ">
                        <div className="card-text mb-4">
                            <span className='bg-success-subtle text-center p-2 col-2 rounded text-success'>FEATURED</span>
                        </div>
                        <div className="card-text mb-4">
                            <h2 style={{color:"#183B56"}}>
                            Cheap Airline Tickets Great Ways To Save
                            </h2>
                        </div>
                        <div className="card-text mb-4">
                            <p style={{color:"#5A7184"}}>In this digital generation where information can be easily obtained within seconds, business cards ...</p>
                        </div>
                        <div className="card-text mb-4"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className='mb-5'>
            <div className="row justify-content-between align-items-end mb-4">
                <div className='col-md-6 text-start'>
                    <h3 className='fw-bold' style={{color:"#183B56"}}>Popular Articles</h3>
                    <p style={{color:"#5A7184"}}>We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>
                </div>
            </div>
            <div className='row mb-4'>
                <div className="col-md-6 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/articles.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                        <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">How to prevent and protect your family from Carbon monoxide</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/articles 2.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                    <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">Motherhood is the hardest and the best job ever</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <div className="col-md-4 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/articles 3.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                        <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">How to prevent and protect your family from Carbon monoxide</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/articles 4.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                    <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">Motherhood is the hardest and the best job ever</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                <div className="card text-white border border-0">
                    <img src="/assets/blog images/images/articles 5.png" className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-between text-start p-4 gradient-background">
                    <p className="card-title">
                            <span className='bg-white text-center p-2 rounded rounded-pill text-success fs-6'>FEATURED</span>
                        </p>
                        <div className='row '>
                        <p className="card-text fs-4 fw-bold">Motherhood is the hardest and the best job ever</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                    <button type="button" className="btn btn-outline-primary col-md-2 col-4">View all</button>
                </div>
        </section>
        </div>
        <section style={{backgroundColor:"#62929E"}}>
            <div className="container text-white py-4">
                <div className="row justify-content-between align-items-center">
                <div className="col-md-6 mb-4">
                    <h1 className='fs-3 mb-4'>Get our stories delivered From us to your inbox weekly.</h1>
                    <form className='bg-white row rounded align-items-center mb-4'>
                        <div className="col-8 p-0">
                        <input type="text" className="form-control p-3 border-0 ps-4" placeholder='Your Email'/>
                        </div>
                        <div className="col-4 p-0">
                        <input type="submit" value="Get started" className='form-control text-white btn p-3 fw-medium' style={{backgroundColor:"#83BFCE"}} />
                        </div>
                    </form>
                    <p style={{color:"#5A7184"}}>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <div class="card p-2">
                        <img src="/assets/blog images/images/best articl.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title" style={{color:"#183B56"}}>The best aticles every week</h5>
                            <p class="card-text mb-3" style={{color:"#5A7184"}}>Our insurance plans offers are priced the same everywhere else.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Blog