import React, { createContext, useContext, useState } from 'react';

type UserRole = 'student' | 'instructor' | null;

interface UserContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  userName: string;
  setUserName: (name: string) => void;
  userImage: string;
  setUserImage: (image: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState('Omar Sherif');
  const [userImage, setUserImage] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Omar');

  return (
    <UserContext.Provider value={{ role, setRole, userName, setUserName, userImage, setUserImage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
