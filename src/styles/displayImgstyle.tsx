import styled from 'styled-components';

export const Box = styled.div`
  /* float: left; */
  width: 232px;
  margin: 0 10px;
  .img-top {
    margin-top: 15px;
    position: relative;
  }
  .temp-img {
    margin-top: 5px;
    width: 202px;
    height: 185px;
    background: rgba(236, 236, 236, 1);
  }
`;

export const Dot = styled.div`
  display: inline-block;
  margin: 0 10px 0 0;
  width: 6px;
  height: 6px;
  margin: 5px 0 0 10px;
  background: rgba(79, 157, 244, 1);
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`;

export const ImgTitle = styled.div`
  display: inline-block;
  margin: 0 0 10px 20px;
  font-size: 14px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: rgba(51, 51, 51, 1);
  line-height: 16px;
`;

export const CampareBtn = styled.button`
  position: absolute;
  margin: -4px 0 0 10px;
  width: 120px;
  height: 24px;
  border-radius: 2px;
  border: 1px solid rgba(79, 157, 244, 1);
  font-size: 12px;
  font-family: ArialMT;
  color: rgba(79, 157, 244, 1);
  text-align: center;
`;

export const DataIAImg = styled.img`
  overflow: hidden;
  max-width: 202px;
  width: 100%;
  max-height: 185px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background-color: #000;
  margin-top: 10px;
`;
