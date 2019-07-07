import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  padding: 0.5rem 1rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;

  @media (max-width: 440px) {
    font-size: 2.5rem;
  }

  @media (max-width: 330px) {
    font-size: 1.5rem;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 258px) {
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem;
  }
`;

export default Logo;
