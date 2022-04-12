import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.input};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.input};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.orange};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.md};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
