import styled from "styled-components";

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
  handleHideVideo: () => void
}

const Video = ({handleHideVideo}: Props) => {
  return (
    <>
      <Iframe
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </Iframe>
      <CloseButton onClick={handleHideVideo}/>
    </>
  );
};

export default Video;