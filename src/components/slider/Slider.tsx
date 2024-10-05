import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import styled from "styled-components";
import {ReactNode} from "react";

const SliderWrapper = styled(AwesomeSlider)`
  & .awssld__content{
    border-radius: 15px;
  }
`
type Props = {
  children: ReactNode
}
const Slider = ({children}: Props) => {
  const Wrapper = styled.div`
    width: 500px;
    @media (max-width: 600px) {
      width: 300px;
    }
  `
  return (
    <Wrapper>
      <SliderWrapper animation="cubeAnimation" buttons={false}>
        {children}
      </SliderWrapper>
    </Wrapper>
  );
}
export default Slider;