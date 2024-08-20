import category from "../data/category";
import useCategoryStore from "../store/useCategoryStore";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
const CatergorySection = () => {
  const title = "Product Categories";
  // const categories = category;
  const {categories} = useCategoryStore();

  return (
    <section id="category-section" className="p-5">
    <Container>
    <p className="text-sm text-gray-500 mb-2">{title}</p>
      <div className="flex overflow-scroll category-button-group">
        {/* <CategoryButton category="all" current={true} /> */}

        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
          
          />
        ))}
      </div>
    </Container>
    </section>
  );
};
export default CatergorySection;
