import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppNavigator />
    </I18nextProvider>
  );
}
