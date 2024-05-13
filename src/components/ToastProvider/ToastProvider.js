import React from 'react';

export const ToastsContext = React.createContext();
export const MessageContext = React.createContext();
export const VariantOptionContext = React.createContext();



function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  React.useEffect(() => {
    // Effect logic:

    function handleEscapeKey (event) {
      const key = event.key; 
      if (key === "Escape") {
        deleteToasts();
      }
  }

    window.addEventListener('keydown', handleEscapeKey);

    // Cleanup function:
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

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

  function deleteToasts () {
    setToasts([])
  }

let toastsContextValue ={
  toasts,
  createNewToast,
  dismissToast,
  deleteToasts
};

  return (
  <ToastsContext.Provider value={toastsContextValue}>
            {children}

  </ToastsContext.Provider>);
}

export default ToastProvider;
