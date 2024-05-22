import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChatHeart } from 'react-icons/bs';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatIcon = styled(BsChatHeart)`
  width: 60px;
  height: 60px;
  padding: 15px;
  border-radius: 50%;
  background: linear-gradient(135deg, #007bff, #00ccff);
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    padding: 12px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;
`;

const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #007bff, #00ccff);
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatIconComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <ChatIcon onClick={toggleExpanded} />
      <IconContainer expanded={expanded}>
        <ActionIcon>
          <FaWhatsapp size={24} />
        </ActionIcon>
        <ActionIcon>
          <FaPhone size={24} />
        </ActionIcon>
        <ActionIcon onClick={toggleExpanded}>
        <RxCross2 size={24}/>
        </ActionIcon>
      </IconContainer>
    </Container>
  );
};

export default ChatIconComponent;
