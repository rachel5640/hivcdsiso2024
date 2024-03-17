import styled from 'styled-components';
import { BUTTON_TEXT } from '../constant/text';
import TeamInfo from '../../ProjectPage/components/TeamInfo';
import { useEffect, useRef, useState } from 'react';

type ThemeColorKeys =
  | 'orange'
  | 'red'
  | 'pink'
  | 'skyblue'
  | 'blue'
  | 'lightgreen'
  | 'yellow'
  | 'teal'
  | 'purple'
  | 'white'
  | 'grey';

interface TeamButtonProps {
  index: number;
  $isactive: boolean;
  color: ThemeColorKeys;
  onClick: () => void;
}

interface NavigationBarProps {
  page: number;
  onChangePage: (page: number) => void;
  getNavBarHeight: (height: number) => void;
}

const NavigationBar = ({ page, onChangePage, getNavBarHeight }: NavigationBarProps) => {
  const [navbarHeight, setNavBarHeight] = useState(0);
  const handleClick = (index: number) => {
    onChangePage(index);
  };

  const navigationBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (navigationBarRef.current) {
        const height = navigationBarRef.current.clientHeight;
        if (height !== navbarHeight) {
          setNavBarHeight(height);
          getNavBarHeight(height);
        }
      }
    };

    handleResize(); // 초기 높이 설정

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigationBarRef, navbarHeight, getNavBarHeight]);

  return (
    <FixedBar ref={navigationBarRef}>
      <NavigationBarBox>
        {BUTTON_TEXT.map((button, index) => (
          <TeamButton
            key={index}
            type="button"
            $isactive={page === index}
            index={index}
            color={button.color as ThemeColorKeys}
            onClick={() => {
              handleClick(index);
            }}>
            {button.name}
          </TeamButton>
        ))}
      </NavigationBarBox>
      <TeamInfo page={page} />
    </FixedBar>
  );
};

const FixedBar = styled.section`
  top: 7.6rem;

  width: 100vw;
  padding: 1rem 8.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const NavigationBarBox = styled.section`
  position: relative;

  width: 100%;
`;

const TeamButton = styled.button<TeamButtonProps>`
  margin: 0 0.5rem 0.7rem 0;
  padding: 0.4rem 1.8rem 0.25rem;
  ${({ theme }) => theme.fonts.title6};

  border: 3px solid black;
  border-radius: 36px;

  background-color: ${({ $isactive, color, theme }) => ($isactive ? theme.colors[color] : 'transparent')};

  color: black;

  &:hover {
    background-color: ${({ color, theme }) => theme.colors[color]};
  }
`;

export default NavigationBar;
