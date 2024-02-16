import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const ExhibitionPage = () => {
  const navigate = useNavigate();

  const buttons = [
    { icon: <GreenbeeBtn />, onClick: () => navigate('/Exhibition/Greenbee') },
    { icon: <DromapicBtn />, onClick: () => navigate('/Exhibition/Dromapic') },
    { icon: <IrayBtn />, onClick: () => navigate('/Exhibition/Iray') },
    { icon: <YadzBtn />, onClick: () => navigate('/Exhibition/Yadz') },
    { icon: <AdrenalinBtn />, onClick: () => navigate('/Exhibition/Adrenalin') },
    { icon: <ProtoBtn />, onClick: () => navigate('/Exhibition/Proto') },
    { icon: <HyphenBtn />, onClick: () => navigate('/Exhibition/Hyphen') },
    { icon: <HangulggolBtn />, onClick: () => navigate('/Exhibition/Hangulggol') },
    { icon: <HipsBtn />, onClick: () => navigate('/Exhibition/Hips') },
  ];

  return (
    <>
      <DesktopHeader />
      <BtnGrid>
        {buttons.map((button, index) => (
          <GridItem key={index} onClick={button.onClick}>
            {button.icon}
          </GridItem>
        ))}
      </BtnGrid>
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
  aspect-ratio: auto 1 / 1;

  width: 100%;

  cursor: pointer;

  & > svg {
    /* stylelint-disable-next-line declaration-empty-line-before */
    width: 100%;
    height: 100%;

    transition: transform 0.2s;
  }

  &:hover > svg {
    /* stylelint-disable-next-line declaration-empty-line-before */
    transform: translateY(-7px); /* 마우스를 올렸을 때 약간 위로 이동 */
  }
`;

export default ExhibitionPage;
