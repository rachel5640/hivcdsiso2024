import styled from 'styled-components';
import { forwardRef } from 'react';
import { useState } from 'react';
import { IcExitBlack } from '../../@common/assets';
import { DATA_SETS } from '../../MainPage/constant/ProjectData';
import Loading from '../../@common/components/Loading';

interface ModalOverlayProps {
  $ismodalopen: boolean;
}
interface DataProps {
  thumbnail: string;
  title: string;
  author: string;
  text: string;
  image: string[];
}

interface WorksSectionMobileProps {
  index: number;
}

const WorksSectionMobile = forwardRef<HTMLDivElement, WorksSectionMobileProps>(({ index }, ref) => {
  const [selectedWork, setSelectedWork] = useState<DataProps | null>(null);
  const [ismodalopen, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleModal = (work: DataProps) => {
    setIsModal(true);
    setSelectedWork(work);
  };

  const handleModalClose = () => {
    setIsModal(false);
  };

  const dataSet: DataProps[] = DATA_SETS[index] || [];

  return (
    <WorksSectionLayout ref={ref}>
      {dataSet.map((work: DataProps, id: number) => (
        <List key={id} onClick={() => handleModal(work)}>
          <Thumbnail src={work.thumbnail} alt={work.title} />
          <TextArea>
            <h1>{work.title}</h1>
            <h2>{work.author}</h2>
          </TextArea>
        </List>
      ))}
      <ModalOverlay $ismodalopen={ismodalopen}>
        <TitleArea>
          <h1>{selectedWork?.title}</h1>
          <button onClick={handleModalClose} type="button">
            <IcExitBlack />
          </button>
        </TitleArea>
        <ModalContent>
          <h2>{selectedWork?.author}</h2>
          <p>{selectedWork?.text}</p>
          {loading && <Loading />}
          {selectedWork?.image.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index + 1}`} onLoad={() => setLoading(false)} />
          ))}
        </ModalContent>
      </ModalOverlay>
    </WorksSectionLayout>
  );
});

const WorksSectionLayout = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  padding-top: 8.8rem;
`;

const List = styled.div`
  display: flex;

  width: 100%;
  height: 11.2rem;
  padding: 0.5rem 0;
  border-top: 2px solid;

  cursor: pointer;

  &:last-child {
    border-bottom: 2px solid;
  }
`;

const Thumbnail = styled.img`
  width: 13.6rem;

  background-color: grey;
  object-fit: cover;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title6};
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 1.5rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title7};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body8_2};
  }
`;

const ModalOverlay = styled.div<ModalOverlayProps>`
  overflow-y: scroll;
  position: fixed;
  top: ${({ $ismodalopen }) => ($ismodalopen ? '4.8rem' : '200dvh')};
  left: 0;
  z-index: 400;

  width: 100%;
  height: calc(100vh - 4.8rem);
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  transition: top 0.5s ease;
`;

const ModalContent = styled.div`
  margin-top: 1.8rem;

  & > h2 {
    ${({ theme }) => theme.fonts.body8_1}

    margin-bottom: 1.5rem;
  }

  & > img {
    width: 100%;
    margin-top: 0.5rem;
  }

  & > p {
    margin-top: 1.5rem;
    word-break: none;

    margin-bottom: 4rem;

    ${({ theme }) => theme.fonts.body8_1}
  }
`;

export default WorksSectionMobile;
