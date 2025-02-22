import React from 'react'

const Careers = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <div style={{ lineHeight: '1.6', padding: '20px', width:'90%', margin:'0 auto' }}>
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
       <h1  className="h1-animate" style={{ textAlign: 'center',display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FC5C39', fontWeight: 'bold' }}>
        Career
      </h1>

      <section>
        <h2 style={{ color: "#1A1F71" }}>Why Join Encloud ?</h2>
        <p>At <strong>Encloud</strong>, our success is driven by our people. Join a diverse, inclusive, and innovative team where your ideas are valued, and you can thrive.</p>
        <p>Registered with multiple OEMs and the industry associations in recent years, we foster a collaborative environment that supports professional growth and celebrates every achievement.</p>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2 style={{ color: "#1A1F71" }}>How to Apply</h2>
        <p>
          Interested in joining our team? Send your resume to one of the emails below, and we will respond within 24 hours:
        </p>
        <ul>
          <li>
            <strong>Email for Sales:</strong>{' '}
            <a href="mailto:sales@encloudits.com">sales@encloudits.com</a>
          </li>
          <li>
            <strong>Email for Support:</strong>{' '}
            <a href="mailto:support@encloudits.com">support@encloudits.com</a>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
};
export default Careers