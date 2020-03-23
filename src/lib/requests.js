import { request } from "./util";

export const getSettings = async () => request('/settings');

export const setSettings = async (settings) => request('/settings', { mode: 'put', body: { settings } });

export const clearSetting = async (key) => request(`/setting/${key}`, { mode: 'delete' });

export const setDefaultCamera = async (cameraId) => setSettings({ cameraId });

export const clearDefaultCamera = async () => clearSetting('cameraId');

export const sendImage = async (image) => request('/image', { method: 'post', body: { image }});

export const clearImage = async () => request('/image', { method: 'delete' });
