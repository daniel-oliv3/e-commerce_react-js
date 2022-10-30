import React from "react";
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill, BsRightArrow} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';

const Hero = () => {
    return (
        <div className={css.container}>


            {/* Left Side */}
            <div className={css.h_sides}>
                <span>Creme de proteção da pele</span>

                <div className={css.text2}>
                    <span>Coleção da moda</span>
                    <span>Quem num gosta di mim que vai caçá sua turmis! Atirei o pau no gatis, per gatis num morreus</span>
                </div>
            </div>

            {/* middle Side hero image */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />

                    <div className={css.signup}>
                        <span>Melhores ofertas de inscrição</span>

                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </div>


            {/* Right Side */}

        </div>
    );
}

export default Hero;