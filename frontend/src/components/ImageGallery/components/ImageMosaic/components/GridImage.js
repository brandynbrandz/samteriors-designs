import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

/**
 * A single image element in a masonry style image grid
 */
const GridImage = ({ key, index, left, top, photo, onClick }) => {
  const { height, width, src, alt, caption } = photo;
  return (
    <ImageContainer
      key={`${key}-${index}`}
      index={index}
      onClick={(e) => onClick(e, { index })}
      style={{ left, top, height, width }}
    >
      <OverlayContainer className="MainGimg">
        <LazyLoad className="lazyloadgrid" once>
          <Image src={src} alt={alt} caption={caption} />
          <Caption className="overlayCap">
            <span>{caption}</span>
          </Caption>
        </LazyLoad>
      </OverlayContainer>
    </ImageContainer>
  );
};

GridImage.propTypes = {
  key: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default GridImage;

const Caption = styled.div`
  position: absolute;
`;

const OverlayContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  transition: border-color 0.2s linear;
  display: block;
  position: absolute;
  cursor: pointer;
  border-width: 2px;
  border-color: transparent;
  border-style: solid;
  :hover {
    border-color: ${({ theme }) => theme.pageContentLinkHoverColor};
  }
`;

const Image = styled.img`
  width: 100%;
  height: inherit;
  /* position: absolute; */
`;
