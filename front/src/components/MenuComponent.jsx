import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right: 3.5em;
    padding: 0.3em 0.5em;
    color: #333333;
    font-weight: 600;
    border-bottom: 0.1em solid transparent;
    transition: border-bottom 0.3s ease;

    &:hover {
        border-bottom : 0.1em solid #333333;
    }

    &:visited {
        text-decoration: none;
    }
`;

function MenuComponent() {
    return (
        <MenuContainer>
            <StyledLink to="/create">Create an employee</StyledLink>
            <StyledLink to="/visualize">List of current employees</StyledLink>
        </MenuContainer>
    )
}

export { MenuComponent };