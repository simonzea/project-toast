import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import  { ToastsContext} from '../ToastProvider';


function ToastShelf() {
  const {toasts} = React.useContext(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {toasts?.map(({id, variant, message}) =>(
        <Toast key={id} id={id}  variant={variant}>{message}</Toast>
      )
        )}
      </li>
    </ol>
  );
}

export default ToastShelf;
