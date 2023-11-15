import { useContext } from 'react';
import { IdentityContext } from '../IdentityProvider/IdentityContext';

export function useIdentityProvider() {
  return useContext(IdentityContext);
}
