import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { FormComponent } from "../components/FormCreateEmployee";
import { ButtonComponent } from "../components/ButtonComponent";
import { useState } from "react";
import { ModalComponent } from "../components/ModalComponent";

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
    const [showModal, setShowModal] = useState(false);

    const handleSaveClick = () => {
        const requiredFields = document.querySelectorAll('input[required], select[required]');
        let allFieldsFilled = true;

        requiredFields.forEach(field => {
            if(!field.value) {
                allFieldsFilled = false;
            }    
        });
        if(allFieldsFilled) {
            setShowModal(true);
        } else {
            alert("Some elements are missing to complete a new registration");
        }
    };

    const handleCloseModalClic = () => {
        setShowModal(false);
    };

    return (
        <CreateEmployeePageContainer>
            <HeaderComponent />
            <FormDiv>
                <FormComponent />
            </FormDiv>
            <ButtonDiv>
                <ButtonComponent content="Save new employee" onClick={handleSaveClick}/>
            </ButtonDiv>
            <FooterComponent />
            {showModal && <ModalComponent handleCloseModalClic={handleCloseModalClic} />}
        </CreateEmployeePageContainer>
    )
}

export { CreateEmployeePage };


    // import { useDispatch, useSelector } from "react-redux";

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const user = useSelector((state) => state.user);
    // const dispatch = useDispatch();
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
