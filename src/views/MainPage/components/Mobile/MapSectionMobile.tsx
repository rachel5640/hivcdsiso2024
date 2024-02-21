import styled from 'styled-components';
import Rb1Map from '../../assets/rf1_map.png';
import SbfMap from '../../assets/sbf_map.png';

const MapSectionMobile = () => {
  return (
    <MapSectionMobileBox>
      <h1>R1F</h1>
      <MapImg src={Rb1Map}></MapImg>
      <h1>SBF</h1>
      <MapImg src={SbfMap}></MapImg>
    </MapSectionMobileBox>
  );
};

const MapSectionMobileBox = styled.section`
  width: 100%;
  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-bottom: 2.4rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    border-style: dashed;
  }
`;

const MapImg = styled.img`
  width: 100%;
`;

export default MapSectionMobile;
