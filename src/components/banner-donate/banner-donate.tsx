import React, { useState } from 'react';
import { useWindowDimensions } from '../../hooks';
import Confetti from 'react-confetti';
import ConfettiSpray from 'react-dom-confetti';
import { Fireworks } from 'fireworks/lib/react';
import './banner-donate.scss';

//TODO: Fix canvas positions to el position
//TODO: Optimize animations
export const BannerDonate = () => {
    const [clickCount, setClickCount] = useState(0);
    const [donateButtonText, setDonateButtonText] = useState('Donate! 🎉');
    const [isFireConfetti, setIsFireConfetti] = useState(false);
    const [isDropConfetti, setIsDropConfetti] = useState(false);
    const [isFireFireworks, setIsFireFireworks] = useState(false);
    const { width, height } = useWindowDimensions();

    const donateButtonTextSelector = (): string => {
        if (clickCount === 1) {
            return 'Just kidding!';
        } else if (clickCount === 2) {
            return 'Click for more coriandoli!';
        } else if (clickCount >= 3 && clickCount <= 5) {
            return '🎉🎉🎉!!';
        } else if (clickCount === 6) {
            return 'Okay now...';
        } else if (clickCount === 7) {
            return "Aren't you getting tired?";
        } else if (clickCount === 8) {
            return 'Guess not...';
        } else if (clickCount >= 9 && clickCount <= 14) {
            return 'Looks like somebody is having a little too much fun...';
        } else if (clickCount === 15) {
            return `I am just going to pretend I wasn't here...`;
        } else if (clickCount === 16) {
            return 'Ciao';
        } else {
            return 'Donate! 🎉';
        }
    };

    const handleDonateClick = () => {
        setClickCount(clickCount + 1);
        setDonateButtonText(donateButtonTextSelector());
        if (!isFireConfetti) {
            setIsFireConfetti(true);
        }
        setTimeout(() => {
            if (isFireConfetti) {
                setIsFireConfetti(false);
            }
        }, 250);

        if (!isDropConfetti) {
            setIsDropConfetti(true);
        }
        setTimeout(() => {
            if (isDropConfetti) {
                setIsDropConfetti(false);
            }
        }, 3000);

        if (!isFireFireworks) {
            setIsFireFireworks(true);
        }
        setTimeout(() => {
            if (isFireFireworks) {
                setIsFireFireworks(false);
            }
        }, 3000);
    };

    const confettiSprayConfigLeft = {
        angle: 60,
        spread: 65,
        startVelocity: 45,
        elementCount: 50,
        dragFriction: 0.09,
        duration: 3000,
        stagger: 20,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };
    const confettiSprayConfigRight = {
        angle: 120,
        spread: 65,
        startVelocity: 45,
        elementCount: 50,
        dragFriction: 0.09,
        duration: 3000,
        stagger: 20,
        width: '10px',
        height: '10px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    };

    const fireworksConfig = {
        count: 4,
        interval: 2000,
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
        calc: (props, i) => ({
            ...props,
            x: Math.random() * (width / 2) + width / 4,
            y: Math.random() * (height / 2) + height / 4,
        }),
    };

    return (
        <section className="banner-donate-container hero is-large has-background-roma-red is-bold">
            <Confetti
                width={width}
                height={height}
                numberOfPieces={isDropConfetti ? 50 : 0}
            />
            <div>{isFireFireworks && <Fireworks {...fireworksConfig} />}</div>
            <div className="hero-body has-text-centered">
                <button
                    type="button"
                    className="button has-background-roma-gold is-large is-rounded"
                    onClick={handleDonateClick}
                >
                    {donateButtonText}
                </button>
            </div>
            <div className="banner-donate-confetti-spray-left">
                <ConfettiSpray
                    active={isFireConfetti}
                    config={confettiSprayConfigLeft}
                />
            </div>
            <div className="banner-donate-confetti-spray-right">
                <ConfettiSpray
                    active={isFireConfetti}
                    config={confettiSprayConfigRight}
                />
            </div>
        </section>
    );
};
