import React from 'react'
import image5 from '../Assets/software3.jpg';
import mobile from '../Assets/mobile.jpg'
import software2 from '../Assets/software2.jpg'
import software from '../Assets/software.jpg'

const cardData = [
    {
      id: 1,
      title: "Licesing solutions for complete software stack",
      text: "We Provide fresh licensing as well as renewal solutions for various Operating Systems, Hypervisor's, cloud software's, collaboration suites, databases, middleware's, backup software solutions, DR automation solutions, Software security solutions.",
      image: mobile,
    },
    {
      id: 2,
      title: "Virtulization & cloud solutions",
      text: "We provide multiple hypervisor as well as cloud platform solutions which will best fit customer IT roadmap. we are partnered with best in the industry software solutions providers to extend you best of our solutions & services.",
      image: software2, 
    },
    {
      id: 3,
      title: "Collaboration solutions",
      text: "Encloud IT provides multiple collaboration suites to improve organization's efficiency productive and ease of communication.",
      image: software, 
    },
  ];
  
  const SoftwareSolutions = () => (
    <div style={{backgroundColor: '#f4f4f4' }}>
      <div className="Background py-5" 
        style={{ 
          backgroundImage: `url(${image5})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '60vh',
          width: 'auto',
          display: 'flex', 
          alignItems: 'center',
          paddingLeft: '40px', 
          filter: 'brightness(0.5)',   
        }}>
        {/* <h1 className='text-light'>Wide range of Software Solutions</h1> */}
      </div>
  
      <div className="main py-4" style={{ width: '90%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <style>
        {`
          @keyframes slideInFromLeft {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
            }

            .h1-animate {
                animation: slideInFromLeft 1s ease-out forwards;
                opacity: 0;
                transform: translateX(-100%);
                font-weight: bold;
                text-align: center; 
            }
            
            .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border-radius: 25px;
          }

          .card:hover {
            transform: scale(1.01);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .card img:hover {
              transform: scale(1.02); /* Slight zoom */
            }

        `}
      </style>
      <h1 className="h1-animate" style={{textAlign: 'center' }}><span style={{ color: '#FC5C39' }}>Software Solutions</span></h1>
      <h6 style={{ textAlign: 'center',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        EnCloud IT Solutions offers the customers a wide range of software solutions to run their IT infrastructure. We align and partner with best of the industry software solution providers.  We provide software licensing, mobility solutions, virtualization and cloud solutions, security solutions, collaboration solution etc.
      </h6>
        {cardData.map((card) => (
          <div key={card.id} className="card h-100" style={{ display: 'flex', maxWidth: '100%', fontSize: '0.9rem' }}>
            <div className="row g-0 h-100">
              <div className="col-md-4">
                <img
                  src={card.image}
                  className="img-fluid rounded-start h-100"
                  alt={card.title}
                  style={{ objectFit: "cover",transition: 'transform 0.3s ease', }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h4 className="card-title" style={{ color: "#1A1F71" }}>{card.title}</h4>
                  <p className="card-text" style={{ fontSize: "1rem" }}>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

export default SoftwareSolutions
