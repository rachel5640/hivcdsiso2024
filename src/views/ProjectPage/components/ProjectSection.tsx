import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import Loading from '../../@common/components/Loading';
import { TEAM_EXHIBITION_INFO } from '../constants/text';
import { DATA_SETS } from '../../ExhibitionPage/constant/ProjectData';
import Pagination from 'react-js-pagination';

interface ProjectSectionProps {
  index: number;
  navbarheight: number;
}

interface ProjectSectionWrapperProps {
  navbarheight: number;
}

const ProjectSection = ({ index, navbarheight }: ProjectSectionProps) => {
  const exhibitionInfo = TEAM_EXHIBITION_INFO[index];
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);
  const [projectloading, setProjectLoading] = useState(true);
  const [expandedItemIndex, setExpandedItemIndex] = useState(-1);
  const currentDataSet = DATA_SETS[index] || [];
  const textAreaRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, currentDataSet.length);
  const displayedItems = currentDataSet.slice(startIndex, endIndex);

  //클릭시 해당 내용으로 텍스트 변경 및 scroll top
  const handleListItemClick = (index: number) => {
    const dataIndex = startIndex + index;
    setExpandedItemIndex(dataIndex === expandedItemIndex ? -1 : dataIndex);
    window.scrollTo(0, 0);
  };

  //10개씩 자르기
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (projectListRef.current) {
      projectListRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  };

  //오른쪽 TextArea ScrollTop
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.scrollTop = 0;
    }
  }, [index, expandedItemIndex]);

  //왼쪽 List ScrollTop, 기본 전시 정보로 세팅
  useEffect(() => {
    setExpandedItemIndex((prevIndex) => {
      if (prevIndex !== index) {
        if (projectListRef.current) {
          projectListRef.current.scrollTop = 0;
        }
        return -1;
      }
      return prevIndex;
    });
    setCurrentPage(1);
  }, [index]);

  return (
    <ProjectSectionWrapper navbarheight={navbarheight}>
      <ProjectList $isexpanded={expandedItemIndex >= 0} ref={projectListRef}>
        {displayedItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleListItemClick(index)}
            $isdimmed={expandedItemIndex >= 0 && index === expandedItemIndex}>
            <ListImg src={item.thumbnail} alt={item.title} />
            <ProjectText>
              <h1>{item.title}</h1>
              <h2>{item.author}</h2>
            </ProjectText>
          </ListItem>
        ))}
        <PageinationBox>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={currentDataSet.length}
            pageRangeDisplayed={5} // 선택 가능한 페이지 수
            prevPageText={''}
            nextPageText={''}
            firstPageText={''}
            lastPageText={''}
            onChange={handlePageChange}
          />
        </PageinationBox>
      </ProjectList>

      <LineBox>
        <Line />
      </LineBox>
      <TextArea $isexpanded={expandedItemIndex >= 0} ref={textAreaRef}>
        {expandedItemIndex >= 0 && currentDataSet.length > 0 && currentDataSet[expandedItemIndex] ? (
          <>
            <TitleBox>
              <h1>{currentDataSet[expandedItemIndex].title}</h1>
              <h2>{currentDataSet[expandedItemIndex].author}</h2>
            </TitleBox>
            <TextBox>
              {currentDataSet[expandedItemIndex].instagram.length !== 0 && (
                <h3>{currentDataSet[expandedItemIndex].instagram}</h3>
              )}

              <p>{currentDataSet[expandedItemIndex].text}</p>
            </TextBox>

            {projectloading && <Loading />}
            <ImageBox>
              {currentDataSet[expandedItemIndex].image.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index + 1}`} onLoad={() => setProjectLoading(false)} />
              ))}
            </ImageBox>
            <VideoBox>
              {currentDataSet[expandedItemIndex].video.map((url, index) => (
                <iframe key={index} src={url} />
              ))}
            </VideoBox>
          </>
        ) : (
          <>
            <h1>{exhibitionInfo.Title}</h1>
            <p>{exhibitionInfo.text}</p>
            <ParticipantBox>
              <h1>아트디렉터</h1>
              <h2>{exhibitionInfo.artdirector}</h2>
              <h1>참여자</h1>
              <h2>{exhibitionInfo.participant}</h2>
            </ParticipantBox>
            {loading && <Loading />}

            <img src={exhibitionInfo.image} alt={exhibitionInfo.Title} onLoad={() => setLoading(false)} />
          </>
        )}
      </TextArea>
    </ProjectSectionWrapper>
  );
};

const ProjectSectionWrapper = styled.section<ProjectSectionWrapperProps>`
  display: flex;

  width: 100%;
  height: calc(100vh - ${({ navbarheight }) => navbarheight}px - 7.6rem);
  margin-top: 2rem;
  padding: 0 8.2rem;
`;

const ProjectList = styled.section<{ $isexpanded: boolean }>`
  overflow: scroll;
  scroll-behavior: smooth;

  width: ${({ $isexpanded }) => ($isexpanded ? '39%' : '58%')};
  height: 100%;
  padding-bottom: 2rem;
  border-top: 3px solid;

  transition: width 0.3s ease-in-out;
`;

const ListItem = styled.div<{ $isdimmed: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 15rem;
  padding: 1.5rem 0;
  border-bottom: 2.5px solid black;

  background-color: ${({ $isdimmed, theme }) => ($isdimmed ? theme.colors.grey : theme.colors.white)};

  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const ListImg = styled.img`
  width: 16rem;
  height: 12rem;
  margin-right: 2rem;

  object-fit: cover;
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: auto;
  height: 100%;

  & > h1 {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;

    overflow: hidden;
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body5_2};

    word-break: keep-all;
  }
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;

  width: 3%;
  height: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 1.4rem 0 0;

  & > h1 {
    ${({ theme }) => theme.fonts.title3};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body3};
  }
