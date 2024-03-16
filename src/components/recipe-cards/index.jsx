// import PropTypes from 'prop-types'

import { useEffect, useState } from 'react';
import RecipeCard from '../recipe-card';

const RecipeCards = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('fakedata.json')
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-3/5 grid grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe_id} recipe={recipe} />
      ))}
    </div>
  );
};

RecipeCards.propTypes = {};

export default RecipeCards;
