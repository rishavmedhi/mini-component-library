/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const style={
    "small": {
      "height": 8,
      "radius": 4,
      "padding": 0,
    },
    "medium": {
      "height": 12,
      "radius": 4,
      "padding": 0,
    },
    "large": {
      "height": 16,
      "radius": 8,
      "padding": 4,
    }
  }
  return <Wrapper
    style={{
      "--padding": style[size].padding+"px",
      "--radius": style[size].radius+"px"
    }} 
    role="progressbar" 
    aria-valuenow={value} 
    aria-valuemin="0" 
    aria-valuemax="100">
      <BarWrapper>
        <Bar style={{
          "--width": value+"%",
          "--height": style[size].height+"px"
        }}/>
      </BarWrapper>
      <VisuallyHidden>{value + " %"}</VisuallyHidden>
    </Wrapper>;
};

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);
   /* follows the curving at edges at high values */
   overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  background-color: ${COLORS.primary};
  height: var(--height);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* for curving at the edges for large variant */
  overflow: hidden;
`;

export default ProgressBar;
