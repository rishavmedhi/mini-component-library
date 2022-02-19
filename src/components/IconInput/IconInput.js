import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  "small": {
    fontSize: 14,
    iconSize: 16,
    paddingLeft: 24,
    borderWidth: 1,
    height: 24
  },
  "large": {
    fontSize: 18,
    iconSize: 24,
    paddingLeft: 36,
    borderWidth: 2,
    height: 36
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper 
            style={{"--bottomBorderWidth":SIZE[size].borderWidth+"px solid "+COLORS.black
            }}
        >
          <NativeInput style={
            {
              "--width": width+"px", 
              "--fontSize": (SIZE[size].fontSize/16)+"rem",
              "--paddingLeft":SIZE[size].paddingLeft+"px",
              "--bottomBorderWidth":SIZE[size].borderWidth+"px",
              "--height": (SIZE[size].height/16)+"rem"
            }} 
            placeholder={placeholder} />
          <IconWrapper
            style={{"--height": SIZE[size].iconSize+"px"}}
          >
            <Icon id={icon} strokeWidth={1} size={SIZE[size].iconSize} />
          </IconWrapper>
          <VisuallyHidden>{label}</VisuallyHidden>
        </Wrapper>
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: max-content;
`;

const NativeInput = styled.input`
  border: none;
  padding-left: var(--paddingLeft);
  border-bottom: var(--bottomBorderWidth) solid ${COLORS.black};
  height: var(--height);
  width: var(--width);
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 2px;
  font-size: var(--fontSize);
  &:hover{
    color: ${COLORS.black};
  }
  &::placeholder{
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--height);
  color: ${COLORS.gray700};
  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
