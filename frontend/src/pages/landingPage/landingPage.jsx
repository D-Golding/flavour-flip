import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// Import images and videos
import food1 from '../../assets/food1.jpeg';
import food2 from '../../assets/food2.jpeg';
import food3 from '../../assets/food3.jpeg';
import food4 from '../../assets/food4.jpeg';
import food5 from '../../assets/food5.jpeg';
import food6 from '../../assets/food6.jpeg';
import foodvid1 from '../../assets/foodvid1.mov';

// Custom icons
const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconUtensils = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
    <path d="M7 2v20"></path>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
  </svg>
);

const IconShoppingBag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const IconSliders = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

// Theme definition - same as flavourFlip.jsx
const themes = {
  light: {
    primary: '#E76F51',     // Terra cotta
    secondary: '#F4A261',   // Sandy brown
    accent1: '#E9C46A',     // Khaki
    accent2: '#2A9D8F',     // Persian green
    light: '#FFFFFF',
    background: '#F8F9FC',
    text: '#2A2C3E',
    textLight: '#6C6F82',
    card: '#FFFFFF',
    border: '#E2E5EF'
  },
  dark: {
    primary: '#E76F51',
    secondary: '#F4A261',
    accent1: '#E9C46A',
    accent2: '#2A9D8F',
    light: '#FFFFFF',
    background: '#121318',
    text: '#E2E5EF',
    textLight: '#A0A4B8',
    card: '#1E1F26',
    border: '#2D2F3B'
  }
};

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    scroll-behavior: smooth;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }

  button {
    font-family: 'Inter', sans-serif;
  }
  
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  
  @keyframes pulse {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes flip {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(180deg); }
  }
  
  @keyframes flipBack {
    0% { transform: rotateY(180deg); }
    100% { transform: rotateY(0deg); }
  }
  
  @keyframes countdown {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

// Container styles
const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.text};
  line-height: 1.6;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Header styles
const SubHeader = styled.header`
  position: relative;
  z-index: 10;
  padding: 20px 0;
  background-color: ${props => `${props.theme.background}E6`};
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease;
`;

const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const NavLink = styled.a`
  margin-left: 30px;
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }
  
  svg {
    stroke-width: 2px;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.textLight};
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 8px;
  margin-left: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    color: ${props => props.theme.text};
  }
`;

// Hero section styles
const HeroSection = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;
`;

const HeroVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
  text-align: center;
  color: ${props => props.theme.light};
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(231,111,81,0.4) 100%);
  z-index: 1;
`;

const TitleIcon = styled.div`
  font-size: 24px;
  color: ${props => props.theme.light};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  
  svg {
    animation: float 3s ease-in-out infinite;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(to right, 
    ${props => props.theme.primary}, 
    ${props => props.theme.secondary}, 
    ${props => props.theme.accent1}, 
    ${props => props.theme.accent2});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 30px rgba(231, 111, 81, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.accent2});
    border-radius: 2px;
  }
`;

const PageSubtitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: ${props => props.theme.light};
  margin-bottom: 30px;
  font-weight: 400;
  letter-spacing: 0.5px;
  max-width: 700px;
  margin: 0 auto;
`;

// Main content styling
const IntroText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${props => props.theme.text};
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
`;

// Countdown section
const CountdownSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 40px 0;
`;

const CountdownItem = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.card};
  box-shadow: 0 8px 30px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
  border-radius: 16px;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(231, 111, 81, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const CountdownNumber = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.theme.primary};
  animation: ${props => props.animate ? 'pulse 1s infinite' : 'none'};
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CountdownLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.textLight};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;
`;

// Subscription form
const SubscriptionSection = styled.div`
  margin: 60px 0;
  text-align: center;
`;

const SubscriptionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
`;

const SubscriptionText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textLight};
  max-width: 600px;
  margin: 0 auto 30px;
`;

const SubscriptionForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SubscriptionInput = styled.input`
  flex: 1;
  height: 50px;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.card};
  color: ${props => props.theme.text};
  padding: 0 20px;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}30;
  }
  
  @media (max-width: 576px) {
    border-radius: 8px;
  }
`;

