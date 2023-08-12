import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/useAuth.ts';
import { useNavigate } from 'react-router-dom';
import { LoginFormValues } from '../../interfaces/authTypes.ts';

const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [errorMessageApiResponse, setErrorMessageApiResponse] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    setErrorMessageApiResponse(null);
    try {
      await login(data.username, data.password);
      navigate('/dashboard');
    } catch (error) {
      const errorResponse = error.response.data.message;
      setErrorMessageApiResponse(errorResponse);
    }
  };

  const resetErrorMessage = () => {
    setErrorMessageApiResponse(null);
  };

  // should we use useEffect?
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <section className='bg-gray-900 h-screen'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
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
                  className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
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
                  className='border sm:text-sm rounded-lg focus:border-sky-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500'
                  onClick={resetErrorMessage}
                />
                {errors.password && <span className='text-red-500'>Password is required</span>}
              </div>
              <button
                type='submit'
                className='w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-600 hover:bg-sky-700 focus:ring-sky-800'
              >
                Login
              </button>
              <div className='h-5'>
                {errorMessageApiResponse && <span className='text-red-500'>{errorMessageApiResponse}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
