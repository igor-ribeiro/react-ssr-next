import React from 'react'

export default (props) => (
  <span>R$ {Number(props.value).toFixed(2).replace('.', ',')}</span>
)
