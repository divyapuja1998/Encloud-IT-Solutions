import { useEffect } from "react";
import '../Component/Home.css';
import { NavLink,Link } from 'react-router-dom';
import image1 from '../Assets/AI.jpeg'
import image2 from '../Assets/cloud.jpeg'
import image3 from '../Assets/software1.jpg'
import mobile from '../Assets/Infra4.jpeg'
import security from '../Assets/security1.jpeg'
import cloud from '../Assets/cloud1.jpeg'
import { MdManageAccounts } from 'react-icons/md';
import { BiNetworkChart } from "react-icons/bi";
import { FaCloud } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
// import TestimonialCarousel from './TestimonialCarousel';

function Home() {

  const cardsData = [
    {
      id: 1,
      title: "Mobility and DataCenter",
      image: mobile,
      description: "EnCloud IT provides complete mobility suite which can help the customers to provide best of the services to their employees. We provide Mobiles, tablets, tiny DT. we also provide VDI solutions.",
      link: "/infrastructureSolutions",
    },
    {
      id: 2,
      title: "Security and Networking",
      image: security,
      description: "EnCloud IT provides end to end security solutions for customer's complete IT Infrastructure. We provide security solutions for endpoints, datacenters, network etc. We provide data protection as well as DR services.",
      link: "/securitySolutions",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      image: cloud,
      description: "EnCloud IT offers you Consulting, helps in building your Cloud Journey. We provide end to end cloud Solutions be it public, Private or Hybrid cloud.",
      link: "/cloudSolutions",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextButton = document.querySelector("#carouselExampleInterval .carousel-control-next");
      if (nextButton) nextButton.click(); // Simulate click on "next" button
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
  <div className="body">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Slide1" />
            <div className="carousel-caption">
              <h1 className="display-4">EnCloud IT Solutions</h1>
              <h2 className="lead">
                Encloud IT solutions Provides end-to-end solutions and services for your complete IT Requirements
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide2" />
            <div className="carousel-caption">
              <h1 className="display-4">EnCloud IT Solutions</h1>
              <h2 className="lead">
                Encloud IT solutions Provides end-to-end solutions and services for your complete IT Requirements
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide3" />
            <div className="carousel-caption">
              <h1 className="display-4">EnCloud IT Solutions</h1>
              <h2 className="lead">
                Encloud IT solutions Provides end-to-end solutions and services for your complete IT Requirements
              </h2>
            </div>
          </div>
        </div>

        <button className="carousel-button carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        <button className="carousel-button carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      {/* end */}
   
  <div className="main">
    <div className="container pt-5">
      <h1 className="text-center mb-4"><span style={{color:"#FC5C39"}}>Our Solutions</span></h1>
      <div className="row justify-content-center">
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={card.image} alt={card.title} className="card-img" />
                  <h5 className="card-title">{card.title}</h5>
                </div>
                <div className="flip-card-back">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <Link to={card.link} className="btn know-more-btn">
                    Know More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* section */}
    {/* <div className="section py-1">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col-md-4">
      <div className="card h-100" style={{ maxWidth: "400px", fontSize: "0.9rem" }}>
        <div className="row g-0 h-100">
          <div className="col-md-5">
            <img
              src={mobile}
              className="img-fluid rounded-start h-100"
              alt="Mobility and DataCenter"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title" style={{ fontSize: "1.1rem" }}><strong>Mobility and DataCenter</strong></h5>
              <p className="card-text" style={{ fontSize: "1rem" }}>
                EnCloud IT provides complete mobility suite which can help the customers to provide best of the services to their employees. We provide Mobiles, tablets, tiny DT. we also provide VDI solutions.
              </p>
              <div className="d-flex justify-content-center">
              <NavLink className="btn btn-primary rounded-pill mx-3" to="/infrastructureSolutions">
                Know More
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card h-100" style={{ maxWidth: "400px", fontSize: "0.9rem" }}>
        <div className="row g-0 h-100">
          <div className="col-md-5">
            <img
              src={security}
              className="img-fluid rounded-start h-100"
              alt="Security and Networking"
              style={{objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title" style={{ fontSize: "1.1rem" }}><strong>Security and Networking</strong></h5>
              <p className="card-text" style={{ fontSize: "1rem" }}>
                EnCloud IT provides end to end security solutions for customer's complete IT Infrastructure. We provide security solutions for endpoints, datacenters, network etc. We provide data protection as well as DR services.
              </p>
              <div className="d-flex justify-content-center">
              <NavLink className="btn btn-primary rounded-pill mx-3" to="/securitySolutions">
                Know More
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/}

    <div className="pt-5">
    <h1 className="text-center"><span style={{color: '#FC5C39'}}>IT Solutions</span></h1>
    <div className="section2 py-3">
      <div className="card bigCard mx-3 px-2" style={{border: 'none' }}>
         <div className="card-body">
         <h4 className="card-title text-center"><span style={{color: '#1A1F71'}}>Helping you find the right IT solutions</span></h4>
           <p className="card-text" style={{ fontSize: "1.1rem" }}>We at Encloud IT propose right sized solutions which help customer address their pain points. We have domain experts who help build customer success stories. We have been instrumental in providing complete IT stack which helps customer for one stop solution.</p>
         </div>
         <div className="d-flex justify-content-center my-3">
         <NavLink className="btn rounded-pill mx-3" style={{background: '#1A1F71', color:'#ffff'}} to="/cloudSolutions">
          Know More
          </NavLink>
        </div>
       </div>
    <div className="row row-cols-1 g-4 pt-4">
     <div className="col-md-3">
              <div className="card iconCard h-100 mx-3 py-2" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <MdManageAccounts />
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Managed IT Solutions</h5>
                </div>
              </div>
      </div>
      <div className="col-md-3">
              <div className="card iconCard h-100 mx-3 py-2" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <BiNetworkChart/>
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71"}}>Complete IT Infrastructure</h5>
                </div>
              </div>
      </div>
      <div className="col-md-3">
              <div className="card iconCard h-100 mx-3 py-2" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <FaCloud /> 
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Cloud solutions</h5>
                </div>
              </div>
      </div>
      <div className="col-md-3">
              <div className="card iconCard h-100 mx-3 py-2" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <FiCode /> 
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Software Solutions</h5>
                </div>
              </div>
      </div>
    </div>
    </div>
    </div>
   
    {/* close */}

      {/* <div>
        <TestimonialCarousel/>
      </div> */}

    {/* section4 */}
    <div className="pt-5">
    <h1 className="text-center"><span style={{color:"#FC5C39"}}>IT Partnership</span></h1>
    <div className="section4 py-4">
    <div className="container">
      <div className="row g-5 justify-content-evenly">
        <div className="col-lg-9">
          <div className="card bigCard mx-2 px-2 py-2" style={{border: 'none'}}>
          <div className="card-body">
             <h4 className="card-title text-center" style={{color:"#1A1F71"}}>IT partner with a shared vision</h4>
             <p className="card-text" style={{ fontSize: "1.1rem" }}>We at EnCloud IT are equipped to provide IT Infrastructure Solutions. It consists of end-user solutions like workstations, desktops, professional laptops, servers, storage, and networking infrastructure that can be custom-built to your specifications.</p>
            <p className="card-text" style={{ fontSize: "1.1rem" }}>EnCloud IT offers consulting to guide your cloud journey. We provide a complete cloud stack, including Public, Private, and Hybrid solutions.</p>
            <p className="card-text" style={{ fontSize: "1.1rem" }}>
                EnCloud IT delivers security solutions for endpoints, datacenters, and applications. We offer product warranties, software support, and renewals. Our services include health checks, technical support, and uptime assurance. We also provide professional, managed, and financial services.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
    </div>
    </div> 
  </div>
  );
}

export default Home;
