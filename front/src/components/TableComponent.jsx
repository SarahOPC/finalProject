import styled from "styled-components";

const TableContainer = styled.table`
`;

function TableComponent() {
    return (
        <TableContainer>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
            </tr>
        </TableContainer>
    )
}

export { TableComponent };
