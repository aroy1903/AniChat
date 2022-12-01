import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function ErrorPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      user ? navigate('/chat') : navigate('/');
    }, 3000);
  }, []);

  return (
    <div className="flex-grow flex justify-center items-center bg-[#F6EEF8]">
      <h1 className=" text-6xl">404 Page Not Foud</h1>
    </div>
  );
}
