import { useContext } from 'react';

import { settingsContext } from '../Context/Settings';

export const useSettings = () => {
  const settings = useContext(settingsContext);

  return settings;
};
