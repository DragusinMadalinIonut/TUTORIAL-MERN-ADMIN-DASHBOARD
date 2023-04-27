import {  CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import {BrowserRouter,Navigate,Route, Routes} from "react-router-dom";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Customers from "./scenes/customers";
import Transactions from "./scenes/transactions";
import Geography from "./scenes/geography";
import Overview from "./scenes/overview";
import BreakdownChart from "./components1/BreakdownChart";
import Admin from "./scenes/admin";
import Performance from "./scenes/performance";
import Daily from "./scenes/daily";
import Monthly from "./scenes/monthly";


function App() {  
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    //sets up material ui
    return (
        <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}> 
        <CssBaseline/>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/overview" element={<Overview/>} />
                <Route path="/breakdown"  element={<BreakdownChart/>} />
                <Route path="/geography"  element={<Geography/>} />
                <Route path="/admin"  element={<Admin/>} />
                <Route path="/performance"  element={<Performance/>} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/monthly" element={<Monthly />} />
                
            </Route>
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
     </div>
    );
}

export default App;
//for navbar use react router DOM
//evry route is gonna have Layout Navbar and sidebar