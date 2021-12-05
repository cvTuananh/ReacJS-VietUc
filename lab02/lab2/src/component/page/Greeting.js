import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

export default function Greenting(props) {
    if(props.islogin) return <UserGreeting />
    return <GuestGreeting />
}