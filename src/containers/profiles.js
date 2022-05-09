import React from 'react'
import {Header, Profiles} from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({user, setProfile}) {
    console.log(user)
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.List>
            </Profiles>
        
        
        </>
    ) 
}