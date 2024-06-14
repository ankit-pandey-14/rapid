import React from 'react';
import { LinkButtonStyle } from '../../styles/ButtonStyle';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';

const TopbarWrapper = styled.div`
    padding-top: 9px;
    padding-bottom: 9px;
    gap: 14px;
    background-color: ${(props) => props.theme.blackBg};
    font-size: 15px;

    a, i {
        color: ${(props) => props.theme.lightWhite};
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

const Topbar = () => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const dispatch = useDispatch();

    return (
        <TopbarWrapper className='container d-flex justify-content-end'>
            <LinkButtonStyle to={'/register'}>Register</LinkButtonStyle>
            <LinkButtonStyle to={'/login'}>Login</LinkButtonStyle>

            <div className='cursor-pointer' onClick={() => { dispatch(toggleTheme()) }}>
                {
                    currentTheme === 'light'
                    ? <i className="bi bi-moon" title='Dark Theme' />
                    : <i className="bi bi-brightness-high" title='Light Theme' />
                }
            </div>
        </TopbarWrapper>
    );
}

export default Topbar;