import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
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

    // sx = style for material ui

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
        if((page + 1) * rowsPerPage < sortedRowsData.length) {
            setPage(page + 1);
        }
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(1); // Coming back to the first page if change of rows per page
    };

    const displayedRows = sortedRowsData.slice();

    const filteredRows = displayedRows.filter(row => {
        return (
            row.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            row.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
            row.startDate.toLowerCase().includes(searchText.toLowerCase()) ||
            row.department.toLowerCase().includes(searchText.toLowerCase()) ||
            row.dob.toLowerCase().includes(searchText.toLowerCase()) ||
            row.street.toLowerCase().includes(searchText.toLowerCase()) ||
            row.city.toLowerCase().includes(searchText.toLowerCase()) ||
            row.state.toLowerCase().includes(searchText.toLowerCase()) ||
            row.zip.toLowerCase().includes(searchText.toLowerCase())
        )
    });

    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

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
                                    active={orderBy === 'state'}
                                    direction={orderBy === 'state' ? order : 'asc'}
                                    onClick={() => handleSorting('state')}
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
                        {filteredRows.map((row) => (
                            <TableRow key={row.id}>
                                <CustomTableCell>{row.firstName}</CustomTableCell>
                                <CustomTableCell>{row.lastName}</CustomTableCell>
                                <CustomTableCell>{row.startDate}</CustomTableCell>
                                <CustomTableCell>{row.department}</CustomTableCell>
                                <CustomTableCell>{row.dob}</CustomTableCell>
                                <CustomTableCell>{row.street}</CustomTableCell>
                                <CustomTableCell>{row.city}</CustomTableCell>
                                <CustomTableCell>{row.state}</CustomTableCell>
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
