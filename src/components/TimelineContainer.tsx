import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1440px;
  max-height: 1080px;
  min-width: 1440px;
  min-height: 1080px;

  border-left: 1px solid #D9D9D9;
  border-right: 1px solid #D9D9D9;
  position: relative;
  top: 0;
  left: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: #D9D9D9;
  }

  &::after  {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 200%;
    background-color: #D9D9D9;
  }
`;

const TimelineContainer = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default TimelineContainer;