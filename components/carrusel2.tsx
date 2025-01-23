'use client'

const logos = [
    '/assets/sello-aseg1.png',
    '/assets/sello-aseg2.png',
    '/assets/sello-aseg3.png',
    '/assets/sello-aseg4.png',
    '/assets/sello-aseg5.png',
    '/assets/sello-aseg6.png',
    '/assets/sello-aseg7.png',
    '/assets/sello-aseg8.png',
    '/assets/sello-aseg9.png',
    '/assets/sello-aseg10.png',
    '/assets/sello-aseg11.png',
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
  
