import { useEffect } from "react";
import { ModalWrap, ModalContent, CloseModalBtn } from './AddFeedbackModal.styled';
import { FeedbackForm } from '../FeedbackForm';
import { FeedbackList } from '../FeedbackList';

export const AddFeedbackModal = ({ onCloseModal }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCloseModal]);

  const handleCloseModal = () => onCloseModal();

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) onCloseModal();
  };

  return (
      <ModalWrap onClick={handleBackdropClick}>
      {/* <ModalWrap onCloseModal={onCloseModal}> */}
      <ModalContent>
        <CloseModalBtn type='button' onClick={ handleCloseModal } />
          <FeedbackForm />
          <FeedbackList />
        </ModalContent>
      </ModalWrap>
  );
};

  

// import { Overlay, ModalWrap } from "./AddFeedbackModal.styled";
// import { useEffect } from "react";
// import { createPortal } from "react-dom";

// const AddFeedbackModal = ({active, setactive}) => {
//   return (
//     <div className={active ? 'modal active' : 'modal'} 
//       onClick={() => setactive(false)}>
//       <div className={active ? 'modal__content active' : 'modal__content'}
//         onClick={e => e.stopPropagation()}>
//         111111111111111111
//       </div>
//     </div>
//   )
// }



// const modalRoot = document.querySelector("#modal");

// export function AddFeedbackModal({ selectedImageUrl, onCloseModal }) {
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.code === "Escape") {
//         onCloseModal();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [onCloseModal]);

//   const handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) onCloseModal();
//   };

//   return createPortal(
//     <Overlay onClick={handleBackdropClick}>
//       <h3>Add Feedback Modal</h3>
//       <ModalWrap>
//         11111111111
//       </ModalWrap>
//     </Overlay>,
//     modalRoot
//   );
// }






// const AddFeedbackModal= ({closeModal}) {
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.code === "Escape") {
//         onCloseModal();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [onCloseModal]);

//   const handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) onCloseModal();
//   };

//   return createPortal(
//     <Overlay onClick={handleBackdropClick}>
//       <h3>Add Feedback Modal</h3>
//       <ModalWrap>
//         11111111111
//       </ModalWrap>
//     </Overlay>,
//     modalRoot
//   );
// }