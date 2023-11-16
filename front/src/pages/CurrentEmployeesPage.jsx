import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BackgroundComponent } from "../components/BackgroundComponent";

const CurrentEmployeesPageContainer = styled.div`
`;

function CurrentEmployeesPage() {
    return (
        <CurrentEmployeesPageContainer>
            <HeaderComponent />
            <BackgroundComponent />
            <FooterComponent />
        </CurrentEmployeesPageContainer>
    )
}

export { CurrentEmployeesPage };
