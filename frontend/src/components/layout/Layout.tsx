import { FC, PropsWithChildren } from "react"

import styles from "./Layout.module.less"
import useTodosSelector from "../../hooks/useTodosSelector"

const Layout : FC<PropsWithChildren> = ({children}) => {
  
  const state = useTodosSelector()

  console.log(state)

  return <div className={styles.layout}>{children}</div>
}

export default Layout