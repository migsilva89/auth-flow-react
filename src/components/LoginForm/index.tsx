import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth.ts';
import { LoginFormValues } from '../../types/authTypes.ts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Icons from '../ui/Icons';

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [errorMessageApiResponse, setErrorMessageApiResponse] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    setErrorMessageApiResponse(null);

    try {
      await login(data.username, data.password);
      navigate('/dashboard');
      setLoading(false);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;
        if (errorMessage) {
          setErrorMessageApiResponse(errorMessage);
          setLoading(false);
        }
      }
    }
  };

  const resetErrorMessage = () => {
    setErrorMessageApiResponse(null);
  };

  return (
    <div className='flex flex-col items-center px-6 py-8 mx-auto'>
      <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl text-white'>
            Login to your account
          </h1>
          <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor='username' className='block mb-2 text-sm font-medium text-white'>
                Your Username
              </label>
              <input
                type='text'
                id='username'
                {...register('username', { required: true })}
                className='input'
                placeholder='Username'
                onClick={resetErrorMessage}
              />
              {errors.username && <span className='text-red-500'>Username is required</span>}
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-white'>
                Password
              </label>
              <input
                type='password'
                id='password'
                {...register('password', { required: true })}
                placeholder='••••••••'
                className='input'
                onClick={resetErrorMessage}
              />
              {errors.password && <span className='text-red-500'>Password is required</span>}
            </div>
            <button type='submit' className='button'>
              {!loading ? 'Login' : <Icons.loading />}
            </button>
            <div className='h-5'>
              {errorMessageApiResponse && <span className='text-red-500'>{errorMessageApiResponse}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
