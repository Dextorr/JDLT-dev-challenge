import React from 'react'

import { Dropdown } from 'react-bootstrap'

const DropdownFilter = ({ title, name, options, handleClick, filter }) => {
  return(
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className={filter[name] ? 'selected':''}
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, i) =>
          <Dropdown.Item
            key={i}
            className={
              filter ? (filter[name] === option.name ? 'selected':''):null
            }
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
