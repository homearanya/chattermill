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
  list: {
    name: string
    href: string
  }[]
}

const Dropdown = ({ title, list }: DropdownProps) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <Wrapper ref={ref}>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
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
