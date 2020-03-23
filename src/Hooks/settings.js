import { useState, useRef, useCallback, useMemo } from 'react';

import { err } from '../lib/util';
import * as request from '../lib/requests';

export const useSettingsHandler = () => {
  const [resolution, setResolution] = useState({});
  const [defaultCamera, _setDefaultCamera] = useState(null);

  const fetchRef = useRef();

  const get = useCallback(async () => {
    fetchRef.current = true;

    try {
      const {
        resolution: r,
        defaultCamera: d,
      } = await request.getSettings();
      setResolution(r);

      if (d) {
        _setDefaultCamera(d);
      }
    } catch (error) {
      err(error);
    }    
  }, []);

  const getInitial = useCallback(() => {
    if (!fetchRef.current) get();
  }, [get]);

  const setDefaultCamera = useCallback(async (cameraId) => {
    _setDefaultCamera(cameraId);

    try {
      await request.setDefaultCamera(cameraId);
    } catch (error) {
      err(error);
    }
  }, []);

  const clearDefaultCamera = useCallback(async () => {
    _setDefaultCamera(null);

    try {
      await request.clearDefaultCamera();
    } catch (error) {
      err(error);
    }
  }, []);

  const data = useMemo(() => ({
    getInitial,
    resolution,
    defaultCamera,
    setDefaultCamera,
    clearDefaultCamera,
  }), [
    getInitial,
    resolution,
    defaultCamera,
    setDefaultCamera,
    clearDefaultCamera,
  ]);

  return data;
};
