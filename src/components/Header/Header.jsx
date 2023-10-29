import { Flex, Spacer } from "@chakra-ui/react";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth.selectors";


export const Header=()=>{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <Flex p='10px' borderWidth='1px' borderRadius='lg' mb='10px' >
            <Navigation/>
            <Spacer/>
            <AuthNav/>
            <Spacer/>
            {isLoggedIn &&<UserMenu/>}
        </Flex>
    );
}