import React from "react";
import Card from "./Cards";
import img1 from "../Assets/1.webp";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.avif";
import img6 from "../Assets/icons8-conference-94.png";
import img7 from "../Assets/icons8-trust-94.png";
import img8 from "../Assets/teamwork.png";
import img9 from "../Assets/icons8-client-management-96.png";
import img10 from "../Assets/Amazing-Modern-House-Designs-HD-Wallpaper.jpg";
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
      <section className="section2" id="Projects">
        <div className="gridd">
          <Card
            image={img1}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero! "
            heading="project-1"
          />
          <Card
            image={img2}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="project-2"
          />
          <Card
            image={img3}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="project-3"
          />
          <Card
            image={img10}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="project-4"
          />
          <Card
            image={img10}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="project-5"
          />
          <Card
            image={img10}
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="project-6"
          />
        </div>
      </section>
      <section className="section3" id="AboutUs">
        <div className="PA">
          <Card
            image="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="Principal Architect"
          />

          <Card
            image="https://t4.ftcdn.net/jpg/02/82/72/09/360_F_282720917_7ZtAfEqEfA6CRT66imV9avGWXEg9w6Jt.jpg"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consequatur quia eaque, odit eum nesciunt vel cumque laudantium hic
            libero!"
            heading="Principal Architect"
          />
        </div>
        <div className="section3_3">
          <img src={img5} alt="" />
          <p>ARK DESIGN INTERNATIONAL</p>
          <div className="motives">
            <div>
              <img src={img6} alt="" />
              <p>Teamwork</p>
            </div>
            <div>
              <img src={img7} alt="" />
              <p>Customer Care</p>
            </div>
            <div>
              <img src={img8} alt="" />
              <p>Equality</p>
            </div>
            <div>
              <img src={img9} alt="" />
              <p>Client Management</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
