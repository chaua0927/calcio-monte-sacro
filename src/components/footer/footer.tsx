import React from 'react';
import { Link } from 'gatsby';
import './footer.scss';
import {
    EMAIL_ADDR,
    TERMS_AND_CONDITIONS,
    PRIVACY,
    COOKIES,
} from '../../constants';

interface FooterProps {
    openModal: (ref: React.RefObject<HTMLElement>, modalType: string) => void;
}

export const Footer = (props: FooterProps) => {
    const TermsAndCondModalRef = React.useRef<HTMLButtonElement>(null);
    const PrivacyModalRef = React.useRef<HTMLButtonElement>(null);
    const CookiesModalRef = React.useRef<HTMLButtonElement>(null);

    const openTermsAndCondModal = () => {
        props.openModal(TermsAndCondModalRef, TERMS_AND_CONDITIONS);
    };

    const openPrivacyModal = () => {
        props.openModal(PrivacyModalRef, PRIVACY);
    };

    const openCookiesModal = () => {
        props.openModal(CookiesModalRef, COOKIES);
    };

    return (
        <footer className="footer-container columns is-centered has-background-black-main">
            <div className="column is-two-thirds">
                <section className="footer-main-links container">
                    <Link className="footer-main-link" to="/schedule">
                        Schedule
                    </Link>
                    <Link className="footer-main-link" to="/news">
                        News
                    </Link>
                    <Link className="footer-main-link" to="/blog">
                        Blog
                    </Link>
                    <Link className="footer-main-link" to={`/drills`}>
                        Drills
                    </Link>
                    <Link className="footer-main-link" to="/about">
                        About
                    </Link>
                </section>
                <div className="footer-divider" />
                <section className="footer-legal-buttons container">
                    <button
                        ref={TermsAndCondModalRef}
                        type="button"
                        className="footer-legal-button"
                        onClick={openTermsAndCondModal}
                    >
                        Terms and Conditions
                    </button>
                    <button
                        ref={PrivacyModalRef}
                        type="button"
                        className="footer-legal-button"
                        onClick={openPrivacyModal}
                    >
                        Privacy
                    </button>
                    <button
                        ref={CookiesModalRef}
                        type="button"
                        className="footer-legal-button"
                        onClick={openCookiesModal}
                    >
                        Cookies
                    </button>
                </section>
                <section className="copyright container">
                    <p>
                        © 2019 Calcio Monte Sacro. All Rights Reserved. Website
                        questions, comments or suggestions?
                        <a className="email-link" href={`mailto:${EMAIL_ADDR}`}>
                            Email Us
                        </a>
                    </p>
                </section>
            </div>
        </footer>
    );
};
