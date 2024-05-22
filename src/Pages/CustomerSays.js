import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {  FaStar } from 'react-icons/fa';

const Container = styled.div`
  padding: 50px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
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
  padding: 30px;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
  display:flex;
`;





const Author = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom:10px

  
  ;
  
  
  
  
`;

const CustomerRole = styled.p`
  color: #555;
  margin-bottom: 5px;
`;

const Review = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StarIcon = styled.span`
  color: #ffc107;
  margin-right: 4px;
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
    image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    author: 'John Doe',
    role: 'CEO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5,
  },
  {
    image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    author: 'Jane Smith',
    role: 'Marketing Manager',
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
  },
  {
    image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    author: 'Mike Johnson',
    role: 'Software Engineer',
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    rating: 5,
  },
];

const CustomerSays = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto slide interval (5 seconds)
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const trackWidth = testimonials.length * 100; // Each slide is 100% width
    setTotalWidth(trackWidth);
  }, []);

  const handleNext = () => {
    const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    setTranslate(newIndex * 100); // Translate by the index * 100% (for horizontal slides)
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setTranslate(index * 100); // Translate to the selected index * 100%
  };

  return (
    <Container>
      <SectionTitle>Customer Says</SectionTitle>
      <SliderContainer>
        <SlideTrack totalWidth={totalWidth} translate={translate}>
          {testimonials.map((testimonial, index) => (
            <Slide key={index}>
              <ProfileImage src={testimonial.image} alt={`User ${index + 1}`} />
              
              <Author>{testimonial.author}</Author>
              <CustomerRole>{testimonial.role}</CustomerRole>
              <Review>{testimonial.quote}</Review>
              <RatingContainer>
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <StarIcon key={i}>
                    <FaStar />
                  </StarIcon>
                ))}
              </RatingContainer>
            </Slide>
          ))}
        </SlideTrack>
        <DotContainer>
          {testimonials.map((_, index) => (
            <Dot key={index} active={index === activeIndex} onClick={() => handleDotClick(index)} />
          ))}
        </DotContainer>
      </SliderContainer>
    </Container>
  );
};

export default CustomerSays;
