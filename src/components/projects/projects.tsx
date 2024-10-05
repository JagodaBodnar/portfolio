import Slider from "../slider/Slider.tsx";
import Header from "../header/header.tsx";
import SingleProject from "./single-project/single-project.tsx";
import {projects} from "../../views/data.ts";
import styled from "styled-components";

const Wrapper= styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`

const Projects = () => {
  return (
    <Section>
      <Header header="Projects"/>
      <Slider>{projects.map(el=><Wrapper><SingleProject el={el}/></Wrapper>)}</Slider>
    </Section>
  );
};

export default Projects;

