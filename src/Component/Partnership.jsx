import React from 'react';
import acer from "../Assets/acer-4.svg";
import quickHeal from "../Assets/quickHeal.svg";
import dell from "../Assets/dell.png";
import Veeam from "../Assets/Veeam.jpg";
import Veritas from "../Assets/Veritas.png";
import Cisco from "../Assets/Cisco.png";
import Matrix from "../Assets/Matrix-Security-Solutions-Logo.jpg";
import sophos from "../Assets/Sophos-Logo.jpg";
import fortinet from "../Assets/fortinet-logo.png";
import targus from "../Assets/targus-logo.png";
import symantec from "../Assets/symantec.png";

const partners = [
  { id: 1, name: "Lenovo", image: "https://img.icons8.com/color/100/lenovo.png" },
  { id: 2, name: "HP", image: "https://img.icons8.com/color/100/hp.png" },
  { id: 3, name: "VMware", image: "https://img.icons8.com/color/100/vmware.png" },
  { id: 4, name: "Microsoft", image: "https://img.icons8.com/color/100/microsoft.png" },
  { id: 5, name: "Acer", image: acer },
  { id: 6, name: "Quick Heal", image: quickHeal },
  { id: 7, name: "Dell", image: dell },
  { id: 8, name: "Veeam", image: Veeam },
  { id: 9, name: "Veritas", image: Veritas },
  { id: 10, name: "Cisco", image: Cisco },
  { id: 11, name: "Matrix", image: Matrix },
  { id: 12, name: "Samsung", image: "https://img.icons8.com/color/100/samsung.png"  },
  { id: 13, name: "Sophos", image: sophos },
  { id: 14, name: "Fortinet", image: fortinet },
  { id: 15, name: "Targus", image: targus },
  { id: 16, name: "Symantec", image: symantec },
];

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  },
  alliancesContainer: {
    textAlign: 'center',
    width: '80%',
    marginTop: '10px',
    marginBottom:'20px'
  },
  subHeading:{
    fontSize: '1.5rem',
    color: '#1A1F71',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '150px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
  },
  partnerImage: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    transition: 'transform 0.3s ease',
  },
  partnerImageHover: {
    transform: 'scale(1.2)',
  },
  partnerName: {
    fontSize: '1rem',
    color: '#1A1F71',
    marginTop: '10px',
  },
};

const Partnership = () => {
  return (
    <div style={styles.body}>
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
      <div style={styles.alliancesContainer}>
      <div className="h1-container pt-3">
        <h1 className="card-title h1-animate"><span style={{ color: '#FC5C39' }}>Our Esteemed Alliance Partners</span> 
        </h1>
      </div>
      <p style={styles.subHeading}>Building Stronger Connections, Together</p>
        <hr />
        <div style={styles.cardsContainer}>
          {partners.map((partner) => (
            <div
              style={styles.card}
              key={partner.id}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={partner.image}
                alt={partner.name}
                style={styles.partnerImage}
                onMouseEnter={(e) => (e.currentTarget.style.transform = styles.partnerImageHover.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={styles.partnerName}>{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnership;