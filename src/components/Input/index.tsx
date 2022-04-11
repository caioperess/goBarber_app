import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

function Input({ icon, name, ...rest }: InputProps) {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        {...rest}
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
      />
    </Container>
  );
}

export default Input;
