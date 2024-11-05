
import React, { createContext, useContext, useState } from 'react';
type UserContextType = {
    userType: string | null;
    setUserType: (type: string | null) => void;
};
const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider= ({ children }: any) => {
    const [userType, setUserType] = useState<string | null>(null);
    return (
        <UserContext.Provider value={{ userType, setUserType }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};