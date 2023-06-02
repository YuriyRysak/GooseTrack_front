import { ColorRing } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";
import { themes } from "styles/themes";

export const Loader = () => {
    return(
        <Wrapper>
            <ColorRing 
                colors={themes.colors.loaderCircle}
            />
        </Wrapper>
    )
};

