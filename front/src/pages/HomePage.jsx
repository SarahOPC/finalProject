import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const HomePageContainer = styled.div`
    position: relative;
`;

const StyledButtons = styled.div`
    position: absolute;
    left: 38%;
    top: 111%;
`;

const WelcomePart = styled.div`
    color: #444444;
    font-weight: 600;
    font-size: 6em;
    text-align: center;
    width: 9em;
`;

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.5em;
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
            <StyledButtons>
                <ButtonComponent onClick={handleNavToCreate} content="Create an Employee"></ButtonComponent>
                <ButtonComponent onClick={handleNavToVisualize} content="List of Current Employees"></ButtonComponent>
            </StyledButtons>
            <WelcomeContainer>
                <WelcomePart>Welcome to our new version of HRNet</WelcomePart>
            </WelcomeContainer>
            <FooterComponent />
        </HomePageContainer>
    )
}

export { HomePage };
