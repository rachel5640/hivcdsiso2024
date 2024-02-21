import styled from 'styled-components';

interface MobileFooterProps {
  isfixed?: boolean;
}

const MobileFooter = ({ isfixed }: MobileFooterProps) => {
  return (
    <MobileFooterWrapper isfixed={isfixed}>
      <MobileFooterBox>
        <p>
          2024 HIVCD CLUB FESTIVAL <div>:</div> SISO
        </p>
        <p>《OUR INDEX》</p>
      </MobileFooterBox>
    </MobileFooterWrapper>
  );
};

const MobileFooterWrapper = styled.section<MobileFooterProps>`
  position: ${({ isfixed }) => (isfixed ? 'fixed' : 'static')};
  bottom: 0;

  width: 100vw;
  padding: 0.7rem 1.6rem;
`;
const MobileFooterBox = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.7rem 0;
  border-top: 1.5px solid black;

  background-color: ${({ theme }) => theme.colors.white};

  & > p {
    ${({ theme }) => theme.fonts.label4};

    display: flex;
  }

  & > p > div {
    ${({ theme }) => theme.fonts.label4};

    margin: -0.1rem 0.1rem;
  }
`;

export default MobileFooter;