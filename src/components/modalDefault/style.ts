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
        width: 90%;
        max-width: 1140px;
        max-height: 700px;
        max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'unset')};
        padding: 20px;
        background-color: var(--grey-0);
        border-radius: 15px;
        border: 1px solid var(--color-primary);
    }
    .modal-close {
        opacity: 0.5;
        cursor: pointer;
        position: absolute;
        top: 50px;
        right: 10px;
        transition: 0.4s;
        :hover {
            opacity: 1;
        }
    }
`
