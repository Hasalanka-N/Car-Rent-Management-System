import React, { createContext, useContext, useState } from 'react';

const LoginModalContext = createContext();

export function useLoginModal() {
  return useContext(LoginModalContext);
}

export function LoginModalProvider({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <LoginModalContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
      {children}
    </LoginModalContext.Provider>
  );
}
