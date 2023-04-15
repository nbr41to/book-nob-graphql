export const decodeRelayUuid = (uuid: string) => {
  if (typeof window === 'undefined') return '';
  const json = window.atob(uuid);
  const array = JSON.parse(json);

  return array[array.length - 1];
};
