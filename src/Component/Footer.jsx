import { NavLink } from 'react-router-dom';
import { FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="text-white" style={{background:"#042b52"}}>
        <div className="container text-md-left">
            <div className="row text-center text-md-left">
                <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-3">
                    <h4 className="text-uppercase font-weight-bold mb-3" style={{color:"#fd7d60"}}>Encloud IT Solutions</h4>
                    <p>Headquarter: Rasikraj Building , First Floor, C.T.S No. 721/1/14 , Lal Bahadur Shastri Road, Navipeth, Pune - 411030</p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h4 className="text-uppercase font-weight-bold mb-3" style={{color:"#fd7d60"}}>Contact</h4>
                    <p>9823452908</p>
                    <p>8411860720</p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h4 className="text-uppercase font-weight-bold mb-3" style={{color:"#fd7d60"}}>Useful links</h4>
                    <p>
                        <NavLink className="text-white" style={{textDecoration: 'none'}} to="/contactPage">
                            Contact Us
                        </NavLink>
                    </p>
                    <p>
                        <NavLink className="text-white" style={{textDecoration: 'none'}} to="/career">
                            Career
                        </NavLink>
                    </p>
                </div>
            </div>

            <hr/>

            <div className="row">
                <div className="col-md-7 col-lg-8">
                    <p>© Copyright 2025 All rights reserved by: 
                        <span style={{ marginLeft: '5px', color:"#fd7d60", fontSize:"20px" }}>Encloud IT Solutions</span>
                    </p>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            {/* Linkedin Icon */}
                        <li className="list-inline-item">
                            <a
                              href="https://www.linkedin.com/company/encloud-it/?originalSubdomain=in"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#ffffff', fontSize: '24px', textDecoration: 'none' }}
                            >
                              <FaLinkedin />
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

