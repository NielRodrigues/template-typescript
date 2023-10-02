import React, { createContext, useState}  from 'react'
import PropTypes from "prop-types"
export const MouseContext = createContext()

function MouseHoverProvider({ children }) {

  const [click, setClick] = useState(false)
  return (
    <MouseContext.Provider
         value={{
            click, setClick
         }}
    >
        { children }
    </MouseContext.Provider>
  )
}

MouseHoverProvider.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MouseHoverProvider