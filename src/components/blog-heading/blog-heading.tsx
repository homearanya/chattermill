import React from "react";
import { Link } from "gatsby";

import { Heading } from "./blog-heading.styled";

interface BlogHeadingProps {
  readonly heading: string;
  readonly to?: string;
  readonly className?: string;
}

export const BlogHeading = ({ heading, to, className }: BlogHeadingProps) =>
  to ? (
    <Heading className={className}>
      <Link to={to}>{heading}</Link>
    </Heading>
  ) : (
    <Heading className={className}>{heading}</Heading>
  );

export default BlogHeading;
