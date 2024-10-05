import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.ts";
import moon from '../../assets/moon-icon.svg'
import sun from '../../assets/sun-icon.svg'

const Icon = styled.a<{ $icon: string, $size: number }>`
  width: ${props => `${props.$size}px`};
  height: ${props => `${props.$size}px`};
  display: block;
  background-image: ${props => `url(../src/assets/${props.$icon}-icon.svg)`};
  background-size: cover;

  &:hover {
    background-image: ${props => `url(../src/assets/${props.$icon}-icon-hover.svg)`};
  }
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  padding-top: 50px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`
const Slider = styled.span<{$theme:string}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.$theme === "light" ? "#393939" : "#DDDDDD"};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  &:after{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    right: ${props => props.$theme === "light" && '2px'};
    left: ${props => props.$theme !== "light" && '6px'};
    bottom: 1px;
    background-image: ${props => props.$theme === "light" ? `url(${moon})` : `url(${sun})`};
    background-size: 20px;
    background-repeat: no-repeat;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.$theme === "light" ? "#fff" : "#393939"};;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`
const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider}:before {
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

type Props = {
  handleThemeChange: () => void
}
const Navigation = ({handleThemeChange}: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Nav>
      <List>
        <li><Icon href="https://www.linkedin.com/in/jagoda-bodnar-765a90a6/" alt="linkedin icon" $size={30}
                  $icon={'linkedin'}/></li>
        <li><Icon href="https://github.com/JagodaBodnar" alt="github icon" $size={35} $icon={'github'} target="_blank"/>
        </li>
        <li><Icon href="mailto:dev.jagodabodnar@gmail.com" alt="gmail icon" $size={40} $icon={'gmail'}/></li>
        <Switch>
          <SwitchInput type="checkbox" onClick={handleThemeChange}/>
          <Slider $theme={theme}/>
        </Switch>
      </List>
    </Nav>
  );
};

export default Navigation;