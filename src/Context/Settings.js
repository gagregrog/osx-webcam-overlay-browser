import React, { createContext, useEffect } from 'react';
import { useSettingsHandler } from '../Hooks/settings';

export const settingsContext = createContext();

const SettingsProvider = ({children}) => {
  const settings = useSettingsHandler();

  useEffect(settings.getInitial, []);

  return (
    <settingsContext.Provider value={settings}>
      {children}
    </settingsContext.Provider>
  )
};

export default SettingsProvider;
