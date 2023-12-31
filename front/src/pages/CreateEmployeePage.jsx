import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { FormComponent } from "../components/FormCreateEmployee";
import { ButtonComponent } from "../components/ButtonComponent";
import { useState } from "react";
import { ModalComponent } from "../components/ModalComponent";
import { useDispatch } from 'react-redux';
import { saveEmployee } from "../reduxStore";

const PageContainer = styled.div`
`;
const GrayBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
const CreateEmployeePageContainer = styled.div`
    position: relative;
`;

const FormDiv = styled.div`
    position: absolute;
    left: 29%;
    top: 72%;
`;

const ButtonDiv = styled.div`
    position: absolute;
    left: 77%;
    top: 275%;
`;

function CreateEmployeePage() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const requiredFields = document.querySelectorAll('input[required], select[required]');
        let allFieldsFilled = true;
        const employeeData = {};

        requiredFields.forEach(field => {
            if(!field.value) {
                allFieldsFilled = false;
            } else {
                employeeData[field.name] = field.value;
            }
        });
        
        if(allFieldsFilled) {
            dispatch(saveEmployee(employeeData)); // Dispatch action to save employee data
            setShowModal(true);
        } else {
            alert("Some elements are missing to complete a new registration");
        }
    };

    const handleCloseModalClic = () => {
        setShowModal(false);
        const requiredFields = document.querySelectorAll('input[required], select[required]');
        requiredFields.forEach(field => {
            field.value = '';
        })
    };

    return (
        <PageContainer>
            <CreateEmployeePageContainer>
                <HeaderComponent />
                <FormDiv>
                    <FormComponent />
                </FormDiv>
                <ButtonDiv>
                    <ButtonComponent content="Save new employee" onClick={handleSaveClick}/>
                </ButtonDiv>
                <FooterComponent />
            </CreateEmployeePageContainer>
                {showModal && (
                    <>
                    <GrayBackground />
                    <ModalComponent handleCloseModalClic={handleCloseModalClic} />
                    </>
                )}
        </PageContainer>
    )
}

export { CreateEmployeePage };
