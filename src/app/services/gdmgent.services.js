import React, { useContext, useState } from 'react';

const GDMGENT_API_CASES = "https://www.gdm.gent/static/data/cases.json";

const GdmGentContext = React.createContext(null);
const useGdmGent = () => useContext(GdmGentContext);

const GdmGentProvider = ({children}) => {
  const [work, setWork] = useState();

  const getWork = async () => {
    try {
      const response = await fetch(GDMGENT_API_CASES);
      if (!response.ok) {
          throw new Error('There went something wrong, ara you sure the API link is right?');
      }

      const json = await response.json();
      setWork(json);

      return work;
    } catch(err) {
    } finally {
    }
  };

  return (
    <GdmGentContext.Provider value={{getWork, work}}>
      {children}
    </GdmGentContext.Provider>
  )
};

export {
  GdmGentContext,
  GdmGentProvider,
  useGdmGent,
};