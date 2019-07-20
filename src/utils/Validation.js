export const isValidPassword = pwd => {
  if (pwd.trim().length < 6) {
    return false;
  } else {
    return true;
  }
};

export const isValidEmail = email => {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (EMAIL_REGEX.test(email)) {
    return true;
  } else {
    return false;
  }
};
