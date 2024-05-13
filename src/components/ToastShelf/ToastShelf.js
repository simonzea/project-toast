import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, closeFunction}) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {toasts?.map(({id, variant, message}) =>(
        <Toast key={id} id={id} closeFunction={closeFunction} variant={variant}>{message}</Toast>
      )
        )}
      </li>
    </ol>
  );
}

export default ToastShelf;
