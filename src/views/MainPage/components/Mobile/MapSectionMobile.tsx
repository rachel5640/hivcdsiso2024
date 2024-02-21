import styled from 'styled-components';
import Rb1Map from '../../assets/rf1_map.png';
import SbfMap from '../../assets/sbf_map.png';
import { RF1_PLACES } from '../../constant/places';
import { SBF_PLACES } from '../../constant/places';

const MapSectionMobile = () => {
  return (
    <MapSectionMobileBox>
      <h1>R1F</h1>
      <MapImg src={Rb1Map}></MapImg>
      <MapInfo>
        {RF1_PLACES.map((places, idx) => (
          <PlaceText key={idx} id={places.id}>
            <h1>{places.number}</h1>
            <h2>{places.name}</h2>
          </PlaceText>
        ))}
      </MapInfo>
      <h1>SBF</h1>
      <MapImg src={SbfMap}></MapImg>
      <MapInfo>
        {SBF_PLACES.map((places, idx) => (
          <PlaceText key={idx} id={places.id}>
            <h1>{places.number}</h1>
            <h2>{places.name}</h2>
          </PlaceText>
        ))}
      </MapInfo>
    </MapSectionMobileBox>
  );
};

const MapSectionMobileBox = styled.section`
  width: 100%;
  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-top: 2rem;
    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    border-style: dashed;
  }
`;

const MapInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PlaceText = styled.div`
  display: flex;
  align-items: center;

  margin: 0.4rem 0;

  & > h1 {
    ${({ theme }) => theme.fonts.body9};

    margin-right: 0.5rem;

    color: ${({ id }) => {
      switch (id) {
        case '1':
          return '#0768F4';
        case '2':
          return '#A31AA3';
        case '3':
          return '#FF4802';
        case '4':
          return '#35DE25';
        case '5':
          return '#4ABFEA';
        case '6':
          return '#FED302';
        case '7':
          return '#E30629';
        case '8':
          return '#00837A';
        case '9':
          return '#FA538F';
        default:
          return 'black';
      }
    }};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body10};
  }
`;

const MapImg = styled.img`
  width: 100%;
`;

export default MapSectionMobile;
