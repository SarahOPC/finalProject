import styled from "styled-components";

const ButtonContainer = styled.button`
    border: none;
    margin-right: 1.5em;
    font-size: 1.3em;
    background-color: #F9F9F9;
    border-bottom: 0.1em solid transparent;
    transition: border-bottom 0.3s ease;
    &:hover {
        border-bottom : 0.1em solid #333333;
    }
`;

function ButtonComponent({ onClick, content}) {
    return (
        <ButtonContainer type="button" onClick={onClick}>
            {content}
        </ButtonContainer>
    )
}

export { ButtonComponent };
