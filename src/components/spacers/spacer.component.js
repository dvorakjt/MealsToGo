import styled from 'styled-components/native';

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariants = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

const getVariant = (position, size, theme) =>
  `${positionVariants[position]}:${theme.space[sizeVariants[size]]};`;

export const Spacer = styled.View`
${({position, size, theme}) => getVariant(position, size, theme)}}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
