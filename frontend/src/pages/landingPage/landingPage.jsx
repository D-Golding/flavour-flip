import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// Define the themes
const lightTheme = {
  background: '#f9fafb',
  cardBackground: '#ffffff',
  text: '#1f2937',
  border: '#e5e7eb',
  primary: '#f59e0b',
  primaryHover: '#d97706',
  success: '#d1fae5',
  successText: '#065f46',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
};

const darkTheme = {
  background: '#111827',
  cardBackground: '#1f2937',
  text: '#f9fafb',
  border: '#374151',
  primary: '#f59e0b',
  primaryHover: '#d97706',
  success: '#064e3b',
  successText: '#d1fae5',
  shadow: 'none'
};

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.5s, color 0.5s;
  }
`;

// Styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  color: ${props => props.theme.primary};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.theme.border};
  color: ${props => props.theme.text};
  transition: background-color 0.5s, color 0.5s;
`;

const ThemeIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`;

const MainContent = styled.main`
  flex-grow: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: ${props => props.theme.text};
  opacity: 0.9;
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const CountdownItem = styled.div`
  width: 5rem;
  padding: 1rem;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow};
  transition: background-color 0.5s;

  @media (max-width: 768px) {
    width: 4rem;
    padding: 0.75rem;
  }
`;

const CountdownNumber = styled.div`
  font-size: 1.875rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CountdownLabel = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  opacity: 0.7;
`;

const SubscribeForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SubscribeInput = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 0.5rem 0 0 0.5rem;
  outline: none;
  font-size: 1rem;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  transition: background-color 0.5s, color 0.5s, border-color 0.5s;

  @media (max-width: 480px) {
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.primary};
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }

  @media (max-width: 480px) {
    border-radius: 0.5rem;
    width: 100%;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.success};
  color: ${props => props.theme.successText};
  border-radius: 0.5rem;
  display: inline-block;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

const FeaturePreview = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const RecipeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeCard = styled.div`
  height: 250px;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.cardBackground};
  transform: rotateY(0deg);
  box-shadow: ${props => props.theme.shadow};

  ${RecipeCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${props => props.theme.cardBackground};
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadow};

  ${RecipeCard}:hover & {
    transform: rotateY(0deg);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imageUrl});
`;

const CardTitle = styled.h4`
  padding: 0.75rem;
  font-weight: 500;
`;

const FeatureList = styled.div`
  background-color: ${props => props.theme.cardBackground};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow};
  max-width: 800px;
  margin: 0 auto;
  transition: background-color 0.5s;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const FeatureIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  color: ${props => props.theme.primary};
  flex-shrink: 0;
`;

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: ${props => props.theme.background};
  border-top: 1px solid ${props => props.theme.border};
  margin-top: 2rem;
  transition: background-color 0.5s, border-color 0.5s;
`;

// Main Component
const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email subscription
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Card data with your custom images
  const cardData = [
    {
      id: 1,
      title: "Recipe Cards",
      image: "pic1.jpeg",
      description: "Coming soon: Interactive recipe cards with customizable ingredients and step-by-step instructions!"
    },
    {
      id: 2,
      title: "Meal Planner",
      image: "pic2.jpeg",
      description: "Coming soon: Drag-and-drop meal planning to organize your weekly cooking schedule!"
    },
    {
      id: 3,
      title: "Cooking Timer",
      image: "pic3.jpeg",
      description: "Coming soon: Interactive cooking timers to help you prepare multiple dishes with perfect timing!"
    }
  ];

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        {/* Header */}
        <Header>
          <Logo>
            <LogoIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </LogoIcon>
            <h1>Flavour Flip</h1>
          </Logo>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? (
              <ThemeIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </ThemeIcon>
            ) : (
              <ThemeIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </ThemeIcon>
            )}
          </ThemeToggle>
        </Header>

        {/* Main Content */}
        <MainContent>
          <Hero>
            <HeroTitle>Something Delicious is Cooking</HeroTitle>
            <Subtitle>
              Our interactive recipe manager is almost ready! Get notified when we launch and start creating amazing meals with ease.
            </Subtitle>

            {/* Countdown Timer */}
            <Countdown>
              <CountdownItem>
                <CountdownNumber>{timeLeft.days}</CountdownNumber>
                <CountdownLabel>Days</CountdownLabel>
              </CountdownItem>
              <CountdownItem>
                <CountdownNumber>{timeLeft.hours}</CountdownNumber>
                <CountdownLabel>Hours</CountdownLabel>
              </CountdownItem>
              <CountdownItem>
                <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
                <CountdownLabel>Minutes</CountdownLabel>
              </CountdownItem>
              <CountdownItem>
                <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
                <CountdownLabel>Seconds</CountdownLabel>
              </CountdownItem>
            </Countdown>

            {/* Subscription Form */}
            <SubscribeForm onSubmit={handleSubmit}>
              <SubscribeInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscribeButton type="submit">
                Notify Me
              </SubscribeButton>
            </SubscribeForm>

            {isSubscribed && (
              <SuccessMessage>
                Thanks! We'll notify you when we launch.
              </SuccessMessage>
            )}
          </Hero>

          {/* Feature Preview with Your Custom Images */}
          <FeaturePreview>
            <SectionTitle>Preview Our Features</SectionTitle>
            <RecipeCards>
              {cardData.map(card => (
                <RecipeCard key={card.id}>
                  <CardFront>
                    <CardImage imageUrl={card.image} />
                    <CardTitle>{card.title}</CardTitle>
                  </CardFront>
                  <CardBack>
                    <p>{card.description}</p>
                  </CardBack>
                </RecipeCard>
              ))}
            </RecipeCards>
          </FeaturePreview>

          {/* Feature List */}
          <FeatureList>
            <SectionTitle>What to Expect</SectionTitle>
            <Features>
              <FeatureItem>
                <FeatureIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </FeatureIcon>
                <span>Recipe cards with flip animations</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </FeatureIcon>
                <span>Drag-and-drop meal planning</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </FeatureIcon>
                <span>Responsive food photography</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </FeatureIcon>
                <span>Ingredient quantity adjuster</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </FeatureIcon>
                <span>Interactive cooking timers</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </FeatureIcon>
                <span>Dark/light mode with transitions</span>
              </FeatureItem>
            </Features>
          </FeatureList>
        </MainContent>

        {/* Footer */}
        <Footer>
          <p>&copy; {new Date().getFullYear()} Flavour Flip. All rights reserved.</p>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default ComingSoon;