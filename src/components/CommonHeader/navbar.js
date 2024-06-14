import React, { useState } from 'react';
import { MobileMenuWrapper, NavLinkWrapper, NavLogoWrapper, NavbarWrapper, StyledIconWrapper, StyledNavLink } from '../../styles/components/NavbarStyle';
import { MENU_LIST } from '../../constants/menu';

const icons = [
    {
        key: 'instagram',
        title: 'instagram',
        href: '',
    },
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
];

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <NavbarWrapper className='container d-flex justify-content-between align-items-center'>
            <NavLogoWrapper>Astra</NavLogoWrapper>

            <NavLinkWrapper className={`d-flex align-items-center${showNav ? ' showNav' : ''}`}>
                <i
                    className="bi bi-x-square close"
                    onClick={() => {
                        setShowNav((prev) => !prev);
                    }}
                />
                {
                    MENU_LIST.map((menu) => {
                        return (
                            <StyledNavLink
                                to={menu.url}
                                key={menu.key}
                                className='d-block'
                                onClick={() => {
                                    if(showNav) {
                                        setShowNav((prev) => !prev);
                                    }
                                }}
                            >
                                {menu.title}
                            </StyledNavLink>
                        );
                    })
                }

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
            </NavLinkWrapper>

            <MobileMenuWrapper>
                <i
                    className="bi bi-menu-button-wide"
                    onClick={() => {
                        setShowNav((prev) => !prev)
                    }}
                />
            </MobileMenuWrapper>
        </NavbarWrapper>
    );
}

export default Navbar;