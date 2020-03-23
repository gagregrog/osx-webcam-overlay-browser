export const err = (error, ...rest) => {
  console.error('[ERROR]', error.message || error, ...rest);
  if (error.stack) {
    console.log(error.stack);
  }
};

export const info = (...data) => {
  console.log('[INFO]', ...data);
};

export const request = async (url, options={}) => {
  if (['post', 'put'].includes((options.method||'').toLowerCase())) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(options.body);
  }

  let res, json;

  try {
    res = await window.fetch(url, options);
  } catch (error) {
    err(error.message);
  }

  try {
    json = await res.json();
  } catch {}

  if (!(res && res.ok)) {
    const message = `Fetch to ${url} failed${res ? ` with status ${res.status} - ${res.statusText}` : ''}.`;
    const error = new Error(message);

    if (res) {
      error.status = res.status;
      error.json = json;
    }

    throw error;
  }

  return json || res;
};
