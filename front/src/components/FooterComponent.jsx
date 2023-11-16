import styled from "styled-components";

const FooterContainer = styled.div`
    margin-top: 2em;
    display: flex;
    justify-content: center;
    padding-bottom: 1em;

    p {
        color: #59A4F1;
        font-weight: bold;
    }
`;

function FooterComponent() {
    return (
        <FooterContainer>
            <p>Copyright 2023 HRNet</p>
        </FooterContainer>
    )
}

export { FooterComponent };
