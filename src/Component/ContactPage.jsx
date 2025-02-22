import React, { useEffect, useState , useRef} from "react";
import { FaLinkedin,FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
      setIsTablet(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "40px auto",
      background: "#f0f0f0",
      padding: "20px",
      borderRadius: "10px",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    info: {
      flex: isTablet ? "1" : "1",
      maxWidth: isTablet ? "100%" : "45%",
      background: "#2c3e50",
      color: "white",
      padding: "50px 35px",
      borderRadius: isMobile ? "10px 10px 0 0" : "10px 0 0 10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      flex: isTablet ? "1" : "2",
      maxWidth: isTablet ? "100%" : "55%",
      background: "white",
      padding: "20px",
      borderRadius: isMobile ? "0 0 10px 10px" : "0 10px 10px 0",
    },
    label: {
      display: "block",
      margin: "10px 0 5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    textarea: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      height: "80px",
    },
    button: {
      width: "100%",
      padding: "10px",
      background: "#2c3e50",
      color: "white",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
      borderRadius: "5px",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    icon: {
      fontSize: "20px",
      color: "white",
      cursor: "pointer",
    },
    error: {
      color: "red",
      fontSize: "0.8em",
    },
  };

  const [formData, setFormData] = useState({
      user_name: "",
      user_phone: "",
      user_email: "",
      user_message: "",
    });
    const [message, setMessage] = useState({ text: "", type: "" });
    const [errors, setErrors] = useState({ number: "", email: "" });
    const messageRef = useRef(null); // Create a ref for the message container
  
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      script.onload = () => {
        window.emailjs.init("opgPAaJJ6I6bdOH_D");
      };
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    useEffect(() => {
      // Scroll to the message container when a message is displayed
      if (message.text && messageRef.current) {
        setTimeout(() => {
          messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 10); // Delay to ensure DOM update
      }
    }, [message]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      if (name === "user_phone") {
        const phoneRegex = /^\d{10}$/;
        setErrors((prevErrors) => ({
          ...prevErrors,
          number: phoneRegex.test(value)
            ? ""
            : "Enter a valid phone number with 10 digits",
        }));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (
        Object.values(errors).some((err) => err !== "") ||
        !formData.user_phone ||
        !formData.user_email ||
        !formData.user_name ||
        !formData.user_message
      ) {
        setMessage({
          text: "Please fix the errors in the form before submitting.",
          type: "danger",
        });
        return;
      }
  
      setMessage({ text: "", type: "" });
  
      if (window.emailjs) {
        window.emailjs
          .send("service_d8owlun", "template_5v1gs2y", formData)
          .then(
            () => {
              setMessage({ text: "Message sent successfully!", type: "success" });
              setFormData({
                user_name: "",
                user_phone: "",
                user_email: "",
                user_message: "",
              });
            },
            () => {
              setMessage({
                text: "Failed to send message. Please try again.",
                type: "danger",
              });
            }
          );
      } else {
        setMessage({
          text: "EmailJS SDK not loaded. Please check your script.",
          type: "danger",
        });
      }
    };
  
    const handleEmail = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  
      if (name === "user_email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: emailRegex.test(value) ? "" : "Enter a valid email address",
        }));
      }
    };

  return (
    <div className="py-4" style={{width:'85%', margin:'0 auto'}}>
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
        <div>
        <h1 className="h1-animate" style={{textAlign: 'center' }}><span style={{ color: '#FC5C39' }}>Contact Us</span></h1>
        <p className="pt-3">
          This is the official page of <strong>EnCloud IT Solutions</strong>,
          where you can share all your queries, feedback, complaints, or any
          concern you may have about our services. Please fill out the form,
          submit, and we will get back to you soon.
        </p>
      </div>

      <hr />
      <div style={styles.container}>

{message.text && (
  <div
    ref={messageRef} // Attach the ref to the message container
    className={`alert alert-${message.type} alert-dismissible fade show`}
    role="alert"
  >
    {message.text}
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
  )}

<div style={styles.contentWrapper}>
  <div style={styles.info}>
    <h2 className="mb-4">Get In Touch</h2>
    <p><strong style={{fontSize:"1.2rem"}}>Email</strong><br /> 
    <a href="mailto:sales@encloudits.com"
      style={{
      color: "#ffff",
      textDecoration: "none",
      }}>
      sales@encloudits.com
      </a>
      {" "}/{" "}

    <br/>
  
    <a
      href="mailto:support@encloudits.com"
      style={{
        color: "#ffff",
        textDecoration: "none",
      }}
    >
      support@encloudits.com
    </a>
    </p>
    <p><strong style={{fontSize:"1.2rem"}}>Contact Number</strong><br /> 9823452908 {" "}/{" "}<br/> 8411860720</p>
    <p><strong style={{fontSize:"1.2rem"}}>Address</strong><br /> Rasikraj Building , First Floor, C.T.S No. 721/1/14 , Lal Bahadur Shastri Road, Navipeth, Pune - 411030</p>
    <div style={styles.socialIcons}>
      <a href="https://www.linkedin.com/company/encloud-it/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={styles.icon} />
      </a>
      <a href="https://www.google.com/maps/place/Encloud+IT+Solution/@18.5061522,73.8443245,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1ba9282db11:0x23869a4bdc2c1fa5!8m2!3d18.5061522!4d73.8443245!16s%2Fg%2F11qg5p5k9f?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D" 
      target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt style={styles.icon} />
      </a>
    </div>
  </div>
  <div style={styles.formContainer}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" style={styles.label}>Name</label>
      <input 
      type="text" 
      id="name"
      name="user_name"
      value={formData.user_name}
      onChange={handleChange}
      placeholder="Enter your Name" 
      required 
      style={styles.input} />
      
      <label htmlFor="number"  style={styles.label}>Contact Number</label>
      <input type="tel" 
      id="number"
      name="user_phone"
      value={formData.user_phone}
      onChange={handleChange}
      maxLength={10}
      placeholder="Enter your Contact Number" 
      required 
      style={styles.input} />
      {errors.number && <p style={styles.error}>{errors.number}</p>}

      <label htmlFor="email" style={styles.label}>Email</label>
      <input type="email" 
      placeholder="Enter your Email" 
      id="email"
      name="user_email"
      value={formData.user_email}
      onChange={handleEmail}
      required 
      style={styles.input} />
      {errors.email && <p style={styles.error}>{errors.email}</p>}
      
      <label htmlFor="message"  style={styles.label}>Message</label>
      <textarea 
      id="message"
      name="user_message"
      value={formData.user_message}
      onChange={handleChange}
      rows="4"
      placeholder="Enter your Message..." 
      required 
      style={styles.textarea}></textarea>
      
      <button type="submit" style={styles.button}>Send →</button>
    </form>
  </div>
</div>
</div>
    </div>
  );
};

export default ContactForm;
