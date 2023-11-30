import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #DBDBDB;
    padding: 1em;
    border-radius: 0.3em;
    box-shadow: 0em 0em 1em 0em rgba(0, 0, 0, 0.5);
    z-index: 2;
    width: 13%;
    height: 12%;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;
`;

const Text = styled.p`
    font-weight: 600;
`;

const CloseIcon = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function ModalComponent({ handleCloseModalClic }) {
    return (
        <ModalContainer>
            <CloseIcon>
                <FontAwesomeIcon icon={faRectangleXmark} style={{color: "#4d0486", fontSize: "1.5em", cursor: 'pointer'}} onClick={handleCloseModalClic}/>
            </CloseIcon>
            <TextContainer>
                <Text>Employee created</Text>
            </TextContainer>
        </ModalContainer>
    )
}

export { ModalComponent };
