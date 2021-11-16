import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { Transition } from "react-transition-group"

import { useOnClickOutside } from "../../../utils/hooks"

import {
  Wrapper,
  Header,
  Title,
  List,
  ListItem,
  ArrowDownIcon,
  ArrowUpIcon,
} from "./dropdown.styled"
import { UnderlinedLink } from "../navigation.styled"

const duration = 300

const defaultStyle = {
  transition: `opacity, transform ${duration}ms ease-in-out`,
  opacity: 0,
  transform: "scale(0)",
}

const transitionStyles = {
  entering: { opacity: 1, transform: "scale(1)" },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: { opacity: 0, transform: "scale(0)" },
  exited: { opacity: 0, transform: "scale(0)" },
}

interface DropdownProps {
  title: string
  href: string
  list: readonly Pick<
    GatsbyTypes.MarkdownRemarkFrontmatterMenuItemsSubMenuItems,
    "name" | "href"
  >[]
}

const Dropdown = ({ title, href, list }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Header>
        {href ? (
          href.indexOf("http://") !== -1 || href.indexOf("https://") !== -1 ? (
            <a href={href}>{title}</a>
          ) : (
            <Link to={href} activeClassName="active">
              {title}
            </Link>
          )
        ) : (
          <Title>{title}</Title>
        )}
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Header>
      <Transition in={isOpen} timeout={duration}>
        {(state: "entering" | "entered" | "exiting" | "exited") => (
          <List
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
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
        )}
      </Transition>
    </Wrapper>
  )
}

export default Dropdown
