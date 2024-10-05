import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.ts";
import styled from "styled-components";

const HeaderTwo = styled.h1<{$theme:string}>`
  font-size: 30px;
  color: ${props=> props.$theme === "light" ? "#000": "#fff"};
  letter-spacing: 5px;
  font-weight: 500;
`

type Props={
  header: string
}
const Header = ({header}: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <HeaderTwo $theme={theme}>{header}</HeaderTwo>
  );
};

export default Header;