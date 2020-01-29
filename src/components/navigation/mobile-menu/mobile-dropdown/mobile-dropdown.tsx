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
  list: {
    name: string
    href: string
  }[]
}

const MobileDropdown = ({ title, list }: MobileDropdownProps) => {
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
