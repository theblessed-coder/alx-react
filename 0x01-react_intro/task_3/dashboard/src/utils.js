export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex === true ? 'Holberton School' : 'Holberton School main dashboard';
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};
