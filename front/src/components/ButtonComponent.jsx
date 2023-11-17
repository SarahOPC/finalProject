import styled from "styled-components";

const ButtonContainer = styled.button`
    font-size: 14px;
    padding: 0.5em 1em;
    font-weight: 400;
    border: none;
    outline: none;
    color: #000;
    background: linear-gradient(
        45deg,
        #999 5%,
        #fff 10%,
        #ccc 30%,
        #ddd 50%,
        #ccc 70%,
        #fff 80%,
        #999 95%
    );
    text-shadow: 0.5em 0.5em 0.7em rgba(255, 255, 255, 0.5);
    border-radius: 0.7em;
    box-shadow: 0 0.3em 0.5em rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-right: 2em;

    &:hover {
        border-radius : 0em 0.5em;
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
