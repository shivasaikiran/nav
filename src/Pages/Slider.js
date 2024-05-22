import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import one from '../Images/one.png'

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  width: ${(props) => props.totalWidth}px;
  transition: transform 0.5s ease;
  transform: translateX(-${(props) => props.translate}px);
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const DotContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#007bff' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
`;

const testimonials = [
  {
    image:{one},
  },
  {
    image: 'https://t3.ftcdn.net/jpg/01/22/72/98/240_F_122729880_a4rHgPGiwVktwwsovKfL2iqrd2vM042R.jpg',
  },
  {
    image: 'https://t3.ftcdn.net/jpg/02/36/41/48/240_F_236414864_ZBVSB7yZsdVJ97acLLpAaTxqKrGPIRIh.jpg',
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    // Function to handle automatic sliding
    const slideNext = () => {
      const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
    };

    // Start automatic sliding on desktop view (screen width > 768px)
    if (window.innerWidth > 768) {
      slideIntervalRef.current = setInterval(slideNext, 5000); // Auto slide interval (5 seconds)
    }

    // Cleanup interval on component unmount
    return () => {
      clearInterval(slideIntervalRef.current);
    };
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <SliderContainer>
        <SlideTrack totalWidth={testimonials.length * 100} translate={activeIndex * 100}>
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <SlideImage src={testimonial.image} alt={`Customer ${index + 1}`} />
            </Slide>
          ))}
        </SlideTrack>
        <DotContainer>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              active={index === activeIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotContainer>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
