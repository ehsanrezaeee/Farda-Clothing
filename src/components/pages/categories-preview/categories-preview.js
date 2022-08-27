import { Fragment, useContext } from "react";
import { CategoriesContex } from "../../../contexts/categoriesContext";
import CategoryPreview from "../../category-preview/category-preview";

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContex)
  return (
  <Fragment>
    {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return(
        <CategoryPreview key={title} title={title} products={products} />
        )
    })}
  </Fragment>)
}

export default CategoriesPreview;