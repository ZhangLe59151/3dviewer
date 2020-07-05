import { useState } from 'react';
import CryptoJS from 'crypto-js';

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [hashed, setHashValue] = useState(initialValue);

  const hashPassword = () => {
    const sha = CryptoJS.MD5(value).toString();
    setHashValue(sha);
    return sha;
  };

  return {
    value,
    setValue,
    reset: () => setValue(''),
    hash: () => hashPassword(),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
    hashed,
  };
};
