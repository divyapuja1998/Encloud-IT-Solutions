import React from 'react';
import Talentica from "../Assets/Talentica.jpg";
import wipropari from "../Assets/wipropari.jpg";
import bioradmedisys from "../Assets/bioradmedisys.jpg";
import decos from "../Assets/decos.png";
import shirke from "../Assets/SHIRKE SILOS.jpg";
import linecraft from "../Assets/linecraft_ai_logo.jpg";
import washim from "../Assets/washim.jpg";
import serum from "../Assets/serum.png";
import mahindra from "../Assets/mahindra.jpg";
import hitachi from "../Assets/hitachi.png";
import schmalz from "../Assets/Schmalz-Logo.png";
import ZGH_logon from "../Assets/ZGH_logon.png";
import dhoot from "../Assets/dhoot.jpg";
import kolte from "../Assets/kolte-patil.png";
import malpani from "../Assets/malpani.webp";
import S4S from "../Assets/S4S Technologies Logo.webp";
import vj from "../Assets/vj.png";
import hyosung from "../Assets/hyosung.jpg";
import tox from "../Assets/tox.png";
import finzly from "../Assets/finzly.webp";
import Mgm from "../Assets/mgm.jpg";
import amphenol from "../Assets/amphenol.svg";
import desoutter from "../Assets/desoutter.jpg";



const partners = [
  { id: 1, name: "Talentica", image: Talentica },
  { id: 2, name: "Wipro PARI", image: wipropari },
  { id: 3, name: "Biorad Medisys", image: bioradmedisys},
  { id: 4, name: "Decos", image: decos },
  { id: 5, name: "SHIRKE SILOS", image: shirke},
  { id: 6, name: "Wipro Linecraft AI", image: linecraft},
  { id: 7, name: "Washim Bank", image: washim },
  { id: 8, name: "Serum Institute of India", image: serum },
  { id: 9, name: "Mahindra Defence", image: mahindra },
  { id: 10, name: "HITACHI", image: hitachi },
  { id: 11, name: "SCHMALZ", image: schmalz },
  { id: 12, name: "Zamil Group", image: ZGH_logon },
  { id: 13, name: "Dhoot Automotive Systems", image: dhoot },
  { id: 14, name: "Kolte Patil", image: kolte },
  { id: 15, name: "Malpani Group", image: malpani },
  { id: 16, name: "S4S Technologies", image: S4S },
  { id: 17, name: "Vilas Javdekar", image: vj },
  { id: 18, name: "HYOSUNG", image: hyosung },
  { id: 19, name: "TOX", image: tox },
  { id: 20, name: "Finzly", image: finzly },
  { id: 21, name: "MGM University", image: Mgm },
  { id: 22, name: "Amphenol", image: amphenol },
  { id: 23, name: "Desoutter", image: desoutter },
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

const Customers = () => {
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
          <h1 className="card-title h1-animate"><span style={{ color: '#FC5C39' }}>Our Customers</span></h1>
        </div>
        <p style={styles.subHeading}>Growing Together with Our Valued Customers</p>
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

export default Customers;