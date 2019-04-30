import React from 'react'

const SimonButton = props => {
  let className = props.className

  className += props.play === props.active ? 'focus' : ''

  return (
    <div play={props.play} onClick={props.onClick} className={className}>
      Button
    </div>
  )
}

export default SimonButton
