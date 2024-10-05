import styled from "styled-components";
import {useContext, useState} from "react";
import {ThemeContext} from "../../../context/ThemeContext.ts";
import Video from "../../video/video.tsx";
import ProjectDetails from "../project-details/project-details.tsx";
import {ProjectType} from "../types.ts";

const Wrapper = styled.div<{ $theme: string, $video: boolean }>`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  flex-direction: ${props => props.$video !== true && "column"};
  align-items: flex-start;
  padding: 10px;
  background: ${props => props.$theme === "dark" ? "" : "#f5f5f5"};
  @media(max-width: 600px){
    width: 300px;
    height: 200px;
  }
`

type Props = {
  el: ProjectType;
}

const SingleProject = ({el}: Props) => {
  const theme = useContext(ThemeContext)
  const [video, setVideo] = useState(false)
  const handleShowVideo = () => {
    setVideo(true);
  }
  const handleHideVideo = () => {
    setVideo(false);
  }
  return (
    <Wrapper $theme={theme} $video={video}>
      {video
        ? <Video handleHideVideo={handleHideVideo}/>
        : <ProjectDetails el={el} handleShowVideo={handleShowVideo} />
      }
    </Wrapper>
  );
};

export default SingleProject;