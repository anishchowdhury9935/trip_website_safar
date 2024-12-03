"use client";
import React, { useEffect } from 'react'
import { setHamburgerMenuVisibility } from '@/app/redux/states/globalState'
import { RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import './styles/hamburgerMenu.css';
import ConfigSettings from './ConfigSettings';
export default function HamburgerMenu() {
    const hamBurgerMenuVisibility = useSelector((state: RootState) => state.globalState.hamBurgerMenuVisibility);
    const dispatch = useDispatch();
    const handleOnClick_hamburger_menu_back_btn = () => {
        dispatch(setHamburgerMenuVisibility(!hamBurgerMenuVisibility));
    }
    useEffect(() => {
        if (hamBurgerMenuVisibility) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [hamBurgerMenuVisibility])
    return (
        <>
            {!hamBurgerMenuVisibility ? '' : (
                <div id='hamburger_menu_main' >
                    <figure id='hamburger_menu_background_div' onClick={() => {
                        dispatch(setHamburgerMenuVisibility(!hamBurgerMenuVisibility));
                    }}>
                    </figure>
                    <div className='hamburger_menu_container_main'>
                        <section className='hamburger_menu_container_top'>
                            <button id='hamburger_menu_back_btn' type='button' onClick={handleOnClick_hamburger_menu_back_btn}>
                                <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/double-left.png" alt="double-left" />&nbsp;back
                            </button>
                        </section>
                        <section className='hamburger_menu_container_middle'>
                            <section id='hamburger_profile_part'>
                                <UserProfile />
                            </section>
                            <section id='hamburger_config_part'>
                                <ConfigSettings />
                            </section>
                        </section>
                    </div>
                </div>
            )}
        </>
    )
}
