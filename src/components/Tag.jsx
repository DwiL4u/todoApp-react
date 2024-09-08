import React from 'react'
import './Tag.css'


const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    JavaScript: { backgroundColor: '#fda821' },
    React: { backgroundColor: '#15d4c8' },
    NextJs: { backgroundColor: '#ffd12c' },
    'React Native': { backgroundColor: '#47ea80' },
    default: { backgroundColor: '#f9f9f9' }
  }
     
  return (
    <button type='button' className="tag" style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag
