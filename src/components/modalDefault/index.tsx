import { useOutClick } from '../../hooks/useOutClick'
// import { MdClose } from 'react-icons/md'
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
                {/* <button className='modal-close' onClick={callback}>
                    <MdClose size={21} />
                </button> */}
                {children}
            </div>
        </StyledModal>
    )
}
