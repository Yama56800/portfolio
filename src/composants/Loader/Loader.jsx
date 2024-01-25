import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Utilisez setTimeout pour masquer le loader après 4 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Nettoyez le timer lors du démontage du composant
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Affichez le loader seulement lorsque isLoading est true
  return (
    isLoading && (
    <div className="loader-container">
      <div className="pl">
        <div className="pl__outer-ring"></div>
        <div className="pl__inner-ring"></div>
        <div className="pl__track-cover"></div>
        <div className="pl__ball">
          <div className="pl__ball-texture"></div>
          <div className="pl__ball-outer-shadow"></div>
          <div className="pl__ball-inner-shadow"></div>
          <div className="pl__ball-side-shadows"></div>
        </div>
      </div>
    </div>
    )
  );
}

export default Loader;
