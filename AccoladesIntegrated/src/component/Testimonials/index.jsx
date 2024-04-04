import React from "react";
import Card from "../Card";
import Button from "../Button";
const Testimonials = () => {
    let reviews=[
        {
            name:"Cochin M T",
            review:"Accolades are an excellent team to work with.Their approach has been more consultative than other agencies that we have worked with.We have collaborate with  them since last 3years and we are extremely happy with their service	",
            active:"active"
        },
        {
            name:"Qims Kollam",
            review:"We are one of the client of Accolades Media. Quilon Institute of Management Studies, QIMS, Kollam is one of the top Aviation Degree colleges in Kerala. We are extremely satisfied in the professional way of works in website Management, Online Marketing and designing. M.D of the company Mr Jagesh always shows a professional approach in all the dealings and projects.. We suggest this excellent company for website Management, online marketing and SEO on the base of our experience for the last 2 years.. All the very Best for the Team Accolades...",
            active:null
        },
        {
            name:"Sherbin Ahammed",
            review:"Accolades is an excellent team to work with comprising of very talented and dedicated staff they were patient enough to listen to my requirements and guide me with the best possible social networking strategy which has indeed started to show results within a very short time. I recommend Accolades to anyone like me for wants the best social media marketing team to scale up their business. All the best team Accolades.",
            active:null
        }
    ]

  return (
    <>
      <div
        className="flex-center py-lg-5 pb-5 px-3"
        style={{ background: "#040404" }}
      >
        <div className="max-container d-flex flex-lg-nowrap  flex-wrap">
          <div className="serive-banner-two-content  col-lg-6 col-md-12 d-flex flex-column justify-content-center">
            <h2 className="pb-3">TESTIMONIALS</h2>
            <h3>
              What Client<span style={{ color: "#23A7AE" }}> Says.</span>
            </h3>
            <div className="underline  "></div>

            <p className="py-4">
              Our clients are the planets and we, the solarsystem. The most
              remarkable applause that we ever had is from our clients itself
            </p>
            <Button/>
          </div>

          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
            <div className="slider-container-two text-white">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide p-3 "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                    {reviews.map(item=>{
                        return(
                            <Card reviewObject={item}/>
                        )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
/* We are one of the client of Accolades Media. Quilon
                          Institute of Management Studies, QIMS, Kollam is one
                          of the top Aviation Degree colleges in Kerala. We are
                          extremely satisfied in the professional way of works
                          in website Management, Online Marketing and designing.
                          M.D of the company Mr Jagesh always shows a
                          professional approach in all the dealings and
                          projects.. We suggest this excellent company for
                          website Management, online marketing and SEO on the
                          base of our experience for the last 2 years.. All the
                          very Best for the Team Accolades... */