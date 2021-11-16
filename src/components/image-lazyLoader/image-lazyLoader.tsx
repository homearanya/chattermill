import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

interface ImageLoaderProps {
  src: string;
  alt?: string;
  onClick?: () => any;
  style: any;
  className?: string;
  loadedClassName?: string;
  loadingClassName?: string;
}

const _loaded = {};

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  onClick,
  className,
  loadedClassName,
  loadingClassName,
  alt = '',
  style,
  ...props
}) => {
  
  //initial state: image loaded stage 
  const [loaded, setLoaded] = useState(_loaded[src])

  //image onLoad handler to update state to loaded
  const onLoad = () => {
    _loaded[src] = true;
    setLoaded(true);
  };

  const lastClassName = `${className} ${loaded
    ? loadedClassName
    : loadingClassName}`;

  return (
    <Image
      src={src}
      alt={alt}
      onClick={onClick} 
      className={lastClassName} 
      onLoad={onLoad}
      style={style}
      {...props}
    />
  )
}

const fadeInImg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Image = styled.img`
  &.img-loading {
    opacity: 0;
    width: 100%;
    height: auto;
  }
  &.img-loaded {
    animation: ${fadeInImg} cubic-bezier(0.23, 1, 0.32, 1) 1;
    position: relative;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-duration: 0.7s;
    animation-delay: 0.1s;
  }
`

//define our loading and loaded image classes
ImageLoader.defaultProps = {
  className: "",
  loadingClassName: "img-loading",
  loadedClassName: "img-loaded"
};

export default ImageLoader;