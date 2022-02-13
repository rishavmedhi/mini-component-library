import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>{displayedValue}<IconElem id="chevron-down" strokeWidth={1} size={24}/></PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  font-size: ${16/16}rem;
  padding-right: 52px;

  /* when native select is focused and selecting the current element */
  ${NativeSelect}:focus + &{
    /* fallback color */
    outline: 2px auto #212121;
    /* chrome default in MAC */
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + &{
    color: ${COLORS.black};
  }
`;

const IconElem = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  /* no pointer event to work on this element */
  /* can also be solved using z-index */
  pointer-events: none;
`

export default Select;
