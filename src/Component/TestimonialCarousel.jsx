import React, { useState, useEffect } from "react";

const testimonials = [
  { id: 1, text: "This service is outstanding!", name: "John Doe" },
  { id: 2, text: "Highly recommend it to everyone!", name: "Jane Smith" },
  { id: 3, text: "Great quality and professionalism.", name: "Michael Brown" },
  { id: 4, text: "Excellent service, will use again.", name: "Emily White" },
  { id: 5, text: "Absolutely fantastic experience.", name: "Chris Green" },
  { id: 6, text: "The team was amazing!", name: "Sarah Lee" },
  { id: 7, text: "Couldn't be happier with the results.", name: "Tom Hanks" },
  { id: 8, text: "Simply the best in the business.", name: "Sophia Turner" },
  { id: 9, text: "Incredible attention to detail.", name: "William Scott" },
  { id: 10, text: "Professional and friendly service.", name: "Liam Brown" },
  { id: 11, text: "Incredible attention to detail.", name: "William Scott" },
  { id: 12, text: "Professional and friendly service.", name: "Liam Brown" },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4; // Number of cards to show at a time

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Move every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage < testimonials.length
        ? prevIndex + cardsPerPage
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerPage >= 0
        ? prevIndex - cardsPerPage
        : testimonials.length - cardsPerPage
    );
  };

  const currentCards = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
      maxWidth: "auto",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
    },
    card: {
      flex: "1",
      margin: "10px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    },
    text: {
      fontSize: "1rem",
      color: "#555",
      fontStyle: "italic",
    },
    name: {
      fontSize: "1.1rem",
      fontWeight: "bold",
      marginTop: "10px",
      color: "#1A1F71",
    },
    arrowButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#FC5C39",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "20px",
      zIndex: 2,
    },
    leftArrow: {
      left: "-25px",
    },
    rightArrow: {
      right: "-25px",
    },
  };

  return (
    <div className="pt-5">
      <h1 className="text-center">Client's <span style={{color:"#FC5C39"}}>Testimonials</span></h1>
      <div style={styles.container}>
      <div className="d-flex flex-wrap justify-content-center">
        {currentCards.map((testimonial) => (
          <div key={testimonial.id} style={styles.card}>
            <p style={styles.text}>"{testimonial.text}"</p>
            <h5 style={styles.name}>- {testimonial.name}</h5>
          </div>
        ))}
      </div>
      <button
        style={{ ...styles.arrowButton, ...styles.leftArrow }}
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        style={{ ...styles.arrowButton, ...styles.rightArrow }}
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
    </div>
    
  );
};

export default TestimonialCarousel;
