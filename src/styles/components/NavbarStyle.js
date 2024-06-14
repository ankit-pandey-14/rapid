import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    background-color: ${(props) => props.theme.primaryBg};
    padding-top: 9px;
    padding-bottom: 9px;
    align-items: center
`;

export const NavLogoWrapper = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1px;
`;


export const NavLinkWrapper = styled.div`
    gap: 23px;

    i.close {
        display: none;
    }

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        display: flex;
        position: fixed;
        top: 0;
        left: -100%;
        height: 100vh;
        width: 300px;
        flex-direction: column;
        background-color: ${(props) => props.theme.mobileMenu};
        align-items: center;
        padding-top: 50px;
        gap: 32px;
        transition: all 0.8s ease;

        &.showNav {
            left: 0;
        }

        i.close {
            display: flex;
            position: absolute;
            font-size: 23px;
            top: 10px;
            right: 20px;
            color: #000;
        }
    }

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        width: 85%;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: block;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
        color: ${(props) => props.theme.primaryHover};
    }
`;

export const MobileMenuWrapper = styled.div`
    display: none;
    color: #fff;

    @media(max-width: ${(props) => props.theme.media.tabs}px) {
        display: flex;
    }
`;

export const StyledIconWrapper = styled.div`
    gap: 23px;
    color: #fff;
`;