const SubscriptionButton = styled.button`
  background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  border: none;
  height: 50px;
  padding: 0 25px;
  border-radius: 0 8px 8px 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${props => props.theme.primary}50;
  }
  
  @media (max-width: 576px) {
    border-radius: 8px;
    justify-content: center;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(to right, ${props => props.theme.accent2}20, ${props => props.theme.accent2}10);
  color: ${props => props.theme.accent2};
  border-radius: 8px;
  display: inline-block;
  border: 1px solid ${props => props.theme.accent2}30;
  animation: pulse 2s infinite;
`;

// Flip cards
const FlipCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin: 60px 0;
`;

const FlipCard = styled.div`
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
`;

const FlipCardFront = styled(FlipCardFace)`
  background-color: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.border};
  
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  
  .content {
    padding: 15px;
  }
  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-bottom: 5px;
    color: ${props => props.theme.text};
  }
`;

const FlipCardBack = styled(FlipCardFace)`
  background-color: ${props => props.theme.card};
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-bottom: 15px;
    color: ${props => props.theme.text};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.textLight};
    margin-bottom: 15px;
  }
  
  ul {
    list-style-position: inside;
    color: ${props => props.theme.textLight};
    font-size: 14px;
    
    li {
      margin-bottom: 5px;
    }
  }
`;

// Feature section
const SectionContainer = styled.section`
  margin: 80px 0;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.text};
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.3s ease;
  
  svg {
    color: ${props => props.theme.secondary};
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, ${props => props.theme.border}, transparent);
    margin-left: 15px;
    transition: background 0.3s ease;
  }
`;

// Feature list
const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin: 40px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: ${props => props.theme.card};
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, ${props => props.isDark ? '0.2' : '0.05'});
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  gap: 15px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
    border-color: rgba(231, 111, 81, 0.3);
  }
`;

const FeatureIcon = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, 
    ${props => props.color || props.theme.primary}20, 
    ${props => props.color || props.theme.secondary}10);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: ${props => props.color || props.theme.primary};
    stroke-width: 1.5px;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin-margin-bottom: 8px;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.theme.textLight};
  margin: 0;
`;

// Testimonial section
const TestimonialSection = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
`;

const TestimonialCard = styled.div`
  max-width: 350px;
  padding: 25px;
  background: ${props => props.theme.card};
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, ${props => props.isDark ? '0.2' : '0.05'});
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, ${props => props.isDark ? '0.3' : '0.1'});
    border-color: rgba(231, 111, 81, 0.3);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  font-style: italic;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 60px;
    color: ${props => props.theme.primary}20;
    position: absolute;
    top: -30px;
    left: -10px;
    font-family: serif;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  
  svg {
    color: ${props => props.theme.primary};
  }
`;

const TestimonialInfo = styled.div`
  text-align: left;
`;

const TestimonialName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
  color: ${props => props.theme.text};
`;

const TestimonialRole = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textLight};
`;

