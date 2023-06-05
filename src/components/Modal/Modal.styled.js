import styled from '@emotion/styled';

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  //   width: 100vw;
  //   height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  padding: 32px;
  width: 468px;
  height: 673px;
  border-radius: 8px;
  background-color: white;
`;
