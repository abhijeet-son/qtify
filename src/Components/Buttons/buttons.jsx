import React from 'react'
import styles from "./buttons.module.css"

const Button = ({children}) => {
  return (
    <buttons className={styles.btn}>{children}</buttons>
  )
}

export default Button;