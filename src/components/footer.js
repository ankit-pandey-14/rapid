import React from 'react';
import { FooterLinksWrapper, FooterWrapper, FooterExtraWrapper } from '../styles/components/FooterStyle';
import { LinkButtonStyle } from '../styles/ButtonStyle';
import { NavLogoWrapper, StyledIconWrapper, StyledNavLink } from '../styles/components/NavbarStyle';

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

const icons = [
    {
        key: 'facebook',
        title: 'facebook',
        href: '',
    },
    {
        key: 'twitter',
        title: 'twitter-x',
        href: '',
    },
    {
        key: 'instagram',
        title: 'instagram',
        href: '',
    },
    {
        key: 'linkedin',
        title: 'linkedin',
        href: '',
    },
    {
        key: 'youtube',
        title: 'youtube',
        href: '',
    },
];

const Footer = () => {
    return (
        <FooterWrapper className='container'>
            <FooterLinksWrapper className='d-grid'>
                {
                    footerLinksList.map((footerLinks, index) => {
                        return (
                            <div key={index}>
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
                            </div>
                        );
                    })
                }

            </FooterLinksWrapper>

            <FooterExtraWrapper className='d-flex justify-content-between align-items-center'>
                <NavLogoWrapper>Astra</NavLogoWrapper>

                <StyledIconWrapper className='d-flex cursor-pointer'>
                    {
                        icons.map((icon) => {
                            return (
                                <StyledNavLink
                                    key={icon.key}
                                    to={icon.href}
                                    className={'d-block'}
                                >
                                    <i className={`bi bi-${icon.title}`}></i>
                                </StyledNavLink>
                            );
                        })
                    }
                </StyledIconWrapper>
            </FooterExtraWrapper>
        </FooterWrapper>
    );
};

export default Footer;