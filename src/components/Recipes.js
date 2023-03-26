import HealthyGreen9 from "../images/healthy-green9.jpg";
import HealthyGreen11 from "../images/healthy-green11.jpg";

import HealthyGreen13 from "../images/healthy-green13.jpg";
import Recipe from "./Recipe";
import Footer from "./Footer";

const Recipes = () => {
  return (
    <div>
      <div className="recipes-ctnr">
        <Recipe
          image={HealthyGreen11}
          text={
            "Vegetable salad, Greek salad Vinaigrette Caesar salad Fruit salad, salad, leaf Vegetable, food, recipe"
          }
          classname={"recipe"}
        />
        <Recipe
          image={HealthyGreen9}
          text={
            "Fettuccine Alfredo Food Cooking Salad, eggplant, leaf Vegetable, soup, recipe "
          }
          classname={"recipe"}
        />
        <Recipe
          image={HealthyGreen9}
          text={
            "Asagne Pasta Bolognese sauce Spaghetti Recipe, Pasta italian, food, american Food, cuisine"
          }
          classname={"recipe"}
        />
        <Recipe
          image={HealthyGreen13}
          text={
            "Tomato, Salad Nicoise, Tuna Salad, Tuna Fish Sandwich, Egg Salad, Food, Recipe, Meal, Salad Nicoise, Tuna Salad, Tuna Fish Sandwich"
          }
          classname={"recipe"}
        />
        <Recipe
          image={HealthyGreen13}
          text={
            "Tomato, Salad Nicoise, Tuna Salad, Tuna Fish Sandwich, Egg Salad, Food, Recipe, Meal, Salad Nicoise, Tuna Salad, Tuna Fish Sandwich"
          }
          classname={"recipe"}
        />
        <Recipe
          image={HealthyGreen13}
          text={
            "Tomato, Salad Nicoise, Tuna Salad, Tuna Fish Sandwich, Egg Salad, Food, Recipe, Meal, Salad Nicoise, Tuna Salad, Tuna Fish Sandwich"
          }
          classname={"recipe"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Recipes;
