import { Image } from "./Image";
import { RecipeIngredient } from "./RecipeIngredient";
import { Step } from "./Step";

export type Recipe = {
    id: string;
    title: string;
    description: string;
    publishedDate: Date;
    author: string;
    images: Image[];
    steps: Step[];
    ingredients: RecipeIngredient[];
};