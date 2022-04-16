import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Header = (props) => {
    const navigate = useNavigate()

    // const { height, width } = useWindowDimensions();
    const [open, setOpen] = useState(false)

    // useEffect(() => {
    //     if (width < 900) {
    //         return setIsMobile(true);
    //     }
    //     return setIsMobile(false)
    // }, [width])



    return (
        <div className="header-main">
            <nav className="nav-main">
                <img style={{ cursor: "pointer" }} onClick={() => navigate('/')} src="https://primundus.de/wp-content/uploads/2021/04/Logo.svg" alt="header-img" />
                <ul id="simple-nav">
                    <li><Link className="link" to='/'>Why PRIMUNDUS</Link></li>
                    <li><Link className="link" to='/'>Costs</Link></li>
                    <li><Link className="link" to='/'>procedure</Link></li>
                    <li><Link className="link" to='/'>Care Guide</Link></li>
                </ul>
                <IconContext.Provider value={{ color: "black", size: 25 }}>
                    <div onClick={() => setOpen(!open)} className="hamburger-menu">
                        {!open ? <FiMenu className="menu-open" /> : <MdClose className="menu-close" />}

                    </div>
                </IconContext.Provider>

            </nav>
            <ul id={!open ? 'hamburger-nav' : 'hamburger-nav-open'}>
                <li><Link onClick={() => setOpen(false)} className="hamburger-link" to='/'>Why PRIMUNDUS</Link></li>
                <li><Link onClick={() => setOpen(false)} className="hamburger-link" to='/'>Costs</Link></li>
                <li><Link onClick={() => setOpen(false)} className="hamburger-link" to='/'>procedure</Link></li>
                <li><Link onClick={() => setOpen(false)} className="hamburger-link" to='/'>Care Guide</Link></li>
            </ul>

        </div>
    )

}

export default Header