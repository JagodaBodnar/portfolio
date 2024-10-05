import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../../../context/ThemeContext.ts";

const Link = styled.li<{$theme:string}>`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  color: ${props=> props.$theme ==="light" ? "#7e7c7c": "#fff"};
  &:hover {
    color: ${props=> props.$theme ==="light" ? "#000": "#fff"};
  }
  &:last-child{
    grid-column: span 2;
  }
`
const Icon = styled.div<{ $icon: string, $size: number }>`
  width: ${props => `${props.$size}px`};
  height: ${props => `${props.$size}px`};
  display: block;
  background-image: ${props => `url(../src/assets/${props.$icon}-icon.svg)`};
  background-size: cover;

  ${Link}:hover & {
    background-image: ${props => `url(../src/assets/${props.$icon}-icon-hover.svg)`};
  }
`

type Props = {
  el: {
    id: number,
    name: string,
    icon: string,
    size: number
  },
}
const SingleSkill = ({el}: Props) => {
  const theme= useContext(ThemeContext);
  return (
    <Link $theme={theme}><Icon $icon={el.icon} $size={el.size}/><p>{el.name}</p></Link>
  );
};

export default SingleSkill;

