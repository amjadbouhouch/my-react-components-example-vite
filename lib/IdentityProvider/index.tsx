import React, { useState } from 'react';
import { IdentityContext } from './IdentityContext';
interface IdentityProviderProps {
  children: React.ReactNode;
}

export function IdentityProvider({ children }: IdentityProviderProps) {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <IdentityContext.Provider
      value={{
        count,
        incrementCount,
      }}
    >
      {children}
    </IdentityContext.Provider>
  );
}
