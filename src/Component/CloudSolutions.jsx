import React from 'react';
import image5 from '../Assets/blueBackground.jpg';
import mobile from '../Assets/cloud.jpeg';
import security from '../Assets/cloud1.jpeg';
import cloud from '../Assets/cloud2.jpeg';

const CloudSolutions = () => {
  const cardImageStyle = {
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  const backgroundStyle = {
    backgroundImage: `url(${image5})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
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

            .h1-container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%; /* Ensures centering */
            }

            .h1-animate {
                animation: slideInFromLeft 1s ease-out forwards;
                opacity: 0;
                transform: translateX(-100%);
                font-weight: bold;
                text-align: center; 
            }

        `}
      </style>
      <div className="h1-container pt-3">
        <h1 className="card-title h1-animate">
          <span style={{ color: '#FC5C39' }}>Our Cloud Solutions</span>
        </h1>
      </div>
      <div className='main py-4' style={{ width: '90%', margin: '0 auto' }}>
      <div className="Background py-4" style={backgroundStyle}>
        <div className='mx-3'>
          <p className='text-light'>
            ​EnCloud IT Solutions offers you – Consulting, help in building your Cloud Journey and offers end-to-end solutions for the same. EnCloud IT would be with you throughout your cloud journey to address your specific needs and requirements. We provide complete cloud stack, be it Public, Private, or Hybrid cloud solutions.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 pt-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card h-100 mx-3 px-2 py-2 shadow-sm" style={{ transition: 'transform 0.3s ease' }}>
              <img
                src={cloud}
                className="card-img-top"
                alt="Service 1"
                style={cardImageStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}  // Scaling image on hover
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // Reset scaling
              />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ color: "#1A1F71" }}>Private Cloud</h5>
                <p className="card-text">A Private Cloud, often called an Internal Private Cloud, is hosted within your own Data Center. Since an Internal Cloud is completely controlled in-house, it indeed offers flexibility and consistency. Not to forget the high Data Security that it offers. Some additional benefits are: Dedicated environment, Guaranteed availability of resources, Complete control together with assured data security and advantages of a public cloud.</p>
                <p className="card-text">At EnCloud IT, we will help you with consulting, and ensure a smooth transition to your Cloud Journey with end-to-end solutions for the same. EnCloud IT would be with you throughout your cloud journey to address your specific needs and requirements.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card h-100 mx-3 px-2 py-2 shadow-sm" style={{ transition: 'transform 0.3s ease' }}>
              <img
                src={security}
                className="card-img-top"
                alt="Security"
                style={cardImageStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ color: "#1A1F71" }}>Public Cloud</h5>
                <p className="card-text">EnCloud IT provides public cloud solutions which will best fit your requirements. Public Cloud – Your Shared Infrastructure with Unmatched Scalability.</p>
                <p className="card-text">The most recognized model of cloud computing is the Public Cloud. Managed by large service providers, these clouds are frequently run within a shared environment between several different users, with partitions as the primary security feature. Known as the Real Cloud, a pool of shared physical resources is used, and the environment can be accessed over a public network.</p>
                <p className="card-text">At EnCloud IT, we help customers with public cloud migration, integration, and deployment services.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card h-100 mx-3 px-2 py-2 shadow-sm" style={{ transition: 'transform 0.3s ease' }}>
              <img
                src={mobile}
                className="card-img-top"
                alt="Service 3"
                style={cardImageStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ color: "#1A1F71" }}>Hybrid Cloud</h5>
                <p className="card-text">Hybrid cloud gives you agility, scalability, and flexibility to run your workloads as per their demands on private or public clouds. You should be able to manage, move, or control these workloads through a single console. You can decide your strategy considering cost, workload demand, and duration.</p>
                <p className="card-text">A hybrid cloud gives you high data security, as in a private cloud environment, with the easy-to-access features and fast connections of the public cloud. In that sense, it offers all the benefits of both public and private cloud. While hybrid cloud services can result in cost savings, their main value is speedy & efficient digital transformation due to the agility they offer.</p>
                <p className="card-text">EnCloud IT understands your needs and commits to a tailored hybrid cloud solution with the assured benefits of both Public Cloud & Private Cloud.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CloudSolutions;
