import React from 'react';

import SettingsProvider from '../Context/Settings';

const Provider = ({children}) => (
  <SettingsProvider>
    {children}
  </SettingsProvider>
);

export default Provider;
