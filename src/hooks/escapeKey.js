import React from 'react';
export  function useEscapeKey(auxFunction){
    React.useEffect(() => {
        // Effect logic:
    
        function handleEscapeKey (event) {
          const key = event.key; 
          if (key === "Escape") {
            auxFunction();
          }
      }
    
        window.addEventListener('keydown', handleEscapeKey);
    
        // Cleanup function:
        return () => {
          window.removeEventListener('keydown', handleEscapeKey);
        };
      }, [auxFunction]);
};

