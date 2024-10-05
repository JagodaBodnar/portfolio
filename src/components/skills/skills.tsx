import {skills} from "../../views/data.ts";
import styled from "styled-components";
import SingleSkill from "./single-skill/single-skill.tsx";
import Header from "../header/header.tsx";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: flex-start;
  gap: 20px;
  padding: 0;
  @media(max-width: 600px){
    grid-template-columns: repeat(2, 1fr);
  }
`
const Section= styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Skills = () => {
  return (
    <Section>
      <Header header="Skills"/>
      <List>
        {skills.map(el => {
          return (
            <SingleSkill el={el} key={el.id}/>
          )
        })}
      </List>
    </Section>
  )
};

export default Skills;



