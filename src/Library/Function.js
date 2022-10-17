import Toast from 'react-native-simple-toast'
const toast = (msg) => {
    Toast.show(msg, Toast.SHORT, ["UIAlertController"]);
    return;
  };

export {toast}