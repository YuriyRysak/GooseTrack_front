import { useEffect } from 'react';
import {ModalWrap, ModalContent} from './AddFeedbackModal.styled';

export const Modal = ({ onCloseModal, children }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.code === "Escape") {
            onCloseModal();
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
      }, [onCloseModal]);
    
      const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) onCloseModal();
      };
    
  return (
    <ModalWrap onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalWrap>
  );
};