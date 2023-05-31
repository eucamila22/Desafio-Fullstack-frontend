import styled from 'styled-components'

interface iStyledModalProps {
    maxWidth?: number
}

export const StyledModal = styled.div<iStyledModalProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0;
    z-index: 1001;
    .modal-box {
        position: relative;
        z-index: 1002;
        max-width: 1140px;
        max-height: 700px;
        width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'unset')};
        padding: 20px;
        background-color: #c6c7f7;
        border-radius: 8px;
        border: 4px solid #8d8fff;
    }
`
