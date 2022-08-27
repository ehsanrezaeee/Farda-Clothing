import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utility/firebase/firebase.js";

export const CategoriesContex = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
  
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    
    getCategoriesMap()
  }, [])

  

  const value = {categoriesMap, setCategoriesMap}

  return <CategoriesContex.Provider value={value}>{children}</CategoriesContex.Provider>
}