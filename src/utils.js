export const changeRegisterMessage = (x) => {
  switch(x) {
    case 'auth/email-already-exists':
      return 'Podany e-mail juz istnieje';
    case 'auth/weak-password':
      return 'Hasło jest za słabe';
    case 'auth/invalid-email':
      return 'E-mail jest niepoprawny';
    default:
      return 'Dane są niepoprawne';
  }
};

export const changeLoginMessage = (x) => {
  switch(x) {
    case 'auth/invalid-email':
      return 'Nieprawidłowy E-mail';
    case 'auth/wrong-password':
      return 'Nieprawidłowe hasło';
    default:
      return 'Dane są niepoprawne';
  }
};
