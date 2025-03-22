import iziToast from 'izitoast';

const isLocalhost =
  window.location.origin.includes('localhost') ||
  window.location.origin.includes('127.0.0.1');

iziToast.settings({
  timeout: 3000,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',

  iconColor: '#FFF',
  color: '#FFF',

  close: true,
  position: 'topRight',

  messageColor: '#FFF',
  messageSize: '16px',

  progressBar: true,

  progressBarEasing: 'linear',

  message: 'Sorry, something went wrong.',

  iconUrl: isLocalhost
    ? './public/img/illegal.svg'
    : '/goit-advancedjs-hw-03/img/illegal.svg',

  progressBarColor: '#B51B1B',
  backgroundColor: '#EF4040',

  maxWidth: '432px',
});

export { iziToast };
