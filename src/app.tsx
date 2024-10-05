import Navigation from "./components/navigation/navigation.tsx";
import styled from "styled-components";
import Home from "./views/home.tsx";
import {useState} from "react";
import {ThemeContext} from "./context/ThemeContext.ts";

const PageWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`
const Body = styled.body<{ $theme: string }>`
  background: ${props => props.$theme === "light" ? `radial-gradient(circle, #f1f1f1 10%, transparent 11%),
  radial-gradient(circle at bottom left, #f1f1f1 5%, transparent 6%),
  radial-gradient(circle at bottom right, #f1f1f1 5%, transparent 6%),
  radial-gradient(circle at top left, #f1f1f1 5%, transparent 6%),
  radial-gradient(circle at top right, #f1f1f1 5%, transparent 6%)` : `radial-gradient(circle, #3e3e3e 10%, transparent 11%),radial-gradient(circle at bottom left, #3e3e3e 5%, transparent 6%),radial-gradient(circle at bottom right, #3e3e3e 5%, transparent 6%),radial-gradient(circle at top left, #3e3e3e 5%, transparent 6%),radial-gradient(circle at top right, #3e3e3e 5%, transparent 6%)`};
  background-size: 2em 2em;
  background-color: ${props => props.$theme === "light" ? "#fefeff" : "#454446"};
  opacity: 1;
`

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
       <Body $theme={theme}>
          <PageWrapper>
            <Navigation handleThemeChange={handleThemeChange}/>
            <Home/>
          </PageWrapper>
      </Body>
    </ThemeContext.Provider>
  )
}

export default App
