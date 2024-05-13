import React from 'react';

import Button from '../Button';
import  { ToastsContext} from '../ToastProvider';

import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variantOption, setVariantOption] = React.useState(VARIANT_OPTIONS[0]);
  const {createNewToast} = React.useContext(ToastsContext);


  function handleCreateNewToast(event){
    event.preventDefault();
    createNewToast(variantOption,message);
    setMessage('');
    setVariantOption(VARIANT_OPTIONS[0]);
  }

  return (
    
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

    <ToastShelf>
    
    </ToastShelf>

      <form className={styles.controlsWrapper} onSubmit={handleCreateNewToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
             id="message"
            className={styles.messageInput}
            value={message}
            onChange={event => {
              setMessage(
                event.target.value
              );
            }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map( variant => (
            <label key={variant} htmlFor="variant-notice">
              <input
                id="variant-notice"
                type="radio"
                name="variant"
                value={variant}
                checked={variantOption === variant}
                onChange={event => {
                  setVariantOption(event.target.value)
            }}
              />
              {variant}
            </label>) )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button >Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
