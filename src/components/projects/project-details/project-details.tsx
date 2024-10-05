import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../../../context/ThemeContext.ts";
import {ProjectType} from "../types.ts";

const Title = styled.h3<{ $theme: string }>`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  color: ${props => props.$theme === "light" ? "#217eb0" : "#81c0e2"};
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

const Span = styled.a<{ $theme: string, $icon: string }>`
  background-image: ${props => props.$theme === "dark"
          ? `url(src/assets/${props.$icon}-icon.svg)`
          : `url(src/assets/${props.$icon}-icon-dark.svg)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
  display: block;
  cursor: pointer;

  &:hover {
    &:hover {
      scale: 1.05;
      transition: all 0.2s ease-in-out;

    }

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
    }
`

const Paragraph = styled.p<{ $theme: string }>`
  color: ${props => props.$theme === "dark" ? "#fff" : "#000"};
  @media (max-width: 600px) {
    font-size: 10px;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
`
type Props = {
  handleShowVideo: () => void;
  el: ProjectType;
}
const ProjectDetails = ({handleShowVideo, el}: Props) => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <Title $theme={theme}>{el.name}</Title>
      <Paragraph $theme={theme}>{el.description}</Paragraph>
      <div>
        <Paragraph $theme={theme}>{el.frontTech}</Paragraph>
        <Paragraph $theme={theme}>{el.backTech}</Paragraph>
      </div>
      <IconsWrapper>
        <Span onClick={handleShowVideo} target="_blank" $theme={theme} $icon="play"/>
        <Span href={el.code} target="_blank" $theme={theme} $icon="code"/>
        <Span href={el.website} target="_blank" $theme={theme} $icon="web"/>
      </IconsWrapper>
    </>
  );
};

export default ProjectDetails;