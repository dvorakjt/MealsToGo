import React from 'react';
import styled, {useTheme} from 'styled-components/native';

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariants = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

const getVariant = (position, size, theme) =>
  `${positionVariants[position]}:${theme.space[sizeVariants[size]]};`;

const SpacerView = styled.View`
  ${({variant}) => variant};
`;

export const Spacer = ({position, size, children}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
