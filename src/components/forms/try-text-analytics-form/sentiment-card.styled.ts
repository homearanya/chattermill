import styled from "styled-components";

interface TagProps {
  background: string;
}
export const Tag = styled.span<TagProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  background: ${({ background }) => background};
`;
export const Emoji = styled.img`
  margin-right: 0.8rem;
`;
export const Parent = styled.span`
  min-width: 0;
  max-width: 19rem;
  flex: 1 0 auto;
  margin-right: 0.5rem;
  color: #696a7d;
  font-family: "EuclidCircularB", "Open Sans", Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Name = styled.span`
  min-width: 0;
  flex: 1 1 auto;
  color: #8a849c;
  font-family: "EuclidCircularB", "Open Sans", Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition-duration: 0.12s;
  transition-property: color;
  transition-timing-function: linear;
`;
