import React from 'react'
import { useNavigate } from "react-router-dom";
import { convertToKebabCase } from '../utils/_general.util.js';

export const Card = ({metadata}) => {
  const navigate = useNavigate()

  const goToWidget = () => {
    if (metadata) {
      navigate(`/${convertToKebabCase(metadata.title)}`)
    }
  }

  if (metadata) {
    return (
      <div className="workbench-card" onClick={goToWidget}>
        <span className="workbench-card-title">{metadata.title}</span>
        <span className="workbench-card-description">{metadata.description}</span>
      </div>
    )
  }

  return 'No metadata provided'
}
