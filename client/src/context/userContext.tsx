import axios from 'axios';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  // Definisikan struktur dari objek User sesuai dengan respons yang diterima dari server
  id: string;
  name: string;
  email: string;
  // ... tambahkan properti lain jika ada
}

interface UserContextProps {
  children: ReactNode;
}

interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  ready: boolean;  // Add this line
}


export const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User | null>(null);
  const [ready,setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get<User>('/profile').then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []); // tambahkan user ke dependency array untuk mencegah pengambilan berulang

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
