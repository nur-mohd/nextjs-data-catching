'use client';
import React, {createContext} from 'react';

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ name: "John Doe", email: "john.doe@example.com"}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;