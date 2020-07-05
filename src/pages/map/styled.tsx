import styled from 'styled-components';

export const Card = styled.div`
  height: 50px;
  width: 100px;
  border: 1px solid black;
  background: ${(props) =>
    props.color === 'blue'
      ? 'linear-gradient(270deg,rgba(134,204,251,1) 0%,rgba(79,157,244,1) 100%)'
      : props.color};
`;
