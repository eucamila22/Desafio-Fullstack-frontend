import { useOutClick } from '../../hooks/useOutClick'
import { StyledModal } from './style'

interface iModalProps {
    children: React.ReactNode
    callback: () => void
    maxWidth?: number
}

export const ModalDefault = ({ children, callback, maxWidth }: iModalProps) => {
    const ref = useOutClick<HTMLDivElement>(() => callback())
    return (
        <StyledModal maxWidth={maxWidth}>
            <div role='dialog' className='modal-box' ref={ref}>
                {children}
            </div>
        </StyledModal>
    )
}
