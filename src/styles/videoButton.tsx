import styled from 'styled-components';

export const VideoBtn = styled.button`
  outline: 0;
  margin: 16px 0 0 10px;
  height: 38px;
  font-size: 16px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  background: ${(props) =>
    props.color === 'blue'
      ? 'linear-gradient(270deg,rgba(134,204,251,1) 0%,rgba(79,157,244,1) 100%)'
      : props.color};
  border-radius: 4px;
`;

export const SpanBtnTitle = styled.span`
  padding: 0 10px 0 10px;
`;
