import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';

interface HooksProvidersProps {
  children: React.ReactNode;
}

export default function HooksProviders({ children }: HooksProvidersProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
