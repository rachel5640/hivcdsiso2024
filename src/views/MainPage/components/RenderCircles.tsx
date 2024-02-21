import styled from 'styled-components';

interface RenderCirclesProps {
  ismobile?: boolean;
}

export const RenderCircles = ({ ismobile }: RenderCirclesProps) => {
  const circles = [
    { id: '1', name: '그린비' },
    { id: '2', name: '드로마픽' },
    { id: '3', name: '아이레이' },
    { id: '4', name: '야즈' },
    { id: '5', name: '애드레날린' },
    { id: '6', name: '프로토' },
    { id: '7', name: '하이픈' },
    { id: '8', name: '한글꼴연구회' },
    { id: '9', name: '힙스' },
  ];

  const firstColumn = circles.slice(0, Math.ceil(circles.length / 2));
  const secondColumn = circles.slice(Math.ceil(circles.length / 2));
  return (
    <>
      <ul>
        {firstColumn.map((circle) => (
          <li key={circle.id}>
            <Circle id={circle.id} ismobile={ismobile}></Circle>
            <p>{circle.name}</p>
          </li>
        ))}
      </ul>
      <ul>
        {secondColumn.map((circle) => (
          <li key={circle.id}>
            <Circle id={circle.id} ismobile={ismobile}></Circle>
            <p>{circle.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const Circle = styled.div<RenderCirclesProps>`
  width: ${({ ismobile }) => (ismobile ? '0.8rem' : '1.8rem')};
  height: ${({ ismobile }) => (ismobile ? '0.8rem' : '1.8rem')};
  margin-right: ${({ ismobile }) => (ismobile ? '1.25rem' : '2.1rem')};
  border-radius: 20px;

  background-color: ${({ id }) => {
    switch (id) {
      case '1':
        return '#FA538F';
      case '2':
        return '#E30629';
      case '3':
        return '#FED302';
      case '4':
        return '#A31AA3';
      case '5':
        return '#FF4802';
      case '6':
        return '#00837A';
      case '7':
        return '#35DE25';
      case '8':
        return '#4ABFEA';
      case '9':
        return '#0768F4';
    }
  }};
  aspect-ratio: 1 / 1;
`;
