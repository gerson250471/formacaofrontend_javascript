import React from 'react'

export const ConditionalRender = () => {
    const x = false;
  return (
    <div>
        {/* 7 - Render conditional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}
    </div>
  )
}
