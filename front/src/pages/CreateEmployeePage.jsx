import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { FormComponent } from "../components/FormCreateEmployee";
import { ButtonComponent } from "../components/ButtonComponent";

const CreateEmployeePageContainer = styled.div`
    position: relative;
`;

const FormDiv = styled.div`
    position: absolute;
    left: 31%;
    top: 72%;
`;

const ButtonDiv = styled.div`
    position: absolute;
    left: 77%;
    top: 275%;
`;

function CreateEmployeePage() {
    return (
        <CreateEmployeePageContainer>
            <HeaderComponent />
            <FormDiv>
                <FormComponent />
            </FormDiv>
            <ButtonDiv>
                <ButtonComponent content="Save new employee" />
            </ButtonDiv>
            <FooterComponent />
        </CreateEmployeePageContainer>
    )
}

export { CreateEmployeePage };


    // import { useDispatch, useSelector } from "react-redux";

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const user = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
