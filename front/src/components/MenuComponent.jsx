import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right: 1.5em;
    padding: 0.3em 0.5em;
    color: #291EF4;

    &:hover {
        background-color: #291EF4;
        color: #FFFFFF;
        border-radius : 0em 0.5em;
    }

    &:visited {
        text-decoration: none;
    }
`;

function MenuComponent() {
    return (
        <MenuContainer>
            <StyledLink to="/create">Create an Employee</StyledLink>
            <StyledLink to="/visualize">List Of Current Employees</StyledLink>
        </MenuContainer>
    )
}

export { MenuComponent };