// Footer styling
const Footer = styled.footer`
  margin-top: 80px;
  padding: 40px 0 20px;
  text-align: center;
  color: ${props => props.theme.textLight};
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.primary}, ${props => props.theme.accent2});
    border-radius: 3px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.textLight};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

// Main component
function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Toggle dark mode function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('flavourFlipDarkMode', (!isDarkMode).toString());
  };

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('flavourFlipDarkMode');
    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  // Get current theme based on dark mode state
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Feature card data - user-focused benefits
  const featureCards = [
    {
      id: 1,
      title: "Interactive Recipe Cards",
      image: food1,
      description: "Discover a new way to follow recipes with interactive cards that provide step-by-step guidance and easy measurement conversions.",
      details: [
        "Simple flip animations for ingredients and instructions",
        "One-tap measurement conversions (metric/imperial)",
        "Cooking time estimations",
        "Difficulty indicators"
      ]
    },
    {
      id: 2,
      title: "Meal Planning Calendar",
      image: food2,
      description: "Plan your weekly meals with our intuitive drag-and-drop calendar, helping you save time and reduce food waste.",
      details: [
        "Drag-and-drop recipe scheduling",
        "Automatic shopping list generation",
        "Nutritional balance overview",
        "Meal prep suggestions"
      ]
    },
    {
      id: 3,
      title: "Smart Shopping Lists",
      image: food3,
      description: "Get intelligent shopping lists that combine ingredients from all your planned recipes, organized by store section for efficient shopping.",
      details: [
        "Automatic ingredient combining",
        "Store section organization",
        "Pantry integration to avoid buying what you have",
        "Mobile-friendly shopping mode"
      ]
    },
    {
      id: 4,
      title: "Cooking Timers",
      image: food4,
      description: "Never overcook again with our multi-timer system that keeps track of different components of your meal simultaneously.",
      details: [
        "Multiple concurrent timers",
        "Visual and audio notifications",
        "Recipe-synced timing suggestions",
        "Voice control options"
      ]
    },
    {
      id: 5,
      title: "Serving Size Adjustment",
      image: food5,
      description: "Easily scale recipes up or down with our intelligent ingredient calculator that maintains perfect proportions.",
      details: [
        "One-click serving adjustments",
        "Smart rounding for measurements",
        "Equipment size recommendations",
        "Cooking time adjustments"
      ]
    },
    {
      id: 6,
      title: "Recipe Discovery",
      image: food6,
      description: "Find the perfect recipes based on ingredients you already have, dietary preferences, and seasonal availability.",
      details: [
        "Ingredient-based search",
        "Dietary filter options",
        "Seasonal recommendations",
        "International cuisine exploration"
      ]
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      quote: "Flavour Flip has completely transformed my weekly meal planning. I used to waste so much food, but now everything is organized and I actually enjoy cooking again!",
      name: "Emma R.",
      role: "Busy Parent"
    },
    {
      quote: "The recipe scaling feature is a game-changer. I no longer have to do complex math when cooking for my large family gatherings or when making smaller portions just for myself.",
      name: "David T.",
      role: "Home Cook Enthusiast"
    },
    {
      quote: "I love how the shopping lists combine ingredients from different recipes. It saves me so much time at the grocery store and I never forget items anymore.",
      name: "Sophia L.",
      role: "Fitness Coach"
    }
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <PageContainer>
        <SubHeader>
          <NavMenu>
            <NavLink href="#features"><IconUtensils size={16} /> Features</NavLink>
            <NavLink href="#testimonials"><IconHeart size={16} /> Testimonials</NavLink>
            <NavLink href="#signup"><IconUsers size={16} /> Join Waitlist</NavLink>
            <ThemeToggle onClick={toggleTheme} isDark={isDarkMode}>
              {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
            </ThemeToggle>
          </NavMenu>
        </SubHeader>

        <HeroSection>
          <HeroVideo>
            <video
              src={foodvid1}
              autoPlay
              loop
              muted
              playsInline
            />
          </HeroVideo>
          <HeroOverlay />
          <HeroContent>
            <TitleIcon><IconUtensils size={32} /></TitleIcon>
            <PageTitle>FLAVOUR FLIP</PageTitle>
            <PageSubtitle>Transform Your Cooking Experience with Smart Recipe Management</PageSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentContainer>
          <IntroText>
            Something delicious is cooking! Flavour Flip is a revolutionary recipe management app that will transform
            how you plan, shop for, and cook your meals. Our interactive tools make cooking more enjoyable, efficient,
            and stress-free.
          </IntroText>

          <CountdownSection>
            <CountdownItem isDark={isDarkMode}>
              <CountdownNumber animate={timeLeft.days <= 5}>{timeLeft.days}</CountdownNumber>
              <CountdownLabel>Days</CountdownLabel>
            </CountdownItem>
            <CountdownItem isDark={isDarkMode}>
              <CountdownNumber>{timeLeft.hours}</CountdownNumber>
              <CountdownLabel>Hours</CountdownLabel>
            </CountdownItem>
            <CountdownItem isDark={isDarkMode}>
              <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
              <CountdownLabel>Minutes</CountdownLabel>
            </CountdownItem>
            <CountdownItem isDark={isDarkMode}>
              <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
              <CountdownLabel>Seconds</CountdownLabel>
            </CountdownItem>
          </CountdownSection>

          <SubscriptionSection id="signup">
            <SubscriptionTitle>Be the First to Experience Flavour Flip</SubscriptionTitle>
            <SubscriptionText>
              Join our waitlist to receive early access, special offers, and cooking tips while we prepare for launch.
            </SubscriptionText>
            <SubscriptionForm onSubmit={handleSubmit}>
              <SubscriptionInput
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscriptionButton type="submit">
                Join Waitlist <IconSend size={16} />
              </SubscriptionButton>
            </SubscriptionForm>
            {isSubscribed && (
              <SuccessMessage>
                Thank you! You're on the list. We'll be in touch soon with exclusive content.
              </SuccessMessage>
            )}
          </SubscriptionSection>

          <SectionContainer id="features">
            <SectionTitle>
              <IconUtensils size={24} /> Discover What's Coming
            </SectionTitle>
            <FlipCardsContainer>
              {featureCards.map(card => (
                <FlipCard key={card.id}>
                  <FlipCardInner>
                    <FlipCardFront isDark={isDarkMode}>
                      <img src={card.image} alt={card.title} />
                      <div className="content">
                        <h3>{card.title}</h3>
                      </div>
                    </FlipCardFront>
                    <FlipCardBack isDark={isDarkMode}>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      <ul>
                        {card.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </FlipCardBack>
                  </FlipCardInner>
                </FlipCard>
              ))}
            </FlipCardsContainer>
          </SectionContainer>

          <SectionContainer>
            <SectionTitle>
              <IconHeart size={24} /> Why You'll Love Flavour Flip
            </SectionTitle>
            <FeatureList>
              <FeatureItem isDark={isDarkMode}>
                <FeatureIcon color={themes.light.primary}>
                  <IconClock size={24} />
                </FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Save Time</FeatureTitle>
                  <FeatureDescription>
                    Our meal planning and smart shopping tools eliminate repetitive tasks and help you spend less time planning and more time enjoying your meals.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureItem>

              <FeatureItem isDark={isDarkMode}>
                <FeatureIcon color={themes.light.secondary}>
                  <IconShoppingBag size={24} />
                </FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Reduce Food Waste</FeatureTitle>
                  <FeatureDescription>
                    Buy only what you need with our precise shopping lists and ingredient tracking, helping you save money and reduce environmental impact.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureItem>

              <FeatureItem isDark={isDarkMode}>
                <FeatureIcon color={themes.light.accent1}>
                  <IconAward size={24} />
                </FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Build Confidence</FeatureTitle>
                  <FeatureDescription>
                    Clear instructions, timing assistance, and measurement conversions help cooks of all skill levels create impressive dishes with confidence.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureItem>

              <FeatureItem isDark={isDarkMode}>
                <FeatureIcon color={themes.light.accent2}>
                  <IconGlobe size={24} />
                </FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Explore New Cuisines</FeatureTitle>
                  <FeatureDescription>
                    Discover and learn to cook dishes from around the world with our international recipe database and cultural cooking notes.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            </FeatureList>
          </SectionContainer>

          <TestimonialSection id="testimonials">
            <SectionTitle>
              <IconUsers size={24} /> What Our Beta Testers Say
            </SectionTitle>
            <TestimonialContainer>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} isDark={isDarkMode}>
                  <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  <TestimonialAuthor>
                    <TestimonialAvatar>
                      <IconUsers size={20} />
                    </TestimonialAvatar>
                    <TestimonialInfo>
                      <TestimonialName>{testimonial.name}</TestimonialName>
                      <TestimonialRole>{testimonial.role}</TestimonialRole>
                    </TestimonialInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              ))}
            </TestimonialContainer>
          </TestimonialSection>

          <SubscriptionSection>
            <SubscriptionTitle>Ready to Transform Your Cooking Experience?</SubscriptionTitle>
            <SubscriptionText>
              Join thousands of home cooks who are already on the waitlist for Flavour Flip's launch.
            </SubscriptionText>
            <SubscriptionForm onSubmit={handleSubmit}>
              <SubscriptionInput
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscriptionButton type="submit">
                Get Early Access <IconSend size={16} />
              </SubscriptionButton>
            </SubscriptionForm>
          </SubscriptionSection>

          <Footer>
            <FooterText>
              © {new Date().getFullYear()} Flavour Flip - Revolutionizing your kitchen experience
            </FooterText>
            <SocialLinks>
              {/* Social icons would go here */}
            </SocialLinks>
          </Footer>
        </ContentContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default ComingSoon;