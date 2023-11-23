import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { TableComponent } from "../components/TableComponent";

const CurrentEmployeesPageContainer = styled.div`
    position: relative;
`;

const TableDiv = styled.div`
    position: absolute;
    left: 20%;
    top: 115%;
`;

function CurrentEmployeesPage() {
    return (
        <CurrentEmployeesPageContainer>
            <HeaderComponent />
            <TableDiv>
                <TableComponent />
            </TableDiv>
            <FooterComponent />
        </CurrentEmployeesPageContainer>
    )
}

export { CurrentEmployeesPage };
