import category from "../directory-item/category-menu";
import DirectoryItem from "../directory-item/directory-item";
import "./categories.styles.scss";

const Directory = () => {
  return (
    <div className="categories-container">
    {category.map((item) => (
        <DirectoryItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </div>
  )
}

export default Directory;