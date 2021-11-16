import React, { useState, useRef } from "react"
import { Link } from "gatsby"

import { useOnClickOutside } from "../../../../utils/hooks"

import {
  Header,
  Title,
  List,
  ListItem,
  ArrowDownIcon,
  ArrowUpIcon,
} from "./mobile-dropdown.styled"

interface MobileDropdownProps {
  title: string
  href: string
  list: readonly Pick<
    GatsbyTypes.MarkdownRemarkFrontmatterMenuItemsSubMenuItems,
    "name" | "href"
  >[]
}

const MobileDropdown = ({ title, href, list }: MobileDropdownProps) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  useOnClickOutside(ref, () => setIsOpen(false))
  return (
    <div ref={ref}>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Header>
      <List isOpen={isOpen}>
        {href && (
          <ListItem>
            {href.indexOf("http://") !== -1 ||
            href.indexOf("https://") !== -1 ? (
              <a href={href}>{title}</a>
            ) : (
              <Link to={href}>{title}</Link>
            )}
          </ListItem>
        )}
        {list.map((item, index) => (
          <ListItem key={index}>
            {item.href.indexOf("http://") !== -1 ||
            item.href.indexOf("https://") !== -1 ? (
              <a href={item.href}>{item.name}</a>
            ) : (
              <Link to={item.href}>{item.name}</Link>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MobileDropdown
