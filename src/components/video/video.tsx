import styled from "styled-components";
import {ProjectType} from "../projects/types.ts";

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background-image: url("close-icon.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 10;
  right: 0;
  cursor: pointer;
`

type Props = {
  handleHideVideo: () => void,
  el: ProjectType
}

const Video = ({handleHideVideo, el}: Props) => {
  return (
    <>
      <Iframe allowfullscreen
        src={el.video}>
      </Iframe>
      <CloseButton onClick={handleHideVideo}/>
    </>
  );
};

export default Video;