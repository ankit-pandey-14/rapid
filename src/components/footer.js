import React from 'react';
import { FooterLinksWrapper, FooterWrapper } from '../styles/components/FooterStyle';
import { LinkButtonStyle } from '../styles/ButtonStyle';

const footerLinksList = [
    [
        { key: 'about', title: 'About', },
        { key: 'news', title: 'News', },
        { key: 'hosting', title: 'Hosting', },
        { key: 'privacy', title: 'Privacy', },
    ],
    [
        { key: 'showcase', title: 'Showcase', },
        { key: 'themes', title: 'Themes', },
        { key: 'plugins', title: 'Plugins', },
        { key: 'patterns', title: 'Patterns', },
    ],
    [
        { key: 'learn', title: 'Learn', },
        { key: 'documents', title: 'Documents', },
        { key: 'developers', title: 'Developers', },
        { key: 'word_press', title: 'WordPress.tv', newTab: true, },
    ],
    [
        { key: 'get_involved', title: 'Get Involved', },
        { key: 'events', title: 'Events', },
        { key: 'donate', title: 'Donate', newTab: true, },
        { key: 'swag_store', title: 'Swag Store', newTab: true, },
    ],
    [
        { key: 'word_press', title: 'WordPress.com', newTab: true, },
        { key: 'matt', title: 'Matt', newTab: true, },
        { key: 'bbPress', title: 'bbPress', newTab: true, },
        { key: 'buddyPress', title: 'BuddyPress', newTab: true, },
    ]
];

const Footer = () => {
    return (
        <FooterWrapper className='container d-grid'>
            {
                footerLinksList.map((footerLinks, index) => {
                    return (
                        <FooterLinksWrapper key={index}>
                            {
                                footerLinks.map((footerLink) => {
                                    return (
                                        <LinkButtonStyle key={footerLink.key}>
                                            {footerLink.title}
                                            {" "}
                                            {
                                                footerLink.newTab
                                                ? <i className="bi bi-arrow-up-right"></i>
                                                : null
                                            }
                                        </LinkButtonStyle>
                                    );
                                })
                            }
                        </FooterLinksWrapper>
                    );
                })
            }
        </FooterWrapper>
    );
};

export default Footer;