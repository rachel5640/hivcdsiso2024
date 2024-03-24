import styled from 'styled-components';
import Loading from '../../@common/components/Loading';
import { IcExitBlack, IcLinkBold } from '../../@common/assets';
import { useEffect, useState, useRef } from 'react';

interface ModalContentProps {
  isModalOpen: boolean;
  selectedWork: DataProps | null;
  onCloseModal: () => void;
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

interface ModalOverlayProps {
  $ismodalopen: boolean;
}

const ModalContent = ({ isModalOpen, selectedWork, index, onCloseModal }: ModalContentProps) => {
  const handleModalClose = () => {
    onCloseModal();
  };
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [imgLoading, setImgLoading] = useState(true);

  const handleImgLoading = () => {
    const images = selectedWork?.image || [];
    if (images.length === 0) {
      setImgLoading(true);
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
          setImgLoading(true);
        };
      });
    }
    setImgLoading(true);
  };

  useEffect(() => {
    // ModalContent가 열릴 때 내부 스크롤을 맨 위로 이동
    if (isModalOpen && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [isModalOpen]);

  useEffect(() => {
    handleImgLoading;
  }, [selectedWork]);

  return (
    <ModalOverlay $ismodalopen={isModalOpen} ref={modalContentRef}>
      <TitleArea>
        <div>
          {selectedWork?.title}
          {selectedWork?.link.length !== 0 && (
            <a href={selectedWork?.link[0]} target="_blank">
              <IcLinkBold />
            </a>
          )}
        </div>
        <button onClick={handleModalClose} type="button">
          <IcExitBlack />
        </button>
      </TitleArea>

      <ModalTextContent>
        <div>
          {index !== 1 && <h2>{selectedWork?.author}</h2>}

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
        <LoadingBox>{imgLoading && <Loading />}</LoadingBox>
        {selectedWork?.image.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} onLoad={handleImgLoading} />
        ))}
        {selectedWork?.video.map((url, index) => <iframe key={index} src={url} />)}
      </ModalTextContent>
    </ModalOverlay>
  );
};

const LoadingBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;

  width: 100vw;
  height: 4rem;

  background-color: white;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1.6rem;

    ${({ theme }) => theme.fonts.title6};
  }

  & > button {
    margin-right: 1.6rem;
  }

  & > div > a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 2.3rem;
    height: 2.3rem;
    margin-left: 0.3rem;

    color: black;

    cursor: pointer;
  }

  & > div > a > svg {
    margin-bottom: 0.3rem;
  }
`;

const ModalOverlay = styled.div<ModalOverlayProps>`
  overflow-y: scroll;
  position: fixed;
  top: ${({ $ismodalopen }) => ($ismodalopen ? '4.8rem' : '200dvh')};
  left: 0;
  z-index: 400;

  width: 100%;
  height: calc(100dvh - 4.8rem);
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  transition: top 0.5s ease;
`;

const ModalTextContent = styled.div`
  & > div > h2 {
    ${({ theme }) => theme.fonts.body8_1};

    word-break: keep-all;
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
    margin-top: 4rem;
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
    word-break: keep-all;

    margin-bottom: 0.7rem;

    white-space: pre-line;

    ${({ theme }) => theme.fonts.body8_1}
  }

  & > iframe {
    width: 100%;
    height: 20rem;
    margin: 1rem 0 5rem;
  }
`;

export default ModalContent;
