import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';


const OuterWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px rgba(0,0,0, .1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid; 
  grid-template-rows: .25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px; 
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white ')};

  ${({ flex }) => flex && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = ({ cardType }) => (
  <OuterWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation.
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </OuterWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
