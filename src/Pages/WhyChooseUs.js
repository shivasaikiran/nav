import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #333;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Feature = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background-color: #e9ecef;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const WhyChooseUs = () => {
  return (
    <Container>
      <SectionTitle>Why Choose Us?</SectionTitle>
      <GridContainer>
        <Feature>
          <Image src="https://images.pexels.com/photos/15475219/pexels-photo-15475219/free-photo-of-hill-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Feature 1" />
          <Description>
            We provide top-notch services tailored to your needs.
          </Description>
        </Feature>
        <Feature>
          <Image src="https://images.pexels.com/photos/22858523/pexels-photo-22858523/free-photo-of-s-curve-chicago.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Feature 2" />
          <Description>
            Our team consists of experienced professionals.
          </Description>
        </Feature>
        <Feature>
          <Image src="https://images.pexels.com/photos/22880134/pexels-photo-22880134/free-photo-of-a-woman-in-a-hijab-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Feature 3" />
          <Description>
            We prioritize customer satisfaction above all else.
          </Description>
        </Feature>
        <Feature>
          <Image src="https://images.pexels.com/photos/8113964/pexels-photo-8113964.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Feature 4" />
          <Description>
            Our solutions are innovative and cutting-edge.
          </Description>
        </Feature>
      </GridContainer>
    </Container>
  );
};

export default WhyChooseUs;
