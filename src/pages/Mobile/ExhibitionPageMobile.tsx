import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
} from '../../views/ExhibitionPage/assets/index';

const ExhibitionPageMobile = () => {
  const navigate = useNavigate();
  const handleOnClick = (index: number) => {
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
    <ExhibitionPageBox>
      <BtnGrid>
        {buttons.map((button, index) => (
          <GridItem key={index} onClick={() => handleOnClick(index)}>
            {button.icon}
          </GridItem>
        ))}
      </BtnGrid>
    </ExhibitionPageBox>
  );
};

export default ExhibitionPageMobile;

const ExhibitionPageBox = styled.section`
  width: 100vw;
  padding: 0 1.6rem;
`;
const BtnGrid = styled.section`
  display: grid;
  gap: 0.7rem;

  width: 100%;
  grid-template-columns: repeat(2, 1fr);
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
    transform: translateY(-3px);
  }
`;
