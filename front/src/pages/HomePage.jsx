import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";

const HomePageContainer = styled.div`
`;

function HomePage() {
    return (
        <HomePageContainer>
            <HeaderComponent />
            <FooterComponent />
        </HomePageContainer>
    )
}

export { HomePage };
