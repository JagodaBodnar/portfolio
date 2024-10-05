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

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <Main>
      <div>
        <HeaderOne $theme={theme}>Welcome.</HeaderOne>
        <Paragraph $theme={theme}>My name is Jagoda Bodnar, a fullstack java developer based in Uppsala, Sweden.
          I have worked on front-end projects, from finance applications to manager platforms,
          with a focus on creating clean, well-crafted interfaces that not only look great
          but also provide a seamless user experience.
        </Paragraph>
      </div>
      <Aside>
        <Projects />
        <Skills />
      </Aside>
    </Main>
  );
};

export default Home;