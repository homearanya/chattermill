import React, { useState, useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { animateScroll } from "react-scroll"

import { useOnClickOutside, useLockBodyScroll } from "../../utils/hooks"
import { TextBlockData } from "../../types"
import Modal from "../modal"

import {
  StyledSection,
  StyledContainer,
  StyledTextBlock,
  VideoTable,
  VideoCard,
  VideoCardHeader,
  VideoCardThumbnail,
  VideoCardBody,
  VideoCardHeading,
  VideoCardDescription,
  VideoCardButton,
  IFrameWrapper,
  StyledIframe,
  RelatedVideosContainer,
  RelatedHeading,
} from "./loom-videos-table.styled"

type LoomVideo = Pick<
  GatsbyTypes.ContentfulLoomVideo,
  "title" | "id" | "thumbnailUrl" | "tags" | "loomVideoId"
> & {
  readonly description: {
    readonly childMarkdownRemark: Pick<GatsbyTypes.MarkdownRemark, "html">
  }
}

interface VideosTableProps {
  className?: string
  activeId: number
  videos: LoomVideo[]
  setActiveId: (index: number) => void
  scrollToTopModal?: () => void
}

const VideosTable = ({
  className,
  activeId,
  videos,
  setActiveId,
  scrollToTopModal,
}: VideosTableProps) => {
  const handleClick = (index) => {
    setActiveId(index)
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "Product Video Play",
      video: videos[index],
    })
  }
  useEffect(() => {
    scrollToTopModal && scrollToTopModal()
  }, [activeId])
  return (
    <VideoTable className={className}>
      {videos.map(({ id, title, thumbnailUrl, description }, index) => (
        <VideoCard key={id}>
          <VideoCardHeader>
            <VideoCardThumbnail src={thumbnailUrl} alt={title} />
          </VideoCardHeader>
          <VideoCardBody>
            <VideoCardHeading>{title}</VideoCardHeading>
            <VideoCardDescription
              dangerouslySetInnerHTML={{
                __html: description.childMarkdownRemark.html,
              }}
            />
            <VideoCardButton
              onClick={() => handleClick(index)}
            >{`Watch video  ->`}</VideoCardButton>
          </VideoCardBody>
        </VideoCard>
      ))}
    </VideoTable>
  )
}

interface LoomVideosTableProps {
  data: TextBlockData
}

const LoomVideosTable = ({ data }: LoomVideosTableProps) => {
  const ref = useRef(null)
  const [activeId, setActiveId] = useState(null)
  // Call hook to lock body scroll
  useLockBodyScroll(activeId !== null && activeId >= 0)
  useOnClickOutside(ref, () => !!activeId && setActiveId(null))
  const {
    contentfulLoomTable: { loomVideos },
  } = useStaticQuery<GatsbyTypes.LoomVideoTableQueryQuery>(graphql`
    query LoomVideoTableQuery {
      contentfulLoomTable {
        title
        loomVideos {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          loomVideoId
          thumbnailUrl
          tags
        }
      }
    }
  `)
  const [loomVideosRelated, setLoomVideosRelated] = useState(
    Array.from(loomVideos, (e) => [])
  )
  useEffect(() => {
    const allLoomVideosRelated = []
    loomVideos.forEach(({ tags, id }, index, array) => {
      const relatedVideos = []
      tags.forEach((tag) => {
        array.forEach(({ tags: otherTags, id: otherId }, otherIndex) => {
          if (
            id !== otherId &&
            otherTags.indexOf(tag) >= 0 &&
            relatedVideos.indexOf(otherIndex) === -1
          ) {
            relatedVideos.push(otherIndex)
          }
        })
      })
      allLoomVideosRelated.push(relatedVideos.sort())
    })
    setLoomVideosRelated(allLoomVideosRelated)
  }, [])

  const scrollToTopModal = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: "easeInOut",
      containerId: "modal-container",
    })
  }

  const closeModalHandler = () => activeId >= 0 && setActiveId(null)

  return (
    <>
      <StyledSection>
        <StyledContainer>
          <StyledTextBlock
            className="text-block-header"
            textBlock={data}
            classNames={Object.keys(data)}
          />
          <VideosTable
            activeId={activeId}
            videos={loomVideos.slice()}
            setActiveId={(i) => setActiveId(i)}
          />
        </StyledContainer>
      </StyledSection>
      <Modal
        open={activeId !== null && activeId >= 0}
        closeHandler={closeModalHandler}
      >
        {activeId !== null && activeId >= 0 ? (
          <>
            <IFrameWrapper>
              <StyledIframe
                id="iframe"
                width="1000"
                height="563"
                src={`https://www.loom.com/embed/${loomVideos[activeId].loomVideoId}?hide_owner=true&hide_speed=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
                frameBorder="0"
                allowFullScreen
              />
            </IFrameWrapper>
            <RelatedVideosContainer>
              <RelatedHeading>Related Demos</RelatedHeading>
              <VideosTable
                className="in-modal"
                activeId={activeId}
                videos={loomVideos
                  .slice()
                  .filter(
                    (e, index) =>
                      loomVideosRelated[activeId].indexOf(index) >= 0
                  )}
                setActiveId={(i) => setActiveId(i)}
                scrollToTopModal={scrollToTopModal}
              />
            </RelatedVideosContainer>
          </>
        ) : null}
      </Modal>
    </>
  )
}

export default LoomVideosTable
