import styled from 'styled-components';
import { forwardRef } from 'react';
import { useState } from 'react';
import { IcExitBlack } from '../../@common/assets';
import { DATA_SETS } from '../../ExhibitionPage/constant/ProjectData';
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
  instagram: string[];
  video: string[];
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
          <div>
            <h2>{selectedWork?.author}</h2>
            {selectedWork?.instagram.length !== 0 && (
              <div>
                {selectedWork?.instagram.map((username, index) => (
                  <div>
                    <a href={`https://www.instagram.com/${username}`} target="_blank" key={index}>
                      @{username}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p>{selectedWork?.text}</p>
          {loading && <Loading />}
          {selectedWork?.image.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index + 1}`} onLoad={() => setLoading(false)} />
          ))}
          {selectedWork?.video.map((url, index) => <iframe key={index} src={url} />)}
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
  min-width: 13.6rem;

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

  width: calc(100% - 15rem);
  margin-left: 1.5rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title7};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body8_2};

    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
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
  & > div > h2 {
    ${({ theme }) => theme.fonts.body8_1}
  }

  & > div > div > div > a {
    ${({ theme }) => theme.fonts.body11}

    margin-left: 0.5rem;

    color: black;
  }

  & > div > div > div > span {
    ${({ theme }) => theme.fonts.body11}

    margin-left: 0.5rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  & > img {
    width: 100%;
    margin-top: 0.5rem;
  }

  & > img:last-child {
    margin-bottom: 2rem;
  }

  & > p {
    margin-top: 2rem;
    word-break: none;

    margin-bottom: 0.7rem;

    ${({ theme }) => theme.fonts.body8_1}
  }

  & > iframe {
    width: 100%;
    height: 20rem;
  }
`;

export default WorksSectionMobile;
