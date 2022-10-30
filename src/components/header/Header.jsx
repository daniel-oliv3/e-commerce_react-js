import React from "react";
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import {CgShoppingBag} from "react-icons/cg";

/* ======= Header Section ======= */
const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>

            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Coleções</li>
                        <li>Marcas</li>
                        <li>Novo</li>
                        <li>Oferta</li>
                        <li>Info</li>
                    </ul>
                </div>

                <input type="text" className={css.search} placeholder="Prucure aqui" />
                
                <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    );
}

export default Header;