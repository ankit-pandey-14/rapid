import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CustomModalBody, CustomModalButton, CustomModalContainer, CustomModalHeading, CustomModalWrapper } from '../styles/components/ModalStyle';
import { OutlineButtonStyle, PrimaryButtonStyle } from '../styles/ButtonStyle';

const CustomModal = ({show, onClose, onOk, closeButton, heading, body}) => {
    useEffect(() => {
        if(show) {
            document.body.style.overflowY = 'hidden';
        }

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [show]);
    
    return ReactDOM.createPortal(
        <CustomModalWrapper
            onClick={(event) => {
                if(event.target.classList.contains('modal-close-area')) {
                    onClose();
                }
            }}
            show={show}
            className='modal-close-area align-items-center'
        >
            <CustomModalContainer className='modal-show-area'>
                <CustomModalHeading className='d-flex'>
                    {heading}
                    {
                        closeButton
                        ? <i className="d-block bi bi-x-square cursor-pointer" onClick={() => { onClose() }} />
                        : null
                    }
                </CustomModalHeading>

                <CustomModalBody>
                    { body }
                </CustomModalBody>

                <CustomModalButton className='d-flex'>
                    {
                        onOk
                        ? <PrimaryButtonStyle onClick={() => { onOk() }}>OK</PrimaryButtonStyle>
                        : null
                    }
                    
                    <OutlineButtonStyle onClick={() => { onClose() }}>Close</OutlineButtonStyle>
                </CustomModalButton>
            </CustomModalContainer>
        </CustomModalWrapper>,

        document.querySelector('.portalModal')
    );
};

export default CustomModal;