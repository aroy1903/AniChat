import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import useAuth from './hooks/useAuth';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import Chat from './pages/Chat';
import RenderContext from './renderContext/renderContext';
function App() {
  const { user, authIsReady } = useAuth();

  return (
    <ChakraProvider>
      <RenderContext>
        <div className=" min-h-screen flex flex-col">
          <NavBar />
          {authIsReady && (
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/login"
                element={user ? <Navigate to="/chat" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/chat" /> : <Signup />}
              />
              <Route
                path="/chat"
                element={user ? <Chat /> : <Navigate to="/login" />}
              />
            </Routes>
          )}
        </div>
      </RenderContext>
    </ChakraProvider>
  );
}

export default App;
