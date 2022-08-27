import category from "../directory-item/category-menu";
import DirectoryItem from "../directory-item/directory-item";
import "./categories.styles.scss";

const Directory = () => {
  return (
    <div className="categories-container">
    {category.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;