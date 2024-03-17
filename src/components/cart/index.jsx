import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Cart = ({ wishlist, cookingTableHandler, cookingItems }) => {
  const [tfoot, setTfoot] = useState({ total_time: 0, total_calories: 0 });

  // useEffect(() => {
  //   let obj = { total_time: 0, total_calories: 0 };
  //   cookingItems.forEach((cookingItem) => {
  //     obj.total_time += cookingItem.preparing_time;
  //     obj.total_calories += cookingItem.calories;
  //   });
  //   setTfoot(obj);
  // }, [cookingItems]);

  useEffect(() => {
    const updatedTfoot = cookingItems.reduce(
      (acc, curr) => {
        return {
          total_time: acc.total_time + curr.preparing_time,
          total_calories: acc.total_calories + curr.calories,
        };
      },
      { total_time: 0, total_calories: 0 }
    );
    setTfoot(updatedTfoot);
  }, [cookingItems]);

  return (
    <div className="w-[38%] border border-zinc-800 border-opacity-20 rounded-2xl">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-center text-zinc-800 text-2xl font-semibold mt-7">Want to cook: {wishlist.length} </h2>
        <hr className="w-2/3 border border-[#28282826]" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-zinc-500 text-base font-medium font-fira">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item, i) => (
                <tr key={i} className="bg-[#28282808] text-zinc-800 text-opacity-70 text-base font-normal font-fira">
                  <th className="">{i + 1}</th>
                  <td className="p-2"> {item.recipe_name} </td>
                  <td className="p-2"> {item.preparing_time} minutes </td>
                  <td className="p-2"> {item.calories} calories </td>
                  <td className="p-2">
                    <button onClick={() => cookingTableHandler(item)} className="px-4 py-2 bg-emerald-500 rounded-[50px] text-slate-900 text-base font-medium">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-center text-zinc-800 text-2xl font-semibold mt-7">Currently cooking: {cookingItems.length} </h2>
        <hr className="w-2/3 border border-[#28282826]" />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-zinc-500 text-base font-medium font-fira">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {cookingItems.map((item, i) => (
                <tr key={i} className="bg-[#28282808] text-zinc-800 text-opacity-70 text-base font-normal font-fira">
                  <th className="p-5">{i + 1}</th>
                  <td className="p-5"> {item.recipe_name} </td>
                  <td className="p-5"> {item.preparing_time} minutes </td>
                  <td className="p-5"> {item.calories} calories </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="text-zinc-800 text-opacity-80 text-base font-medium">
                <th></th>
                <td></td>
                <td>
                  Total Time = <br /> {tfoot.total_time} minutes
                </td>
                <td>
                  Total Calories =<br /> {tfoot.total_calories} calories
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  wishlist: PropTypes.array.isRequired,
  cookingTableHandler: PropTypes.func.isRequired,
  cookingItems: PropTypes.array.isRequired,
};

export default Cart;
