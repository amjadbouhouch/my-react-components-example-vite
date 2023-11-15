import React from 'react';
type IdentityContextProps = {
  count: number;
  incrementCount: () => void;
};
export const IdentityContext = React.createContext({} as IdentityContextProps);
