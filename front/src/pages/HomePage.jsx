import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BackgroundComponent } from "../components/BackgroundComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const HomePageContainer = styled.div`
    position: relative;
`;

const StyledButtons = styled.div`
    position: absolute;
    left: 41%;
    top: 68%;
`;

function HomePage() {
    const navigate = useNavigate();

    const handleNavToCreate = () => {
        navigate('/create');
    };

    const handleNavToVisualize = () => {
        navigate('/visualize');
    };

    return (
        <HomePageContainer>
            <HeaderComponent />
            <BackgroundComponent customStyles={{fontSize: "6em", textAlign: "center", marginTop: "1.5em"}} content="Welcome to our new version of HRNet"/>
            <StyledButtons>
                <ButtonComponent onClick={handleNavToCreate} content="Create an Employee"></ButtonComponent>
                <ButtonComponent onClick={handleNavToVisualize} content="List of Current Employees"></ButtonComponent>
            </StyledButtons>
            <FooterComponent />
        </HomePageContainer>
    )
}

export { HomePage };
