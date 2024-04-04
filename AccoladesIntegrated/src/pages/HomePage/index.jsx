import React from "react";
import Odometer from "../../component/Odometer";
import Slider from "react-slick";
import Testimonials from "../../component/Testimonials";
import ClientImageCard from "../../component/ClientImageCard";
import OfficeAddress from "../../component/OfficeAddress";
import Form from "../../component/Form";
import Button from "../../component/Button";

const HomePage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const clientImage=[
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l3.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l1-1.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l1-1.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l3.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l3.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l1-1.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l3.png",
    "https://accoladesintegrated.com/wp-content/uploads/2022/10/l1-1.png"
  ]
  const officeAddress=[
    {
      icon:"fa-solid fa-location-dot",
      tag:"Office Address",
      text:
      `No.32/3071 - B | First Floor Anjiparambil Building, Ponnurunni 
NH Bypass, Vyttila, Kochi, Kerala 682019.
      `
    },
    {
      icon:"fa-solid fa-phone",
      tag:"Call Us",
      text:"+91 7072619922"
    },
    {
      icon:"fa-solid fa-house",
      tag:"Mail Us",
      text:"mail@accoladesmedia.co.in"
    }
  ]
  return (
    <div>
      <div className="home-banner flex-center">
        <div className="max-container d-flex ">
          <div className="col-lg-6 ms-xl-3">
            <h2 className="me-5">
              <span>Marketing Insights Worthy of Your </span>
              <span>Time and Attention</span>
            </h2>
            <div className="underline"></div>
            <p>
              we have the dexterity to help our client’s business create
              cost-effective,lucrative advertising campaigns
            </p>
            <Button/>
          </div>
          <div className="col-lg-6">&nbsp;</div>
        </div>
      </div>

      <div className="service-banner flex-center">
        <div className="service-banner-content max-container ">
          <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center  pe-lg-4 p-3">
            <h2>OUR SERVICES</h2>
            <h3>What We Do</h3>
            <div className="underline"></div>
            <p>
              A strong, consistent brand, built up over time, is the best
              guarantee we can assure you. Self, definition, transparency,
              authenticity and accountability are our keys to success. Convey
              your brand values and make your company more relatable, and
              translate into more leads, conversions, and sales.
            </p>
            <Button/>
          </div>
          <div className="col-lg-7 col-md-12 d-flex justify-content-center  gap-2 flex-wrap">
            <div className="d-flex flex-column  gap-2 ">
              <div className="service-card">
                <img
                  decoding="async"
                  width="62"
                  height="63"
                  src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Digital-Marketing.png"
                  alt=""
                />
                <h5>
                  Digital <br />
                  Marketing
                </h5>
                <p>
                  Get ROI through digital marketing services, drive successful
                  online marketing campaigns with our digital marketing
                  services.
                </p>
              </div>
              <div className="service-card">
                <img
                  decoding="async"
                  width="62"
                  height="63"
                  src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Digital-Marketing.png"
                  alt=""
                />
                <h5>
                  Digital <br />
                  Marketing
                </h5>
                <p>
                  Get ROI through digital marketing services, drive successful
                  online marketing campaigns with our digital marketing
                  services.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column  mt-2 gap-2 ">
              <div className="service-card">
                <img
                  decoding="async"
                  width="62"
                  height="63"
                  src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Digital-Marketing.png"
                  alt=""
                />
                <h5>
                  Digital <br />
                  Marketing
                </h5>
                <p>
                  Get ROI through digital marketing services, drive successful
                  online marketing campaigns with our digital marketing
                  services.
                </p>
              </div>
              <div className="service-card">
                <img
                  decoding="async"
                  width="62"
                  height="63"
                  src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Digital-Marketing.png"
                  alt=""
                />
                <h5>
                  Digital <br />
                  Marketing
                </h5>
                <p>
                  Get ROI through digital marketing services, drive successful
                  online marketing campaigns with our digital marketing
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="serive-banner-two flex-center">
        <div className="max-container d-flex">
          <div className="col-lg-6 d-lg-block d-md-none"></div>
          <div className="serive-banner-two-content col-lg-6 col-md-12 py-5">
            <h2 className="pb-3">DEVELOPMENT</h2>
            <h3>
              We are Creatively <br />
              <span style={{ color: "#23A7AE" }}> Different</span>
            </h3>
            <div className="underline  "></div>

            <p className="py-4">
              Accolades is envisioned to cater the newest and finest web
              development solutions to businesses in Kerala. We perceive the
              worth of your investments, which is why our professional web
              development team is here to supply you with a host of robust
              services. Our classy website styles are aesthetically pleasing and
              elevate your business to unprecedented heights of success. We have
              5 + years’ expertise and expert web designers who offer
              cost-effective creative web design and web development solutions.
              We style websites that nurture your leads and turns them into
              long-lasting high-paying customers. Accolades the digital
              marketing companies in cochin offers the most affordable,
              responsive & professional web design services in Kochi that help
              you optimize your lead conversion. We proactively commit to the
              success of your website. Our specialty in functionality, lead
              generating potential, and conversion ability of your website
              rather than aesthetics alone helps us bring you measurable
              results. Let’s Stand above the cloud and rise above the noise.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="customer-section flex-center">
        <div className="max-container d-flex justify-content-around flex-lg-nowrap flex-wrap">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minWidth: "307px" }}
          >
            <img
              loading="lazy"
              decoding="async"
              width="66"
              height="66"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/06/150.png"
              alt=""
            />
            <h3>
              <Odometer value={150} />+
            </h3>
            <p>Projects Done</p>
          </div>

          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minWidth: "307px" }}
          >
            <img
              loading="lazy"
              decoding="async"
              width="66"
              height="66"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/06/500.png"
              alt=""
            />
            <h3>
              <Odometer value={500} />+
            </h3>
            <p>Happy Customers</p>
          </div>

          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minWidth: "307px" }}
          >
            <img
              loading="lazy"
              decoding="async"
              width="66"
              height="66"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/06/50.png"
              alt=""
            />
            <h3>
              <Odometer value={50} />+
            </h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>

      <div className="flex-center" style={{ background: "#0A0A0A" }}>
        <div className="max-container d-flex justify-content-between  align-items-center flex-wrap pt-5 pb-3 px-3">
          <div className="serive-banner-two-content col-lg-6 col-md-12 d-flex flex-column justify-content-center">
            <h2 className="pb-3">LATEST PROJECTS</h2>
            <h3>
              Our
              <span style={{ color: "#23A7AE" }}> Latest.</span>
            </h3>
            <div className="underline  "></div>

            <p className="pt-4">
              We have given services for about 250 plus happy clients including
              Benoy Marbles, National Builders, Manappuram, Karikkineth, Ocean,
              etc. Timebound work completion, teamwork and unity makes us stand
              out
            </p>
          </div>

          <div className="col opacity-100-hover  d-flex justify-content-lg-end  justify-content-center align-items-center">
            <img
              loading="lazy"
              decoding="async"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/10/006-Karikkineth-Display-Poster-1.png"
              style={{ width: "100%", maxWidth: "359px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex-center pb-5" style={{ background: "#0A0A0A" }}>
        <div className="max-container d-flex gap-3 justify-content-center  align-items-center flex-lg-nowrap flex-wrap px-3 pb-lg-5">
          <div className=" opacity-100-hover  ">
            <img
              loading="lazy"
              decoding="async"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/10/001-Creatabar-Poster_Square.png"
              style={{ width: "100%", maxWidth: "368px" }}
            />
          </div>
          <div className=" opacity-100-hover  ">
            <img
              loading="lazy"
              decoding="async"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/10/001-Famplastic-Pitching-Poster.png"
              style={{ width: "100%", maxWidth: "368px" }}
            />
          </div>
          <div className=" opacity-100-hover  ">
            <img
              loading="lazy"
              decoding="async"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/10/001-Pitching-Poster.png"
              style={{ width: "100%", maxWidth: "368px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex-center py-5" style={{ backgroundColor: "#011816" }}>
        <div className="max-container px-2  slider">
          <h4 className="mb-4">OUR CLIENTS </h4>
          <div className="slider-container">
            <Slider {...settings}>
              {clientImage.map(item=>{
                return(
              < ClientImageCard source={item}/>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div
        className="flex-center py-lg-5 pb-5 px-3"
        style={{ background: "#040404" }}
      >
        <div className="max-container d-flex flex-lg-nowrap  flex-wrap">
          <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end justify-content-center  align-items-center">
            <img
              loading="lazy"
              decoding="async"
              src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Why-Choose-Us-2.png"
              alt="Best Digital Marketing Agency in Trivandrum"
              style={{ width: "100%", maxWidth: "467.5px" }}
            />
          </div>

          <div className="serive-banner-two-content col-lg-6 col-md-12 d-flex flex-column justify-content-center">
            <h2 className="pb-3">LATEST PROJECTS</h2>
            <h3>
              Key to the<span style={{ color: "#23A7AE" }}> World</span>
            </h3>
            <div className="underline  "></div>

            <p className="pt-4">
              Accolades always strive to seek perfection in every manner. Be the
              technical side or creative side, uniqueness is our key trait.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Start */}

      <Testimonials />

      {/* Testimonials End */}

      <div className="flex-center py-lg-5 pb-5" style={{ background: "#2A2929" }}>
        <div className="max-container d-flex flex-lg-nowrap  flex-wrap">

          <div className="col-lg-6 col-md-12 d-flex justify-content-center  align-items-center">
            <form action="" className='w-100 p-5'>
              <div className="p-5  d-flex flex-column w-100 gap-5" style={{ border: "1px solid #23a7ae" }}>
                <Form/>
                <Button/>
              </div>
            </form>
          </div>
          <div className='serive-banner-two-content col-lg-6 col-md-12 d-flex flex-column justify-content-center'>
            <h2 className='pb-3'>CONTACT</h2>
            <h3>PING OR<span style={{ color: "#23A7AE" }}> RING US</span></h3>
            <div className='underline  '></div>

            <p className='pt-4'>Accolades is here to fulfil all your needs and leading you towards the light of knowledge.</p>
              <div className="homeAddress">
                {officeAddress.map(item=>{
                  return(
                    <OfficeAddress address={item}/>
                  )
                }
                  )}
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage;
