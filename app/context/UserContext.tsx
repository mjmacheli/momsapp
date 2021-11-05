import React, { createContext, useState } from 'react'

// @ts-ignore
const UserContext = createContext()

const UserProvider = (props: any) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }