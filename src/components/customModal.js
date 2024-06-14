import React from 'react';
import { CustomModalBody, CustomModalButton, CustomModalContainer, CustomModalHeading, CustomModalWrapper } from '../styles/components/ModalStyle';
import { OutlineButtonStyle, PrimaryButtonStyle } from '../styles/ButtonStyle';

const CustomModal = ({show, onClose, onOk, closeButton, heading, body}) => {
    return (
        <CustomModalWrapper
            onClick={(event) => {
                if(event.target.classList.contains('modal-close-area')) {
                    onClose();
                }
            }}
            show={show}
            className='modal-close-area'
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
                        ? <PrimaryButtonStyle></PrimaryButtonStyle>
                        : null
                    }
                    
                    <OutlineButtonStyle>Close</OutlineButtonStyle>
                </CustomModalButton>
            </CustomModalContainer>
        </CustomModalWrapper>
    );
};

export default CustomModal;