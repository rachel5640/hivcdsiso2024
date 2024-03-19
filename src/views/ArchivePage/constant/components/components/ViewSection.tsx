import ViewOne from '../assets/view_1.jpg';
import ViewTwo from '../assets/view_2.jpg';
import ViewThree from '../assets/view_3.jpg';
import ViewFour from '../assets/view_4.jpg';
import ViewFive from '../assets/view_5.jpg';
import ViewSix from '../assets/view_6.jpg';
import ViewSeven from '../assets/view_7.jpg';
import ViewEight from '../assets/view_8.jpg';
import ViewTen from '../assets/view_9.jpg';
import ViewEleven from '../assets/view_10.jpg';
import ViewTwelve from '../assets/view_11.jpg';

import styled from 'styled-components';
import { forwardRef } from 'react';
import { useRef } from 'react';

const ViewSection = forwardRef<HTMLDivElement>((_props, ref) => {
  const innerRef = ref || useRef(null);
  return (
    <div ref={innerRef}>
      <ViewImg src={ViewOne} alt="전체 전시 전경" />
      <TallImgBox>
        <ViewImg src={ViewTwo} alt="전체 전시 전경" />
        <ViewImg src={ViewThree} alt="전체 전시 전경" />
      </TallImgBox>
      <ViewImg src={ViewFour} alt="전체 전시 전경" />
      <ViewImg src={ViewFive} alt="전체 전시 전경" />
      <ViewImg src={ViewSix} alt="전체 전시 전경" />
      <TallImgBox>
        <ViewImg src={ViewSeven} alt="전체 전시 전경" />
        <ViewImg src={ViewEight} alt="전체 전시 전경" />
      </TallImgBox>
      <ViewImg src={ViewTen} alt="전체 전시 전경" />
      <ViewImg src={ViewEleven} alt="전체 전시 전경" />
      <ViewImg src={ViewTwelve} alt="전체 전시 전경" />
    </div>
  );
});
const ViewImg = styled.img`
  display: flex;
`;

const TallImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;

  & > img {
    width: 50%;
  }
`;
export default ViewSection;
