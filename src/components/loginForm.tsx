import React, { useState } from 'react';
import { useInput } from './useInput';
import { Input, Button } from 'antd';
import { Ilogin } from 'interface/requestBase';
import { useTranslation } from 'react-i18next';
import { UserOutlined, LockOutlined, ExclamationCircleFilled } from '@ant-design/icons';

interface IProps {
  onChange: (value: Ilogin) => Promise<boolean | undefined>;
}

export const LoginForm = (props: IProps) => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);
  const { value: username, bind: bindUserName } = useInput({ value: '' });
  const { bind: bindPassword, reset: resetPassword, hash: hashPassword } = useInput({ value: '' });

  React.useEffect(() => {}, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasError(false);

    const value = {
      username: username,
      password: hashPassword(),
    };

    props.onChange(value).then((res) => {
      !!res && setHasError(res);
    });

    resetPassword();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        size="large"
        id="username"
        placeholder={t('Enter your user name')}
        prefix={<UserOutlined />}
        {...bindUserName}
      />
      <Input.Password
        size="large"
        id="password"
        placeholder={t('Enter your password')}
        prefix={<LockOutlined />}
        {...bindPassword}
      />
      <button type="submit" id="button">
        {t('Login')}
      </button>
    </form>
  );
};
