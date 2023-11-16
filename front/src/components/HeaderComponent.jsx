import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";
import { MenuComponent } from "./MenuComponent";
import { BackgroundComponent } from "./BackgroundComponent";

const HeaderContainer = styled.div`
`;

const LogoAndMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

function HeaderComponent() {
    return (
        <HeaderContainer>
            <LogoAndMenuContainer>
                <LogoComponent />
                <MenuComponent />
            </LogoAndMenuContainer>
            <BackgroundComponent customStyles={{fontSize: "7em", textAlign: "center", marginTop: "3em"}} content="Welcome to our new version of HRNet"/>
        </HeaderContainer>
    )
}

export { HeaderComponent };
