import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DesktopHeader from '../views/@common/components/DesktopHeader';

import {
  DromapicBtn,
  GreenbeeBtn,
  IrayBtn,
  YadzBtn,
  AdrenalinBtn,
  ProtoBtn,
  HyphenBtn,
  HangulggolBtn,
  HipsBtn,
} from '../views/ExhibitionPage/assets';
import Footer from '../views/@common/components/Footer';

const ExhibitionPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (index: number) => {
    console.log(index);
    navigate(`/Exhibition/Projects`, { state: index });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buttons = [
    { icon: <GreenbeeBtn /> },
    { icon: <DromapicBtn /> },
    { icon: <IrayBtn /> },
    { icon: <YadzBtn /> },
    { icon: <AdrenalinBtn /> },
    { icon: <ProtoBtn /> },
    { icon: <HyphenBtn /> },
    { icon: <HangulggolBtn /> },
    { icon: <HipsBtn /> },
  ];

  return (
    <>
      <DesktopHeader />
      <BtnGrid>
        {buttons.map((button, index) => (
          <GridItem key={index} onClick={() => handleOnClick(index)}>
            {button.icon}
          </GridItem>
        ))}
      </BtnGrid>
      <Footer />
    </>
  );
};

const BtnGrid = styled.section`
  display: grid;
  gap: 1.5rem;

  width: calc(100vw - 16.4rem);
  margin: 9.9rem 8.2rem;
  grid-template-columns: repeat(3, 1fr);
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  width: 100%;

  cursor: pointer;
  aspect-ratio: auto 1 / 1;

  & > svg {
    width: 100%;
    height: 100%;

    transition: transform 0.4s;
  }

  &:hover > svg {
    transform: translateY(-7px); /* 마우스를 올렸을 때 약간 위로 이동 */
  }
`;

export default ExhibitionPage;
