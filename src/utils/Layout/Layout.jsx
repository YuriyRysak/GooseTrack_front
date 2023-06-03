import { ThemeProvider } from "@emotion/react";
import { useThemeColors } from "components/User/Header/ThemeToggler/ThemeContext";
import { Outlet } from "react-router-dom";
import { Loader } from "utils/Loader/Loader";

export function Layout() {

    const isLoading = false; // add state from redux
    const theme = useThemeColors().theme;

    return (
        <div>
            <ThemeProvider theme={theme}>
              <Outlet />
                {isLoading && <Loader />}  
            </ThemeProvider>
            
        </div>
    )
}
