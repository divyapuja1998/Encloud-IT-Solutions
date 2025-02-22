import React from 'react'
import { FaServer, FaMoneyBillWave, FaChalkboardTeacher } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BiSupport } from "react-icons/bi";


const OurServices = () => {
  return (
    <div style={{backgroundColor: '#f4f4f4' }}>
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
            transform: scale(1.03);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .card-icon {
            transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 70px;
            color: #FC5C39;
          }

          .card-icon:hover {
            transform: scale(1.2);
          }
        `}
      </style>
    <div className='main py-4' style={{width:'80%', margin:'0 auto'}}>
      <h1 className="h1-animate" style={{textAlign: 'center' }}><span style={{ color: '#FC5C39' }}>Our Services</span></h1>
      <p style={{ textAlign: 'center',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      EnCloud IT provides End to End services to cover your complete IT infrastructure, we have the right skill sets and specialized resources to take care of your workloads as well as Infrastructure. 
      We can help you with product warranties, software support and subscription renewals. Extended warranties, health check services, remote technical support, uptime assurance contracts and warranty management.
      </p>
    <div className="py-4">
    <div className="row row-cols-1 row-cols-md-3 g-4">
     <div className="col">
              <div className="card h-100 mx-3 py-2 border-0 shadow" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <FaServer />
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Managed Services</h5>
                  <hr/>
                  <p>
                  We always believe in a focused approach towards customer support. Over the years, processes and systems have been driven by facility team for each service customized for each customer. These processes and systems allow Organization to focus on their Core competencies.
                    We provide Annual maintenance contract services for your complete IT Infrastructure. We do provide Facility Management services by providing skilled manpower and required tools to keep the lights on. 
                  </p>
                </div>
              </div>
      </div>

      <div className="col">
              <div className="card h-100 mx-3 py-2 border-0 shadow" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <FaMoneyBillWave />
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Financial Services</h5>
                  <hr/>
                  <p>We provide financial services from our Finance Partners who provide financial services for IT Products. We provide services like Rental, Leasing, Operation Leasing or capex buying.</p>
                </div>
              </div>
      </div>

      <div className="col">
              <div className="card h-100 mx-3 py-2 border-0 shadow" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <MdWorkOutline />
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Professional services</h5>
                  <hr/>
                  <p><strong>1.</strong> Health check Services</p>
                  <p><strong>2.</strong> Remote technical support</p>
                  <p><strong>3.</strong> On call Services </p>
                  <p><strong>4.</strong> One time Implement Services</p>
                  <p><strong>5.</strong> Security Audit Services</p>
                </div>
              </div>
      </div>

      <div className="col">
              <div className="card h-100 mx-3 py-2 border-0 shadow" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <FaChalkboardTeacher/>
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71"}}>Consulting Services</h5>
                  <hr/>
                  <p>
                  In today's tech-driven world, managing outdated systems and a backlog of projects can hinder progress. We integrate IT into your business strategy to unlock opportunities like entering new markets, increasing market share, or boosting revenue. Our approach includes: 
                  </p>
                  <p><strong>1. Listening to Your Needs:</strong> Understanding your improvement areas, goals, and desired results to craft a tailored IT strategy.</p>
                  <p><strong>2. Aligning Tactics with Objectives:</strong> Developing a technology roadmap that aligns with your business priorities and supports your goals.</p>
                  <p><strong>3. Delivering Customized Solutions:</strong> Driving your business forward with expertise in business applications, data insights, cloud advancements, and cybersecurity.</p>
                  <p>With a strategic IT roadmap and personalized support, we help propel your enterprise toward success.</p>
                </div>
              </div>
      </div>
      <div className="col">
              <div className="card h-100 mx-3 py-2 border-0 shadow" style={{ borderRadius: "25px"}} >
                <div className="card-body">
                  <div className="card-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "70px", color: "#FC5C39" }}>
                    <BiSupport /> 
                  </div>
                  <h5 className="card-title text-center pt-3" style={{ color: "#1A1F71" }}>Warranty and Support Services</h5>
                  <hr/>
                  <p>Encloud Provide comprehensive warranty services to cover your IT infrastructure from sudden breakdowns, or when unexpected breakdowns are not forecasted. Also we ensure to keep your business running. We ensure that your IT infrastructure gives you the best return on investment and works flawlessly.</p>
                  <p>Our warranty services protect your infrastructure from accidental damage, disaster recovery, advanced replacement, software support agreements, installation service, and data center maintenance. Our warranty services will enable the best of IT practices within your organization, which will remove your IT maintenance obligation and will ensure lasting returns on all your IT investment.</p>
                </div>
              </div>
      </div>
      
    </div>
    </div>
      
    </div>
    </div>
  )
}

export default OurServices
