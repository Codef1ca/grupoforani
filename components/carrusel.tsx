'use client'

const logos = [
    '/assets/logo1.png',
    '/assets/logo2.png',
    '/assets/logo3.png',
    '/assets/logo4.png',
    '/assets/logo5.png',
    '/assets/logo6.png',
    '/assets/logo1.png',
    '/assets/logo2.png',
    '/assets/logo3.png',
    '/assets/logo4.png',
    '/assets/logo5.png',
    '/assets/logo6.png',
    '/assets/logo1.png',
    '/assets/logo2.png',
    '/assets/logo3.png',
    '/assets/logo4.png',
    '/assets/logo5.png',
    '/assets/logo6.png',
  ];
  
  const Carousel = () => {
    return (
      <div className="carousel">
        <div className="track">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} className="logo" />
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;
  
