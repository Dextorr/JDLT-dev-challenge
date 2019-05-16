import React from 'react'

import { Dropdown } from 'react-bootstrap'

const DropdownFilter = ({ title, name, options, handleClick }) => {
  return(
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, i) =>
          <Dropdown.Item
            key={i}
            name={name}
            id={option.name}
            onClick={handleClick}
          >{option.name}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownFilter
