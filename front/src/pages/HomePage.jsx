import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BackgroundComponent } from "../components/BackgroundComponent";

const HomePageContainer = styled.div`
`;

function HomePage() {
    return (
        <HomePageContainer>
            <HeaderComponent />
            <BackgroundComponent customStyles={{fontSize: "7em", textAlign: "center", marginTop: "3em"}} content="Welcome to our new version of HRNet"/>
            <FooterComponent />
        </HomePageContainer>
    )
}

export { HomePage };
