/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function wait(delay: number) {
  return new Promise(done => setTimeout(done, delay));
}

function read(key: string) {
  const data = window.localStorage.getItem(key);

  try {
    return data && JSON.parse(data);
  } catch (error) {
    return null;
  }
}

function write(key: string, data: any) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export function init(key: string, initialData: any) {
  if (!read(key)) {
    write(key, initialData);
  }
}
