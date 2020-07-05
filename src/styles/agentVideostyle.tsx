import styled from 'styled-components';

export const VideoTitleLine = styled.div`
  margin: 10px 10px 10px 0;
  padding: 0 0 0 10px;
  border-left: solid ${(props) => props.theme.gray} 4px;
  height: 18px;
  font-size: 16px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: ${(props) => props.theme.fontblack};
  line-height: 18px;
  z-index: 21;
`;

export const AgentVedio = styled.div`
  width: 258px;
  height: 215px;
  min-width: 258px;
  min-height: 215px;
  text-align: center;
  line-height: 215px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  background-color: ${(props) => props.theme.white};
  z-index: 21;
`;
