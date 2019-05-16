import React from 'react'

import { Dropdown } from 'react-bootstrap'

const DropdownFilter = ({ title, options }) => {
  return(
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, i) =>
          <Dropdown.Item key={i}>{option.name}</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownFilter
