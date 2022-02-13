import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const SIZE = {
    "small": {
      fontSize: 14,
      iconSize: 16,
      paddingLeft: 24
    },
    "large": {
      fontSize: 18,
      iconSize: 24,
      paddingLeft: 36
    }
  }
  return <Wrapper>
          <NativeInput style={
            {
              "--width": width+"px", 
              "--fontSize": (SIZE[size].fontSize/16)+"rem",
              "--paddingLeft":SIZE[size].paddingLeft+"px"
            }} 
            placeholder={placeholder} />
          <IconWrapper>
            <Icon id={icon} strokeWidth={1} size={SIZE[size].iconSize} />
          </IconWrapper>
          <VisuallyHidden>{label}</VisuallyHidden>
        </Wrapper>
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${COLORS.black};
  width: max-content;
`;

const NativeInput = styled.input`
  border: none;
  padding-left: var(--paddingLeft);
  width: var(--width);
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 4px;
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
  left: 0;
  bottom: 0;
  margin: auto;
  color: ${COLORS.gray700};
  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
