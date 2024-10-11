import styled from "styled-components";
import Skills from "../components/skills/skills.tsx";
import Projects from "../components/projects/projects.tsx";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.ts";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  min-height: 70%;
  gap: 5%;
  @media(max-width:920px){
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`
const HeaderOne = styled.h1<{$theme:string}>`
  font-size: 100px;
  color: ${props=> props.$theme === "light" ? "#000": "#fff"};
  letter-spacing: 10px;
  font-weight: 500;
  @media(max-width:600px) {
    margin-top: 50px;
    font-size: 50px;
  }
`
const Paragraph = styled.p<{$theme:string}>`
  color: ${props => props.$theme === "light" ? "#000" : "#fff"};
  border-left: 3px solid #60b7e6;
  padding: 20px;
  font-size: 20px;
  text-align: justify;
`
const Aside = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
  margin: 50px 0;
  @media(max-width: 920px){
    width: 100%;
    align-items: flex-start;
  }
`
const Resume = styled.a`
  text-decoration: none;
  color: #fff;
  background-color:  #60B7E6;
  padding: 10px;
  

`

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <Main>
      <div>
        <HeaderOne $theme={theme}>Welcome.</HeaderOne>
        <Paragraph $theme={theme}> My name is Jagoda and I am an ambitious and passionate full-stack java developer
          based in Uppsala, Sweden. My diverse range of skills, experience and knowledge helps me create
          clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
        </Paragraph>
        <Resume href="public/CV-Jagoda_Bodnar.pdf" download>Resume</Resume>
      </div>
      <Aside>
        <Projects />
        <Skills />
      </Aside>
    </Main>
  );
};

export default Home;