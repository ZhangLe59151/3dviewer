import { useState } from 'react';
import regEx from 'util/reEx';
import CryptoJS from 'crypto-js';

export const useInput = (initialValue: { value: string; comparevalue?: string }) => {
  const [value, setValue] = useState(initialValue.value);
  const [error, setError] = useState(false);
  const [hashed, setHashValue] = useState(initialValue.value);

  const resetInputhooks = () => {
    setValue('');
    setError(false);
  };

  const userNameisEmpty = (username: string) => {
    if (username === '') {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };

  const passwordValidation = (password: string) => {
    if (regEx.checkPassword(password) && password !== '') {
      setError(false);
      return false;
    } else {
      setError(true);
      return true;
    }
  };

  const passwordSame = (password: string, comparepassword: string) => {
    if (password === comparepassword) {
      setError(false);
      return false;
    } else {
      setError(true);
      return true;
    }
  };

  const hashPassword = () => {
    const sha = CryptoJS.MD5(value).toString();
    setHashValue(sha);
    return sha;
  };

  return {
    value,
    setValue,
    reset: () => resetInputhooks(),
    checkvalidation: () => passwordValidation(value),
    checkempty: () => userNameisEmpty(value),
    checksame: () => passwordSame(value, initialValue.comparevalue || ''),
    hash: () => hashPassword(),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
    error,
    hashed,
  };
};
