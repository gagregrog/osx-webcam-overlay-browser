import React from 'react';
import { useSettings } from '../Hooks/context';

const Main = () => {
  const settings = useSettings();

  return (
    <div>
      Resolution: {JSON.stringify(settings.resolution)}
    </div>
  );
};

export default Main;
