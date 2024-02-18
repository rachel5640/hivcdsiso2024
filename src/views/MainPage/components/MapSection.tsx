import styled from 'styled-components';
import Rf1Map from '../assets/rf1_map.png';
import SbfMap from '../assets/sbf_map.png';
import { RF1_PLACES } from '../constant/places';
import { SBF_PLACES } from '../constant/places';

const MapSection = () => {
  return (
    <MapSectionBox>
      <MapBox>
        <h1>R1F</h1>
        <MapImg src={Rf1Map} />
        <MapInfo>
          {RF1_PLACES.map((places, idx) => (
            <PlaceText key={idx} id={places.id}>
              <h1>{places.number}</h1>
              <h2>{places.name}</h2>
            </PlaceText>
          ))}
        </MapInfo>
      </MapBox>
      <MapBox>
        <h1>SBF</h1>
        <MapImg src={SbfMap} />
        <MapInfo>
          {SBF_PLACES.map((places, idx) => (
            <PlaceText key={idx} id={places.id}>
              <h1>{places.number}</h1>
              <h2>{places.name}</h2>
            </PlaceText>
          ))}
        </MapInfo>
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

const MapInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PlaceText = styled.div`
  display: flex;
  align-items: center;

  margin: 0.4rem 0;

  & > h1 {
    ${({ theme }) => theme.fonts.body2};

    margin-right: 0.6rem;

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
          return '#00837A';
        case '7':
          return '#FA538F';
        case '8':
          return '#FED302';
        case '9':
          return '#E30629';
        default:
          return 'black';
      }
    }};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body3};
  }
`;

export default MapSection;
