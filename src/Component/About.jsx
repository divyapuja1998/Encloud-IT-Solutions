import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Add animation when the component mounts
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`;
    });
  }, []);

  return (
    <div className="body" style={{ backgroundColor: '#f4f4f4' }}>
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
            display: inline-block;
            animation: slideInFromLeft 1s ease-out forwards;
            opacity: 0;
            transform: translateX(-100%);
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .card:hover {
            transform: scale(1.02);
            transition: transform 0.3s ease;
          }
        `}
      </style>
      <div className="main py-3" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="h1-animate" style={styles.title}><span style={{color:"#FC5C39"}}>About Us</span></h1>

        <section className="intro pt-3">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <p style={styles.paragraph}>
                We at <strong>EnCloud IT Solutions</strong> are a bunch of passionate people committed to providing end-to-end IT solutions & services to our esteemed customers. We believe in commitment, hard work, and seamless services.
              </p>
              <p style={styles.paragraph}>
                Our idea is to become the most trusted information technology partner for our customers and clients.
              </p>
            </div>
          </div>
        </section>

        <section className="company-info">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <p style={styles.paragraph}>
                Founded in the year <strong>2020</strong>, we aim to provide the best of IT solutions and services to enterprise customers at large. We are striving to make cloud simple and smart to cater to the needs of our customers.
              </p>
              <p style={styles.paragraph}>
                Today's market demands are cloud, mobility, and security as top priorities, and these are the key drivers for digital transformation. Our goal is to help our customers achieve their digital transformation journey and become a part of their growth.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100" style={styles.card}>
                <div className="card-body">
                  <h2 style={{color:"#1A1F71"}}>Vision</h2>
                  <p>
                    At EnCloud IT Solutions, we strive hard to be the most trusted Information technology partner enabling our customers' convenience of Digital Transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100" style={styles.card}>
                <div className="card-body">
                  <h2 style={{color:"#1A1F71"}}>Mission</h2>
                  <p>
                    Becoming the customer's <strong>Numero Uno</strong> choice of Trusted Advisor, thus helping them make informed decisions. To become the best solution and service provider and help our customers achieve their goals and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

const styles = {
  title: {
    fontWeight: 'bold',
    color: '#111828',
    margin: '0 auto',
    textAlign: 'center', 
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    opacity: '0',
    transform: 'translateY(20px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px',
  },
};
