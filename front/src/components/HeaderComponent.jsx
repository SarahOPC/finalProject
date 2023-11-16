import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";
import { MenuComponent } from "./MenuComponent";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

function HeaderComponent() {
    return (
        <HeaderContainer>
                <LogoComponent />
                <MenuComponent />
        </HeaderContainer>
    )
}

export { HeaderComponent };
