import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 0;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 18px;
  margin-right: 8px;
  color: #007bff;
`;

const IconLink = styled.a`
  font-size: 24px;
  color: #fff;
  margin-right: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const ArrowIcon = styled.span`
  font-size: 14px;
  margin-right: 5px;
  color: #007bff;
`;
const Copyright = styled.p`
  font-size: 14px;
  margin-top: 30px;
  text-align:center;
`;

const Sections = () => {
  const sections = [
    {
      title: 'COMPANY',
      items: [
        { label: 'About Us', link: '/about', icon:<IoIosArrowForward/>},
        { label: 'Our Services', link: '/services', icon:<IoIosArrowForward/> },
        { label: 'Career', link: '/career', icon:<IoIosArrowForward/> },
        { label: 'Portfolio', link: '/portfolio', icon:<IoIosArrowForward/> },
        { label: 'Contact Us', link: '/contact' , icon:<IoIosArrowForward/>},
      ],
    },
    {
      title: 'AUTOMATION',
      items: [
        { label: 'Data Analyst', link: '/data-analyst', icon:<IoIosArrowForward/> },
        { label: 'Data Science', link: '/data-science', icon:<IoIosArrowForward/> },
        { label: 'Machine Learning', link: '/machine-learning', icon:<IoIosArrowForward/> },
        { label: 'Artificial Intelligence', link: '/ai', icon:<IoIosArrowForward/> },
        { label: 'Automation Task', link: '/automation-task', icon:<IoIosArrowForward/> },
      ],
    },
    {
      title: 'CONTACT US',
      items: [
        { label: 'B-8, Sector-2, Noida, UP (201301)', icon: <FaMapMarkerAlt /> },
        { label: '8287212406', icon: <FaPhone /> },
        { label: 'info@webroj.com', icon: <FaEnvelope /> },
      ],
      socialIcons: [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
        { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
      ],
    },
  ];

  return (
    <FooterContainer>
      <SectionContainer>
        {sections.map((section, index) => (
          <Section key={index}>
            <SectionTitle>{section.title}</SectionTitle>
            <ItemList>
              {section.items.map((item, idx) => (
                <ListItem key={idx}>
                  <Icon>{item.icon}</Icon>
                  {item.link ? (
                    <a href={item.link} style={{ color: '#fff' }}>
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </ListItem>
              ))}
            </ItemList>
            {section.socialIcons && (
              <ItemList>
                {section.socialIcons.map((social, idx) => (
                  <ListItem key={idx}>
                    <IconLink href={social.link}>{social.icon}</IconLink>
                  </ListItem>
                ))}
              </ItemList>
            )}
          </Section>
        ))}
      </SectionContainer>
      <Copyright>&copy; 2024 Your Company Name. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Sections;
