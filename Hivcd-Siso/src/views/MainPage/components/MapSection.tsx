import styled from 'styled-components';
import Rf1Map from '../assets/rf1_map.png';
import SbfMap from '../assets/sbf_map.png';

const MapSection = () => {
  return (
    <MapSectionBox>
      <MapBox>
        <h1>R1F</h1>
        <MapImg src={Rf1Map} />
      </MapBox>
      <MapBox>
        <h1>SBF</h1>
        <MapImg src={SbfMap} />
      </MapBox>
    </MapSectionBox>
  );
};

const MapSectionBox = styled.section`
  display: flex;
  gap: 3rem;

  width: 100%;
  margin-bottom: 13rem;
`;

const MapBox = styled.div`
  display: block;

  width: 100%;

  & > h1 {
    ${({ theme }) => theme.fonts.title1};

    margin-bottom: 2.4rem;
    padding-bottom: 1.3rem;
    border-bottom: 2px dashed;
  }
`;

const MapImg = styled.img`
  width: 100%;
  margin-bottom: 0.6rem;
`;

export default MapSection;
