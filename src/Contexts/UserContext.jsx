import { createContext, useState, useEffect } from "react";
const AccountContext = createContext()
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
      });
      const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
      });
    
      const login = (userData, tokenData) => {
        setUser(userData);
        setToken(tokenData);
    
        // Save user and token to localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', tokenData);
      };
// console.log("....",user)
      useEffect(() => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      }, [user]);
    
      useEffect(() => {
        if (token) {
          localStorage.setItem('token', token);
          
        }
      }, [token]);
      const logout = () => {
        setUser(null);
        setToken(null);
        window.location.reload();
        // Remove user and token from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      };
    return (
        <AccountContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AccountContext.Provider>
    );
}
export {AccountContext ,UserProvider}