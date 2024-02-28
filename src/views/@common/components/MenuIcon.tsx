import styled from 'styled-components';

interface MenuIconProps {
  $menuopen: boolean;
}

const MenuIcon = ({ $menuopen }: MenuIconProps) => {
  return (
    <MenuIconWrapper $menuopen={$menuopen}>
      <span></span>
      <span></span>
      <span></span>
    </MenuIconWrapper>
  );
};

const MenuIconWrapper = styled.div<{ $menuopen: boolean }>`
  display: block;
  position: relative;

  width: 2.4rem;
  height: 1.8rem;
  padding: 0.8rem 0;

  cursor: pointer;

  & > span {
    display: block;
    position: absolute;

    width: 2.4rem;
    height: 0.2rem;
    border-radius: 30px;

    background: black;

    transition: all 0.35s;
  }

  & span:nth-child(1) {
    top: ${({ $menuopen }) => ($menuopen ? '50%' : '0')};
    transform: ${({ $menuopen }) => ($menuopen ? 'translateY(-50%) rotate(45deg)' : 'none')};
  }

  & span:nth-child(2) {
    transform-origin: 50% 50%;
    transform: translateY(-50%) ${({ $menuopen }) => ($menuopen ? 'scale(0)' : 'none')};
  }

  & span:nth-child(3) {
    bottom: ${({ $menuopen }) => ($menuopen ? '50%' : '0')};
    transform: ${({ $menuopen }) => ($menuopen ? 'translateY(50%) rotate(-45deg)' : 'none')};
  }
`;

export default MenuIcon;
