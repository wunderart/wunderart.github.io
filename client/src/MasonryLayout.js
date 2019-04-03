import React from 'react'
import PropTypes from 'prop-types'

const MasonryLayout = props => {
  MasonryLayout.propTypes = {
    columns: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
  }
  MasonryLayout.defaultProps = {
    columns: 2,
    gap: 20
  }

  const columnWrapper = {}
  const result = []
  let key = 0

  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = []
  }

  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns
    columnWrapper[`column${columnIndex}`].push(
      <div key={key++} style={{ marginBottom: `${props.gap}px` }}>
        {props.children[i]}
      </div>
    )
  }

  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        className="grid-item"
        key={key++}
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    )
  }

  return (
    <div
      className="grid"
      style={{
        display: 'flex'
      }}
    >
      {result}
    </div>
  )
}

export default MasonryLayout
