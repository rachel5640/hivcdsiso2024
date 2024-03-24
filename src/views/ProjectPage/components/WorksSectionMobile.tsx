import styled from 'styled-components';
import { forwardRef } from 'react';
import { useState } from 'react';
import { DATA_SETS } from '../../ExhibitionPage/constant/ProjectData';
import ModalContent from './ModalContent';

interface WorksSectionMobileProps {
  index: number;
}

interface DataProps {
  thumbnail: string;
  title: string;
  author: string;
  text: string;
  image: string[];
  instagram: string[];
  video: string[];
  link: string[];
}

const WorksSectionMobile = forwardRef<HTMLDivElement, WorksSectionMobileProps>(({ index }, ref) => {
  const [selectedWork, setSelectedWork] = useState<DataProps | null>(null);
  const [ismodalopen, setIsModal] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  const handleModal = (work: DataProps) => {
    setIsModal(true);
    setSelectedWork(work);
  };

  const handleModalClose = () => {
    setIsModal(false);
  };

  const handleImgLoading = () => {
    const images = selectedWork?.image || [];
    if (images.length === 0) {
      setImgLoading(false);
    } else {
      let loadedCount = 0;
      images.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setImgLoading(false);
          }
        };
        img.onerror = () => {
          setImgLoading(false);
        };
      });
    }
    setImgLoading(false);
  };

  const dataSet: DataProps[] = DATA_SETS[index] || [];

  return (
    <WorksSectionLayout ref={ref}>
      {dataSet.map((work: DataProps, id: number) => (
        <List key={id} onClick={() => handleModal(work)}>
          <ThumbnailBox>
            <Thumbnail src={work.thumbnail} alt={work.title} />
          </ThumbnailBox>
          <TextArea>
            <h1>{work.title}</h1>
            <h2>{work.author}</h2>
          </TextArea>
        </List>
      ))}
      <ModalContent
        isModalOpen={ismodalopen}
        selectedWork={selectedWork}
        onCloseModal={handleModalClose}
        index={index}
        handleImgLoading={handleImgLoading}
        imgLoading={imgLoading}
      />
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

const ThumbnailBox = styled.div`
  width: 13.6rem;
  height: 10.2rem;

  background-color: grey;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(100% - 15rem);
  margin-left: 1.5rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title7};

    word-break: keep-all;
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body8_2};

    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
`;

export default WorksSectionMobile;
