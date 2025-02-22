import image5 from '../Assets/blueBackground.jpg';
import mobile from '../Assets/Infra4.jpeg'
import security from '../Assets/security.jpg'
import cloud from '../Assets/cloud.jpg'

const BusinessContinuity = () => {
  const cardImageStyle = {
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
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

            .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .card:hover {
            transform: scale(1.01);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <div className="h1-container pt-3">
        <h1 className="h1-animate">
          <span style={{ color: '#FC5C39' }}>Business Continuity Services</span>
        </h1>
      </div>
      <div className='main py-4' style={{width:'90%', margin:'0 auto'}}>
        <div className="Background py-4"style={{ backgroundImage: `url(${image5})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition: 'center' }}>
          <div className='mx-3'>
            <p className='text-light'>EnCloud IT Provides multiple solutions for Business continuity like high availability, disaster recovery management, data protection, backup solutions etc. We help our customers to achieve maximum uptime and  keep their business running hassle-free. With automation for running the workloads customer can focus on their productivity and customer success.</p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 pt-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card h-100 mx-3 px-2 py-2">
                <img src={cloud} className="card-img-top" alt="Service 1" style={cardImageStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}/>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{ color: "#1A1F71" }}>Disaster Recovery Solutions</h5>
                  <p className="card-text">Irrespective of the size or scale of the business operations, the most critical asset for your business is data. Thus, the safety of the information is a core business concern for you. It is imperative to seek solutions to mitigate risks due to catastrophic disasters. Therefore, investment in disaster recovery solutions will ensure the security of your mission-critical data.</p>
                  <p className="card-text">We at EnCloud IT offer you disaster recovery (DR) Solutions and Services which are backed by world-class infrastructure. The DR solutions offered by us are at multiple levels depending on criticality levels requiring Business Continuity when your IT Infrastructure at your primary Data Center is unavailable. In other words, we help you in building a disaster recovery system that is robust and caters to high availability of your IT Infrastructure at Optimum performance levels. We provide end-to-end cloud solutions be it Public, Private, or Hybrid cloud.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card h-100 mx-3 px-2 py-2">
                <img src={security} className="card-img-top" alt="security" style={cardImageStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}/>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{ color: "#1A1F71" }}>Data Protection/Backup Solutions</h5>
                  <p className="card-text">EnCloud IT Solutions provides data protection & backup services using various tools & solutions. Failure of your mission-critical data can put your business at risk. Automated Data Backup is the solution to the problem. On-premise Data Backup solutions as part of your overall IT Infrastructure is the way forward. You could also subscribe to Backup as a Service for availing data backup facilities as a service for safeguarding your mission-critical data from disasters.</p>
                  <p className="card-text">These are priced and packaged also keeping in mind the needs of SMB enterprises. Backup as a Service Solution from us is easy to start and manage, cost-effective cost-effective, and offers complete data protection / data backup. We work with best-in-the-industry solution providers to achieve your data protection solutions.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card h-100 mx-3 px-2 py-2">
                <img src={mobile} className="card-img-top" alt="Service 3" style={cardImageStyle}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}/>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{ color: "#1A1F71" }}>Datacenter Infrastructure Management</h5>
                  <p className="card-text">Data center monitoring provides insights and visibility into the health and status of your data centers by tracking specific metrics in real time and sending alerts or notifications when readings exceed or fall below the set thresholds. Data Center Infrastructure Management (DCIM) software is used to monitor, measure, and manage data centers, covering both IT equipment and supporting infrastructure such as power and cooling systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessContinuity
