import Scrollbars from 'react-custom-scrollbars-2';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface ScrollBarProps {
  children: ReactNode;
}

const ScrollBarBox = ({ children }: ScrollBarProps) => {
  return (
    <Scrollbars
      renderTrackHorizontal={(props) => <div {...props} className="track-horizontal" />}
      renderTrackVertical={(props) => <StyledTrackVertical {...props} />}
      renderThumbHorizontal={(props) => <div {...props} className="thumb-horizontal" />}
      renderThumbVertical={(props) => <StyledThumbVertical {...props} />}
      renderView={(props) => <div {...props} className="view" />}>
      {children}
    </Scrollbars>
  );
};

const StyledTrackVertical = styled.div`
  top: 2px;
  right: 2px;
  bottom: 2px;

  border-radius: 3px;

  background: rgb(255 255 255 / 11.1%);
`;

const StyledThumbVertical = styled.div`
  display: block;
  position: relative;

  width: 100%;
  border-radius: inherit;

  background-color: ${({ theme }) => theme.colors.darkgrey};

  cursor: pointer;
  opacity: 0.3;
`;

export default ScrollBarBox;
