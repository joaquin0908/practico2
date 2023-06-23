export interface RootObject {
  categories: Category[];
  meals: Meal[]
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;

}
export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}