import React from 'react';
import ImageSlider from './ImageSlider';
import WelcomePage from './WelcomePage';
import TechStackItem from './TechStackItem';
import WhyChooseUs from './WhyChooseUs';
import Allfeatures from './Allfeatures';
import CustomerSays from './CustomerSays';
import Slider from './Slider';
import ChatIconComponent from './ChatIconComponent';
import Sections from './Sections';


const Home = () => {
  const slides = [
    {
      image: 'https://images.pexels.com/photos/11751212/pexels-photo-11751212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Slide 1 Title',
      description: 'Slide 1 Description...',
    },
    {
      image: 'https://images.pexels.com/photos/11751212/pexels-photo-11751212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Slide 2 Title',
      description: 'Slide 2 Description...',
    },
    {
      image: 'https://images.pexels.com/photos/11751212/pexels-photo-11751212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Slide 3 Title',
      description: 'Slide 3 Description...',
    },
  ];

  return (
    <div className="App">
      
      <ImageSlider slides={slides} />
      <WelcomePage/>
      <TechStackItem/>
      <WhyChooseUs/>
      <Allfeatures/>
      <CustomerSays/>
      <Slider/>
      <Sections/>
      <ChatIconComponent/>
    </div>
    
  );
};

export default Home;
