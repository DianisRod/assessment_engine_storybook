import styled from "styled-components";


const Headline = styled.h1`
  color: ${(props) => props.color};
  font-size: 100px;
  font-weight: 100;
  text-align: center;
`;

const HeadlineComponent = ({ color }) => {
  return <Headline color={color}>todos</Headline>;
};

export default HeadlineComponent