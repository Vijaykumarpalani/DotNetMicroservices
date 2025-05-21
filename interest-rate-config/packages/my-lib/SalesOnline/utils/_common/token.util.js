import { jwtDecode } from 'jwt-decode';

export const decodeToken = (token) => {
  if (!token) return;
  return jwtDecode(token);
};