import { Ingredient } from "./Ingredient";
import { IngredientAmount } from "./IngredientAmount";

export type RecipeIngredient = {
    ingredient: Ingredient;
    amount: IngredientAmount;
};