import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from "../assets/LogoHRNet.jpg";

const LogoImage = styled.img`
    width: 63%;
`;

function LogoComponent() {
    return (
        <Link to="/">
            <LogoImage src={Logo} alt="Logo HRNet"/>
        </Link>
    )
}

export { LogoComponent };
