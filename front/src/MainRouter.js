import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreateEmployeePage } from "./pages/CreateEmployeePage";
import { CurrentEmployeesPage } from "./pages/CurrentEmployeesPage";


function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreateEmployeePage />} />
                <Route path="/visualize" element={<CurrentEmployeesPage/>} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
