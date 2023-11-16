import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BackgroundComponent } from "../components/BackgroundComponent";

const CreateEmployeePageContainer = styled.div`
`;

function CreateEmployeePage() {
    return (
        <CreateEmployeePageContainer>
            <HeaderComponent />
            <BackgroundComponent />
            <FooterComponent />
        </CreateEmployeePageContainer>
    )
}

export { CreateEmployeePage };
