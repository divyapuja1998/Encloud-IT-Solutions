import React from 'react';
import Infra from '../Assets/Infra.jpeg';
import Infra1 from '../Assets/Infra1.jpg';
import Infra2 from '../Assets/Infra2.jpg';
import Infra3 from '../Assets/Infra3.jpg';
import Infra4 from '../Assets/Infra4.jpeg';
import Infra5 from '../Assets/Infra5.jpg';
import Infra6 from '../Assets/Infra6.jpg';
import Infra7 from '../Assets/Infra7.png';
import Infra8 from '../Assets/Infra8.jpg';
import Infra9 from '../Assets/Infra9.jpg';

const InfrastructureSolutions = () => {
  const containerStyle = { width: '80%', margin: '0 auto' };
  const imageContainer = {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'center',
    borderRadius: '15px',
  };
  const imageStyle = {
    height: '250px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '15px',
    transition: 'transform 0.3s ease-in-out',
  };
  const hoverEffect = (e) => {
    e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
  };
  const hoverOutEffect = (e) => {
    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
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
                color: #111828;
                text-align: center;
                word-spacing: 8px;
            }

        `}
        </style>
        <div className="Background py-5" 
        style={{ 
          backgroundImage: `url(${Infra})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '60vh',
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '40px',
          filter: 'brightness(0.6)',
        }}>
        </div>

        <div className="main py-4" style={containerStyle}>
            <div className="h1-container">
                <h1 className="card-title h1-animate">
                <span style={{ color: '#FC5C39' }}>Infrastructure Solutions</span>
                </h1>
            </div>
        
            <div className="pt-5">
                <h2 style={{ color: "#1A1F71" }}>End User Infrastructure Solutions</h2>
                <p>We at EnCloud IT Solutions are well equipped to provide you the best quality end-user infrastructure solutions like tower workstations, desktops, and enterprise level professional laptops that can be custom-built according to your specifications.</p>
                <p>Businesses today require the latest technology with excellent quality to keep them ahead of their competition. Need is for products that meet quality standards, offer value for money, and offer excellent return on investments. Our entire range of professional laptops, gaming laptops, tower workstations, and other infrastructure solutions are not only built according to specifications but are also highly durable. You can be confident about the quality and rely on our efficient services.</p>

                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                    {[Infra1, Infra2, Infra3].map((image, index) => (
                        <div key={index} className="col h-100" 
                        style={imageContainer} 
                        onMouseEnter={hoverEffect} 
                        onMouseLeave={hoverOutEffect}>
                            <img src={image} style={imageStyle} alt={`Infra ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <hr />

                <h2 style={{ color: "#1A1F71" }}>Datacenter Infrastructure</h2>
                <p>We at EnCloud IT provide consulting services around datacenter infrastructure. Today, Businesses run on technology, Critical business operations and applications are hugely dependent on technology. Your digital transformation journey needs an IT Environment that is equipped to meet demands of emerging services and technologies. Data storage appliances hosted on-premise or at a Secured Data Center need to be highly scalable because of the multi-fold growth in Structured and Unstructured Data. A scalable solution ensures that IT Infrastructure is geared up for changing needs and ever growing workloads of the organization.</p>
                <p>We have industry consultants to help businesses build their IT Environments that focus on futuristic technology, agility, scalability, manageability, security, cost-effectiveness.</p>

                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                    {[Infra4, Infra5, Infra6].map((image, index) => (
                        <div key={index} className="col h-100" 
                        style={imageContainer} 
                        onMouseEnter={hoverEffect} 
                        onMouseLeave={hoverOutEffect}>
                            <img src={image} style={imageStyle} alt={`Infra ${index + 4}`} />
                        </div>
                    ))}
                </div>

                <hr />

                <h2 style={{ color: "#1A1F71" }}>Networking Infrastructure</h2>
                <p>An efficient, high speed, highly secured Data Network Infrastructure is the basic building block of IT Infrastructure for all Businesses. EnCloud IT can help you achieve this, we provide services and solution to design, build and deploy networking infrastructure; be it Basic network Switches and Data Center TOR Switches, Routers, Network Security – Next generation firewalls or UTM Technologies, or software-based security solutions, we have the expertise. We design, deliver and implement customer’s Network Infrastructure of any complexity.</p>
                <p>Network Infrastructure of any complexity. We have industry consultants to help businesses build their IT Environments that focus on futuristic technology.</p>

                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                    {[Infra7, Infra8, Infra9].map((image, index) => (
                        <div key={index} className="col h-100" 
                        style={imageContainer} 
                        onMouseEnter={hoverEffect} 
                        onMouseLeave={hoverOutEffect}>
                            <img src={image} style={imageStyle} alt={`Infra ${index + 7}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default InfrastructureSolutions;
