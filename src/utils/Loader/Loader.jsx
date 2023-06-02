import { ColorRing } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";
import { useTheme } from "@emotion/react";

export const Loader = () => {

    const themeColors = useTheme().colors;

    return(
        <Wrapper>
            <ColorRing 
                colors={themeColors.loaderCircle}
            />
        </Wrapper>
    )
};

