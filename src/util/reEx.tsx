class RegularEx {
  checkPassword = (password: string) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if (password.match(reg) !== null) {
      return true;
    } else {
      return false;
    }
  };
}

const regEx = new RegularEx();

export default regEx;
