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

const Title = styled.div`
    color: #333333;
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 1.5em;
`;

function CreateEmployeePage() {
    return (
        <CreateEmployeePageContainer>
            <HeaderComponent />
            <Title>Create a new employee</Title>
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


    // import { useDispatch, useSelector } from "react-redux";

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const user = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
