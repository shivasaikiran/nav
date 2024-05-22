import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 50px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
`;

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Feature = styled.div`
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.i`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${(props) => props.color};
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
`;

const features = [
  { icon: '🚀', color: '#007bff', text: 'Fast and Efficient' },
  { icon: '⚙️', color: '#28a745', text: 'Robust Performance' },
  { icon: '🎨', color: '#dc3545', text: 'Beautiful Design' },
  { icon: '💬', color: '#ffc107', text: 'Responsive Support' },
  { icon: '🛡️', color: '#17a2b8', text: 'Secure Solutions' },
  { icon: '🌐', color: '#6610f2', text: 'Global Presence' },
];

const Allfeatures = () => {
  return (
    <Container>
      <SectionTitle>Our Features</SectionTitle>
      <FeatureContainer>
        {features.map((feature, index) => (
          <Feature key={index}>
            <Icon color={feature.color}>{feature.icon}</Icon>
            <Description>{feature.text}</Description>
          </Feature>
        ))}
      </FeatureContainer>
    </Container>
  );
};

export default Allfeatures;
