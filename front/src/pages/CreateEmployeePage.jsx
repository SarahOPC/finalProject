import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BackgroundComponent } from "../components/BackgroundComponent";
import { FormComponent } from "../components/FormCreateEmployee";
import { ButtonComponent } from "../components/ButtonComponent";

const CreateEmployeePageContainer = styled.div`
    position: relative;
`;

const FormDiv = styled.div`
    position: absolute;
    left: 23%;
    top: 29%;
`;

const ButtonDiv = styled.div`
    position: absolute;
    left: 47%;
    top: 75%;
`;

function CreateEmployeePage() {
    return (
        <CreateEmployeePageContainer>
            <HeaderComponent />
            <BackgroundComponent customStyles={{fontSize: "3em", textAlign: "center", marginTop: "0.3em", color:"#FFFFFF"}} content="Create an Employee"/>
            <FormDiv>
                <FormComponent />
            </FormDiv>
            <ButtonDiv>
                <ButtonComponent content="Save" />
            </ButtonDiv>
            <FooterComponent />
        </CreateEmployeePageContainer>
    )
}

export { CreateEmployeePage };
