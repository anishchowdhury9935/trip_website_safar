import React, { useEffect, useState } from 'react'
import './styles/DownNavBar.css';
import Link from 'next/link';
import myTripLogo_hollow from "../../../public/media/images/myTripLogo_hollow.avif"
import myTripLogo_fill from "../../../public/media/images/myTripLogo_fill.avif"
import notification_icon_hollow from "../../../public/media/images/notification_icon_hollow.png"
import notification_icon_fill from "../../../public/media/images/notification_icon_fill.png"
import offerIcon_hollow from "../../../public/media/images/offer_Icon_hollow.avif"
import offer_icon_fill from "../../../public/media/images/offer_icon_fill.avif"
import "../css/animation.css"
export default function DownNavBar() {
    const [shouldShowDownNavBar, setShouldShowDownNavBar] = useState(window.innerWidth <= 540)
    const [clickedBtnInfo, setClickedBtnInfo] = useState({ btnName: 'home' });
    const handleResize = () => {
        window.innerWidth <= 540 ? setShouldShowDownNavBar(true) : setShouldShowDownNavBar(false)
    };
    useEffect(() => {
        const handleResize = () => {
            window.innerWidth <= 540 ? setShouldShowDownNavBar(true) : setShouldShowDownNavBar(false);
        };

        handleResize(); // Set initial state based on window size
        document.body.style.paddingBottom = '2em'; // this is important to prevent the content from being hidden behind the navbar
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {
                !shouldShowDownNavBar ? '' : (
                    <footer className='DownNavBar_main'>
                        <section id='DownNavBar_main_container'>
                            <Link className='DownNavBar_btn'
                                href='/' onClick={() => {
                                    setClickedBtnInfo({ ...clickedBtnInfo, btnName: 'home' })
                                }}>
                                <img className="DownNavBar_icon_img" src={clickedBtnInfo.btnName === "home" ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiAgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGQ9Ik0gMTIgMi4wOTk2MDk0IEwgMSAxMiBMIDQgMTIgTCA0IDIxIEwgMTAgMjEgTCAxMCAxNCBMIDE0IDE0IEwgMTQgMjEgTCAyMCAyMSBMIDIwIDEyIEwgMjMgMTIgTCAxMiAyLjA5OTYwOTQgeiI+PC9wYXRoPgo8L3N2Zz4=" : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiAgdmlld0JveD0iMCAwIDI0IDI0Ij4KPHBhdGggZD0iTSAxMiAyLjA5OTYwOTQgTCAxIDEyIEwgNCAxMiBMIDQgMjEgTCAxMSAyMSBMIDExIDE1IEwgMTMgMTUgTCAxMyAyMSBMIDIwIDIxIEwgMjAgMTIgTCAyMyAxMiBMIDEyIDIuMDk5NjA5NCB6IE0gMTIgNC43OTEwMTU2IEwgMTggMTAuMTkxNDA2IEwgMTggMTEgTCAxOCAxOSBMIDE1IDE5IEwgMTUgMTMgTCA5IDEzIEwgOSAxOSBMIDYgMTkgTCA2IDEwLjE5MTQwNiBMIDEyIDQuNzkxMDE1NiB6Ij48L3BhdGg+Cjwvc3ZnPg=="} alt="" />
                                <h4 className='DownNavBar_btn_main_txt'>Home</h4>
                            </Link>
                            <Link className='DownNavBar_btn'
                                href=""
                                onClick={() => {
                                    setClickedBtnInfo({ ...clickedBtnInfo, btnName: 'myTrip' })
                                }}>
                                <img className="DownNavBar_icon_img" src={clickedBtnInfo.btnName === "myTrip" ? myTripLogo_fill.src : myTripLogo_hollow.src} alt="" />
                                <h4 className='DownNavBar_btn_main_txt'>My trips</h4>
                            </Link>
                            <Link className='DownNavBar_btn'
                                href=""
                                onClick={() => {
                                    setClickedBtnInfo({ ...clickedBtnInfo, btnName: 'notification' })
                                }}>
                                <img className="DownNavBar_icon_img bell" src={clickedBtnInfo.btnName === "notification" ? notification_icon_fill.src : notification_icon_hollow.src} alt="" />
                                <h4 className='DownNavBar_btn_main_txt'>notification</h4>
                            </Link>
                            <Link className='DownNavBar_btn'
                                href=""
                                onClick={() => {
                                    setClickedBtnInfo({ ...clickedBtnInfo, btnName: 'offer' })
                                }}>
                                <img className="DownNavBar_icon_img" src={clickedBtnInfo.btnName === "offer" ? offer_icon_fill.src : offerIcon_hollow.src} alt="" />
                                <h4 className='DownNavBar_btn_main_txt'>offers</h4>
                            </Link>
                        </section>
                    </footer>
                )
            }
        </>
    )
}
