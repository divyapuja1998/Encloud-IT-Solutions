import React from 'react';
import security from '../Assets/Security.png';
import mobile from '../Assets/Security2.png';
import security1 from '../Assets/security1.jpeg';

const cardData = [
  {
    id: 1,
    title: "End Point & Servers Security",
    text: "Client security applications, often referred to as 'endpoint protection clients,' are a crucial part of the defense of your computer system from malicious attacks and other security risks. Endpoint protection consists of anti-virus, anti-spyware, intrusion prevention, and client firewall. These components are the most important things to have installed in order to keep your computer safe.",
    image: security1,
  },
  {
    id: 2,
    title: "Network & DC Security",
    text: "Enterprise Security for Gateways consolidates your web and email security into a single virtualized solution that delivers a unified, multi-threat defense at your network perimeter—keeping malware, malicious links, and unwanted content out. Deployed as hardware or software virtual appliances, this gateway suite supports data center consolidation, streamlines administration, and consumes fewer resources. Learn how Enterprise Security for Gateways unifies multilayered, multi-threat protection to provide you with superior gateway protection while saving your time and money.Web Security Gateway provides the defenses you need to defend against advanced attacks: real-time threat analysis at web gateways, plus forensic reporting.",
    image: security,
  },
  {
    id: 3,
    title: "Virtualization Security",
    text: "Driving the high levels of protection and compliance you need. Mitigate the risks introduced by virtualization and achieve even greater protection than you thought possible in a purely physical environment. Whether you are trying to prevent unauthorized access, maintaining isolation and separation of systems, discovering and monitoring sensitive data, or consolidating log monitoring across virtual and physical infrastructure, with Symantec you can confidently accelerate your virtualization initiatives to include even the most critical of applications and services. The Virtualization security supports the exact same next-generation firewall and advanced threat prevention features available in our physical form factor appliances, allowing you to safely enable applications flowing into, and across your private, public and hybrid cloud computing environments. Automation features and an API enable you to dynamically update security policies as your VM environment changes.",
    image: mobile,
  },
];

const SecuritySolutions = () => (
  <div style={{backgroundColor: '#f4f4f4' }}>
    <div className="Background py-5"
      style={{
        backgroundImage: `url(${security})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '60vh',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '40px',
      }}>
      <h1 className='text-light' style={{ width: '50%' }}>Provides end-to-end security</h1>
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
        `}
      </style>
      <h1 className="h1-animate" style={{textAlign: 'center',  color: '#FC5C39'}}>Security Solutions</h1>
      <h5 style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        EnCloud IT Solutions Provides end-to-end security solutions for customer's complete IT Infrastructure requirements.
      </h5>

      {cardData.map((card) => (
        <div key={card.id} className="card h-100 shadow-sm" style={{ display: 'flex', maxWidth: '100%', fontSize: '0.9rem', position: 'relative' }}>
          <div className="row g-0 h-100">
            <div className="col-md-4">
              <img
                src={card.image}
                className="img-fluid rounded-start h-100"
                alt={card.title}
                style={{
                  objectFit: "cover",
                  height: '300px',
                  width: '100%',
                  transition: 'transform 0.3s ease', /* Smooth zoom transition */
                }}
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
          <style>{`
            .card:hover {
              transform: translateY(-5px); /* Lift the card */
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Stronger shadow */
              transition: all 0.3s ease-in-out; /* Smooth transition */
            }
            .card img:hover {
              transform: scale(1.05); /* Slight zoom */
            }
          `}</style>
        </div>
      ))}
    </div>
  </div>
);

export default SecuritySolutions;