`;

const ImageBox = styled.div`
  display: grid;

  width: 100%;
  margin-top: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  & > img {
    width: 100%;
  }
`;

const VideoBox = styled.div`
  width: 100%;

  & > iframe {
    width: 100%;
    height: 55rem;
    margin-top: 2rem;
  }
`;

const PageinationBox = styled.div`
  .pagination {
    display: flex;

    margin-top: 15px;
  }

  ul {
    padding: 0;

    color: black;
    list-style: none;
  }

  ul.pagination li {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    margin-right: 2rem;
  }

  ul.pagination li:first-child {
    display: none;
  }

  ul.pagination li:nth-child(2) {
    display: none;
  }

  ul.pagination li:last-child {
    display: none;

    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    ${({ theme }) => theme.fonts.label1};

    color: ${({ theme }) => theme.colors.grey};
    text-decoration: none;
  }

  ul.pagination li.active a {
    color: black;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: black;
  }
`;

const Line = styled.div`
  width: 3px;
  height: 95%;

  background-color: black;
`;
const TextArea = styled.section<{ $isexpanded: boolean }>`
  overflow: scroll;
  top: 0;

  width: ${({ $isexpanded }) => ($isexpanded ? '58%' : '39%')};
  height: 100%;
  margin-bottom: 2rem;
  padding-top: 0;
  padding-bottom: 2rem;
  border-top: 3px solid;

  transition: width 0.3s ease-in-out;

  & > img {
    width: 100%;
    margin: 1rem 0 0;
  }

  & > h1 {
    ${({ theme }) => theme.fonts.title3};

    margin-top: 1.4rem;
    word-break: keep-all;
  }

  & > p {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;

    margin-top: 1.5rem;
  }
`;

const TextBox = styled.section`
  display: flex;
  flex-direction: column;

  & > p {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;

    margin-top: 1rem;

    white-space: pre-wrap;
  }

  & > h3 {
    ${({ theme }) => theme.fonts.body7};

    margin: -1.2rem 0 1.8rem;

    color: ${({ theme }) => theme.colors.darkgrey};
    text-align: right;
  }
`;

const ParticipantBox = styled.div`
  display: grid;
  gap: 10px;

  margin-top: 2.1rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 3fr;

  & > h1 {
    ${({ theme }) => theme.fonts.body4};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;
  }
`;

export default ProjectSection;
