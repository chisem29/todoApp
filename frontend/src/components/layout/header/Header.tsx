import { FC } from "react";

import styles from "./Header.module.less"

const Header: FC = () => {
  return (
    <>
      <header
        className={styles.header}>
        Todos
      </header>
    </>
  )
};

export default Header;
