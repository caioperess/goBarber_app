import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.lg};
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  margin: 64px 0 24px;
`;
