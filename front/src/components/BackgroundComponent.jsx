import styled from "styled-components";

// bleu fonce = #291EF4
// bleu clair = #59A4F1

const BackgroundContainer = styled.div`
    background-color: #291EF4;
    width: 75em;
    height: 65em;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    margin: 0 auto;
    border-radius: 0.5em;
    box-shadow: 0.5em 0.5em 1em rgba(0, 0, 0, 0.5);
    }
`;

const ContainerDiv = styled.div`
    font-size: ${(props) => (props.customStyles ? props.customStyles.fontSize : "inherit")};
    text-align: ${(props) => (props.customStyles ? props.customStyles.textAlign : "inherit")};
    margin-top: ${(props) => (props.customStyles ? props.customStyles.marginTop : "inherit")};
`;

function BackgroundComponent({ content, customStyles }) {
    return (
        <BackgroundContainer>
            <ContainerDiv customStyles={customStyles}>{content}</ContainerDiv>
        </BackgroundContainer>
    )
}

export { BackgroundComponent };
