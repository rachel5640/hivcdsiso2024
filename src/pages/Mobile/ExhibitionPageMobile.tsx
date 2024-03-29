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
  HivcdGreyLogo,
} from '../../views/ExhibitionPage/assets/index';
import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';

interface ExhibitionPageMobileProps {
  $islast: boolean;
}

const ExhibitionPageMobile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnClick = (index: number) => {
    if (!buttons[index].$islast) {
      navigate(`/Exhibition/Projects`, { state: index });
    }
  };

  const buttons = [
    { icon: <GreenbeeBtn />, $islast: false },
    { icon: <DromapicBtn />, $islast: false },
    { icon: <IrayBtn />, $islast: false },
    { icon: <YadzBtn />, $islast: false },
    { icon: <AdrenalinBtn />, $islast: false },
    { icon: <ProtoBtn />, $islast: false },
    { icon: <HyphenBtn />, $islast: false },
    { icon: <HangulggolBtn />, $islast: false },
    { icon: <HipsBtn />, $islast: false },
    { icon: <HivcdGreyLogo />, $islast: true },
  ];
  return (
    <>
      <MobileHeader />
      <ExhibitionPageBox>
        <BtnGrid>
          {buttons.map((button, index) => (
            <GridItem key={index} onClick={() => handleOnClick(index)} $islast={button.$islast}>
              {button.icon}
            </GridItem>
          ))}
        </BtnGrid>
      </ExhibitionPageBox>
      <MobileFooter />
    </>
  );
};

export default ExhibitionPageMobile;

const ExhibitionPageBox = styled.section`
  width: 100vw;
  margin: 7.3rem 0 5rem;
  padding: 0 1.6rem;
`;
const BtnGrid = styled.section`
  display: grid;
  gap: 0.7rem;

  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`;

const GridItem = styled.div<ExhibitionPageMobileProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  width: 100%;

  cursor: ${({ $islast }) => ($islast ? 'auto' : 'pointer')};
  aspect-ratio: auto 1 / 1;

  & > svg {
    width: 100%;
    height: 100%;

    transition: transform 0.4s;
  }

  &:hover > svg {
    transition: transform 0.4s;
    transform: ${({ $islast }) => ($islast ? 'none' : 'translateY(-3px)')};
  }
`;
