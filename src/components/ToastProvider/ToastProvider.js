import React from 'react';

export const ToastsContext = React.createContext();
export const MessageContext = React.createContext();
export const VariantOptionContext = React.createContext();



function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  


  function createNewToast (variantOption, message) {
    let toast = {
      id: crypto.randomUUID(),
      variant: variantOption,
      message,
    }
    setToasts([...toasts, toast]);
  }

  function dismissToast (id) {
    const newArray = toasts.filter((toast)=>(toast.id !== id));
    setToasts(newArray)
  }

let toastsContextValue ={
  toasts,
  createNewToast,
  dismissToast
};

  return (
  <ToastsContext.Provider value={toastsContextValue}>
            {children}

  </ToastsContext.Provider>);
}

export default ToastProvider;
