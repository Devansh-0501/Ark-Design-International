import React from "react";
import img1 from "../Assets/1.webp";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.avif";
import img6 from "../Assets/icons8-conference-94.png";
import img7 from "../Assets/icons8-trust-94.png";
import img8 from "../Assets/teamwork.png";
import img9 from "../Assets/icons8-client-management-96.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="section1" id="Home">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showThumbs={false}
          interval={2000}
        >
          <div>
            <img src={img1} alt="" />
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              reiciendis. Ex eos quisquam aliquid enim esse, delectus est facere
              aspernatur corporis alias illo et aliquam. Voluptate odit,
              provident sed consequatur totam eos.
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              reiciendis. Ex eos quisquam aliquid enim esse, delectus est facere
              aspernatur corporis alias illo et aliquam. Voluptate odit,
              provident sed consequatur totam eos.
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum
              doloremque harum dolorem. Perferendis minus, soluta excepturi
              corrupti error hic laborum debitis ducimus repellendus esse dicta
              culpa explicabo consectetur! Corporis sapiente molestiae enim
              cupiditate iusto ea neque illum tempora corrupti, minus, doloribus
              modi ut consectetur ipsum veritatis delectus exercitationem odio
              voluptate fuga ex obcaecati error eaque? Pariatur fugit non nobis
              expedita optio natus, ipsa unde, omnis molestias error ex sed
              quibusdam maiores inventore velit necessitatibus iure repellendus
              aspernatur in asperiores voluptatem? Provident pariatur optio,
              velit aperiam consequuntur doloribus. Corporis doloremque eaque
              labore consequuntur velit quod temporibus ad unde totam, eius
              voluptate ab porro cum atque praesentium perspiciatis saepe et
              maiores? Ipsam, quisquam. Dolor nobis incidunt quidem libero
              corrupti id cum at perspiciatis non.
            </p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p className="legend">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              reiciendis. Ex eos quisquam aliquid enim esse, delectus est facere
              aspernatur corporis alias illo et aliquam. Voluptate odit,
              provident sed consequatur totam eos.
            </p>
          </div>
        </Carousel>
      </section>
      <section class="section2" id="Projects">
        <div class="gridd">
          <img src={img1} alt="" />
          <img
            src={img2}
            alt=""
          />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </section>
      <section class="section3" id="AboutUs">
        <img src={img5} alt="" />
        <p>ARK DESIGN INTERNATIONAL</p>
        <div class="motiveLogo">
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <div class="motive">
          <p>Teamwork</p>
          <p>Customer Care</p>
          <p>Equality</p>
          <p>Client Management</p>
        </div>
      </section>
    </>
  );
};

export default Home;
