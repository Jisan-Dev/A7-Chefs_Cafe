import PropTypes from 'prop-types';
import { CiClock2 } from 'react-icons/ci';
import { AiOutlineFire } from 'react-icons/ai';

const RecipeCard = ({ recipe }) => {
  const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
  return (
    <div className="p-6 border border-zinc-800 border-opacity-20 rounded-2xl">
      <img src={recipe_image} className="w-full rounded-2xl" />
      <h3 className="text-zinc-800 text-xl font-semibold mt-5 mb-4">{recipe_name}</h3>
      <p className="text-zinc-500 text-base font-normal font-fira mb-9">{short_description}</p>
      <h4 className="text-zinc-800 text-lg font-medium mb-3">Ingredients: {ingredients.length}</h4>
      <ul className="list-disc list-inside text-zinc-500 text-lg font-normal font-fira pb-4 border-b">
        {ingredients.map((ingredient, i) => (
          <li key={i}> {ingredient} </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-5 mb-5 font-fira items-center">
        <p className="flex items-center gap-2 text-zinc-800 text-opacity-80 text-base font-normal ">
          <CiClock2 className="w-6 h-6" /> {preparing_time} minutes
        </p>
        <p className="flex items-center gap-2 text-zinc-800 text-opacity-80 text-base font-normal ">
          <AiOutlineFire className="w-6 h-6" /> {calories} calories
        </p>
      </div>
      <button className="px-6 py-3 bg-emerald-500 rounded-[50px] text-slate-900 text-base font-medium">Want to Cook</button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
