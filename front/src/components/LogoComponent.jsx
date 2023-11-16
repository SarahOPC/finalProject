import styled from 'styled-components';
import Logo from "../assets/LogoHRNet.jpg";

const LogoImage = styled.img`
    width: 17%;
`;

function LogoComponent() {
    return (
        <LogoImage src={Logo} alt="Logo HRNet" />
    )
}

export { LogoComponent };
