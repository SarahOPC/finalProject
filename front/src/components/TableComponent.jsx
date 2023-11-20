import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { useState } from "react";

function TableComponent() {
    const rows = [
        {id: 1, firstName: 'John', lastName: 'Doe', startDate: '25/11/2022', department: 'Sales', dob: '01/01/1990', street: '1125 Rue des usines', city: 'New York', state: 'New York', zip: 'J7J'},
        {id: 2, firstName: 'Jane', lastName: 'Doebby', startDate: '13/11/2021', department: 'Engineering', dob: '13/06/1983', street: '2511 Rue des manufactures', city: 'Miami', state: 'Florida', zip: 'J7F'},
        {id: 3, firstName: 'Jade', lastName: 'Wall', startDate: '07/06/2023', department: 'Marketing', dob: '04/03/1980', street: '1215 Rue du travail', city: 'Waiikiki', state: 'Hawaii', zip: 'J7H'},
    ];

    const convertingDateStringToDateObject = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${month}/${day}/${year}`).getTime();
    };

    const [orderBy, setOrderBy] = useState('');
    const [order, setOrder] = useState('asc');

    const handleSorting = (property) => {
        const isAscending = orderBy === property && order === 'asc';
        // this const determine if the current sorting order for a column should be ascending or not.
        // If current orderBy matches the property and if order === 'asc' so current order for the column is ascending
        setOrder(isAscending ? 'desc' : 'asc');
        setOrderBy(property);
        // setOrder and setOrderBy will updated order and orderBy depending on the current sorting order
        // If 'isAscending' is true = sets order to 'desc' (and vice versa) and orderBy takes the new property value
    };

    const sortedRows = () => {
        if(orderBy) {
            return [...rows].sort((a, b) => {
                // If there is a orderBy value set (means a column was selected to sort items)
                // returns a copy of rows array
                if(orderBy === 'startDate' || orderBy === 'dob') {
                    const dateA = convertingDateStringToDateObject(a[orderBy]);
                    const dateB = convertingDateStringToDateObject(b[orderBy]);

                    if(order === 'asc') {
                        return dateA - dateB;
                    } else {
                        return dateB - dateA;
                    }
                } else {
                    if(order === 'asc') {
                        return a[orderBy] > b[orderBy] ? 1 : -1;
                        // if order === 'asc', sort the rows in ascending order
                        // Check if a[orderBy] is greater than b[orderBy]
                        // 1 indicate a should come after b and vice versa
                    } else {
                        return a[orderBy] < b[orderBy] ? 1 : -1;
                        // if order === 'desc', sort the rows in descending order
                        // Check if a[orderBy] is less than b[orderBy]
                        // 1 indicate a should come after b and vice versa
                    }
                }
            });
            // if no orderBy set, returns the original rows array
        }
        return rows;
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'firstName'}
                                direction={orderBy === 'firstName' ? order : 'asc'}
                                onClick={() => handleSorting('firstName')}
                            >First Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'lastName'}
                                direction={orderBy === 'lastName' ? order : 'asc'}
                                onClick={() => handleSorting('lastName')}
                            >Last Name
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'startDate'}
                                direction={orderBy === 'startDate' ? order : 'asc'}
                                onClick={() => handleSorting('startDate')}
                            >Start Date
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'department'}
                                direction={orderBy === 'department' ? order : 'asc'}
                                onClick={() => handleSorting('department')}
                            >Department
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'dob'}
                                direction={orderBy === 'dob' ? order : 'asc'}
                                onClick={() => handleSorting('dob')}
                            >Date of Birth
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'street'}
                                direction={orderBy === 'street' ? order : 'asc'}
                                onClick={() => handleSorting('street')}
                            >Street
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'city'}
                                direction={orderBy === 'city' ? order : 'asc'}
                                onClick={() => handleSorting('city')}
                            >City
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'state'}
                                direction={orderBy === 'state' ? order : 'asc'}
                                onClick={() => handleSorting('state')}
                            >State
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                active={orderBy === 'zip'}
                                direction={orderBy === 'zip' ? order : 'asc'}
                                onClick={() => handleSorting('zip')}
                            >Zip Code
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedRows().map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.startDate}</TableCell>
                            <TableCell>{row.department}</TableCell>
                            <TableCell>{row.dob}</TableCell>
                            <TableCell>{row.street}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.state}</TableCell>
                            <TableCell>{row.zip}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export { TableComponent };