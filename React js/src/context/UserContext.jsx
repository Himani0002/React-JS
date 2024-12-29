import React, { createContext } from 'react';
export const DataContext = createContext()

const username = "John Doe";
const UserContext = ({ children }) => {
  return (
    <div>
      <DataContext.Provider value={username}>

        {children}
      </DataContext.Provider>

    </div>
  )
}

export default UserContext
