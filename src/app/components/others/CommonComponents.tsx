"use client";
import React from 'react'
import CursorFollowTrail from './CursorFollow'
import HamburgerMenu from './innerComponents/HamburgerMenu'
import DownNavBar from '../DownNavBar';

/**
 * This component contains all the common components that are used throughout the application.
 */
export default function CommonComponents() {
    return (
        <>
            <CursorFollowTrail />
            <DownNavBar />
            <HamburgerMenu />
        </>
    )
}
