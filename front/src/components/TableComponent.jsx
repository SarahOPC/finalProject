import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // Generation of unique ID
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const theme = createTheme({
    components: {
        TableComponent,
        MuiTable: {
            styleOverrides: {
                root: {
                    palette: {
                        primary: {
                            main: '#5D0486',
                            contrastText: '#FFFFFF',
                        },
                        contrastThreshold: 4.5,
                    }
                }
            }
        }
    }
})

const CustomTableCell = styled(TableCell)`
    border-bottom: 0.1em solid #5D0486 !important; // !important is used to be sure the style is applied (vs style of material ui)
`;

const PageNumber = styled.div`
    margin: 0em 1.5em;
`;

const Paging = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5em;
    align-items: center;
`;

const ChoiceOfRowsPerPageAndResearch = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 2em;
`;

const IWantToSee = styled.p`
    font-weight: 600;
    margin-left: 0.8em;
`;

const ResearchDiv = styled.div`
    font-weight: 600;
    
    input {
        border: none;
        border-bottom: 0.1em solid transparent;
        transition: border-bottom 0.3s ease;
            &:hover {
                border-bottom : 0.1em solid #333333;
            }
    }
`;

const rowsPerPageOptions = [5, 10, 20, 50];

function TableComponent() {
    
    const allEmployees = useSelector((state) => state.employee.employees); // Select employee data from the store

    const rows = [
        {id: uuidv4(), firstName: 'Gal', lastName: 'Gadot', startDate: '2022-11-25', department: 'Sales', dob: '1983-10-29', street: '1125 Rue des Mimosas', city: 'New York', usState: 'NY', zip: '12345'},
        {id: uuidv4(), firstName: 'Margot', lastName: 'Robbie', startDate: '2021-06-13', department: 'Engineering', dob: '1980-06-13', street: '2511 Rue des Marguerites', city: 'Miami', usState: 'FL', zip: '12346'},
        {id: uuidv4(), firstName: 'Scarlett', lastName: 'Johansson', startDate: '2023-07-10', department: 'Marketing', dob: '2001-04-03', street: '1215 Rue du Lys', city: 'Waiikiki', usState: 'HI', zip: '12347'},
        {id: uuidv4(), firstName: 'Jenna', lastName: 'Ortega', startDate: '2019-02-11', department: 'Human Resources', dob: '1975-05-07', street: '297 Rue des Roses', city: 'Los Angeles', usState: 'CA', zip: '12341'},
        {id: uuidv4(), firstName: 'Jane', lastName: 'Fonda', startDate: '2022-03-13', department: 'Legal', dob: '1977-05-03', street: '20345 Rue des Muguets', city: 'Chandler', usState: 'AZ', zip: '12349'},
        {id: uuidv4(), firstName: 'Halle', lastName: 'Berry', startDate: '2021-09-15', department: 'Sales', dob: '1973-08-19', street: '1940 Rue des Gerberas', city: 'Cheyenne', usState: 'WY', zip: '12350'},
    ];

    allEmployees.forEach(e=>{
        rows.push({id: uuidv4(), firstName: e.firstName, lastName: e.lastName, startDate: e.startDate, department: e.department, dob:e.dob, street: e.street, city:e.city, usState:e.usState, zip:e.zip});
    });

    const convertingDateStringToDateObject = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return new Date(year, month - 1, day).getTime(); // month -1 because, in JS, months start at 0
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
                        return a[orderBy].localeCompare(b[orderBy]);
                    } else {
                        return b[orderBy].localeCompare(a[orderBy]);
                    }
                }
            });
            // if no orderBy set, returns the original rows array
        }
        return rows;
    }

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]); // By default 5 items per page
    const [searchText, setSearchText] = useState('');
    
    const handleChangeOfPagePrevious = () => {
        if(page > 1) {
            setPage(page - 1);
        }
    };
    
    const sortedRowsData = sortedRows();
    
    const handleChangeOfPageForward = () => {
        const totalPages = Math.ceil(sortedRowsData.length / rowsPerPage);
        if(page + 1<= totalPages) {
            setPage(page + 1);
        }
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1); // Coming back to the first page if change of rows per page
    };
    
    const filteredRows = sortedRowsData.filter(row => {
        return (
            (row.firstName.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.lastName.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.startDate.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.department.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.dob.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.street.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.city.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.usState.toLowerCase()).includes(searchText.toLowerCase()) ||
            (row.zip.toLowerCase()).includes(searchText.toLowerCase())
            )
        }); 
        
        const handleSearchInputChange = (event) => {
            setSearchText(event.target.value);
        };

        const displayedRows = filteredRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);
        
        // sx = style for material ui

        return (
        <ThemeProvider theme={theme}>
            <ChoiceOfRowsPerPageAndResearch>
                <IWantToSee>
                    <label htmlFor="rowsPerPageSelect">Rows per page : </label>
                    <select
                        id="rowsPerPageSelect"
                        value={rowsPerPage}
                        onChange={handleChangeRowsPerPage}
                    >
                        {rowsPerPageOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </IWantToSee>
                <Tooltip title="Search on this page's items" placement="right">
                    <ResearchDiv>
                        <label htmlFor="research">Search : </label>
                        <input type="text" id="research" value={searchText} onChange={handleSearchInputChange}/>
                    </ResearchDiv>
                </Tooltip>
            </ChoiceOfRowsPerPageAndResearch>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel color="theme.palette.primary.main"
                                    active={orderBy === 'firstName'}
                                    direction={orderBy === 'firstName' ? order : 'asc'}
                                    onClick={() => handleSorting('firstName')}
                                >First Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'lastName'}
                                    direction={orderBy === 'lastName' ? order : 'asc'}
                                    onClick={() => handleSorting('lastName')}
                                >Last Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'startDate'}
                                    direction={orderBy === 'startDate' ? order : 'asc'}
                                    onClick={() => handleSorting('startDate')}
                                >Start Date
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'department'}
                                    direction={orderBy === 'department' ? order : 'asc'}
                                    onClick={() => handleSorting('department')}
                                >Department
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'dob'}
                                    direction={orderBy === 'dob' ? order : 'asc'}
                                    onClick={() => handleSorting('dob')}
                                >Date of Birth
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'street'}
                                    direction={orderBy === 'street' ? order : 'asc'}
                                    onClick={() => handleSorting('street')}
                                >Street
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'city'}
                                    direction={orderBy === 'city' ? order : 'asc'}
                                    onClick={() => handleSorting('city')}
                                >City
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
                                <TableSortLabel
                                    active={orderBy === 'usState'}
                                    direction={orderBy === 'usState' ? order : 'asc'}
                                    onClick={() => handleSorting('usState')}
                                >State
                                </TableSortLabel>
                            </TableCell>
                            <TableCell sx={{    lineHeight: '0.5em',
                                                padding: '0.5em 1em',
                                                fontWeight: '600',
                                                borderBottom: '0.1em solid transparent',
                                                transition: 'border-bottom 0.3s ease',
                                                '&:hover': {
                                                    borderBottom: '0.1em solid #5D0486',
                                                },
                                            }}>
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
                        {displayedRows.map((row) => (
                            <TableRow key={row.id}>
                                <CustomTableCell>{row.firstName}</CustomTableCell>
                                <CustomTableCell>{row.lastName}</CustomTableCell>
                                <CustomTableCell>{row.startDate}</CustomTableCell>
                                <CustomTableCell>{row.department}</CustomTableCell>
                                <CustomTableCell>{row.dob}</CustomTableCell>
                                <CustomTableCell>{row.street}</CustomTableCell>
                                <CustomTableCell>{row.city}</CustomTableCell>
                                <CustomTableCell>{row.usState}</CustomTableCell>
                                <CustomTableCell>{row.zip}</CustomTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paging>
                <Tooltip title='Previous page' placement="left">
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "#5d0486", cursor:'pointer'}} onClick={handleChangeOfPagePrevious} />
                </Tooltip>
                <PageNumber>{page}</PageNumber>
                <Tooltip title='Next page' placement="right">
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#5d0486", cursor:'pointer'}} onClick={handleChangeOfPageForward}/>
                </Tooltip>
            </Paging>
        </ThemeProvider>
    )
}

export { TableComponent };
