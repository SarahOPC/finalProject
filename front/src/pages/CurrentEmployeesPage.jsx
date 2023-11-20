import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BackgroundComponent } from "../components/BackgroundComponent";
import { TableComponent } from "../components/TableComponent";

const CurrentEmployeesPageContainer = styled.div`
    position: relative;
`;

const TableDiv = styled.div`
    position: absolute;
    left: 20%;
    top: 28%;
`;

function CurrentEmployeesPage() {
    return (
        <CurrentEmployeesPageContainer>
            <HeaderComponent />
            <BackgroundComponent customStyles={{fontSize: "3em", textAlign: "center", marginTop: "0.3em", color:"#291EF4"}} content="Visualize All Employees" />
            <TableDiv>
                <TableComponent />
            </TableDiv>
            <FooterComponent />
        </CurrentEmployeesPageContainer>
    )
}

export { CurrentEmployeesPage };
