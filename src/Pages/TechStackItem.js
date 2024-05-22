import React, { useState } from 'react';
import styled from 'styled-components';
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

const techData = {
  frontend: [
    { name: 'React', icon: <FaReact size={64} />, color: '#61dafb' },
    { name: 'Vue.js', icon: <FaVuejs size={64} />, color: '#41b883' },
    { name: 'Angular', icon: <FaAngular size={64} />, color: '#dd0031' }
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs size={64} />, color: '#68a063' },
    { name: 'Django', icon: <FaPython size={64} />, color: '#103e2e' }
  ],
  database: [
    { name: 'MongoDB', icon: <FaDatabase size={64} />, color: '#4db33d' },
    { name: 'MySQL', icon: <FaDatabase size={64} />, color: '#00758f' },
    { name: 'PostgreSQL', icon: <FaDatabase size={64} />, color: '#336791' }
  ]
};

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechItem = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechStackItem = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderTechStack = (category) => {
    if (category === 'all') {
      // Display all tech stacks
      return Object.values(techData).flat().map((tech, index) => (
        <TechItem key={index} color={tech.color}>
          {tech.icon}
          <h3>{tech.name}</h3>
        </TechItem>
      ));
    } else {
      // Display specific category tech stacks
      return techData[category].map((tech, index) => (
        <TechItem key={index} color={tech.color}>
          {tech.icon}
          <h3>{tech.name}</h3>
        </TechItem>
      ));
    }
  };

  return (
    <div>
      <StyledTitle>Tech Stack</StyledTitle>
      <ButtonGroup>
        <Button onClick={() => handleCategoryClick('all')}>All</Button>
        <Button onClick={() => handleCategoryClick('frontend')}>Frontend</Button>
        <Button onClick={() => handleCategoryClick('backend')}>Backend</Button>
        <Button onClick={() => handleCategoryClick('database')}>Database</Button>
      </ButtonGroup>

      <TechStackContainer>
        {renderTechStack(selectedCategory)}
      </TechStackContainer>
    </div>
  );
};

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export default TechStackItem;
