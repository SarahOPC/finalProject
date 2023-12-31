import styled from "styled-components";

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    padding-bottom: 1em;

    p {
        color: #677d15;
        font-weight: bold;
    }
`;

function FooterComponent() {
    return (
        <FooterContainer>
            <p>Copyright 2023 HRNet - WealthHealth</p>
        </FooterContainer>
    )
}

export { FooterComponent };
