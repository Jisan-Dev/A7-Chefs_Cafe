import PropTypes from 'prop-types';

const Cart = ({ wishlist }) => {
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
                    <button className="px-4 py-2 bg-emerald-500 rounded-[50px] text-slate-900 text-base font-medium">Preparing</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  wishlist: PropTypes.array.isRequired,
};

export default Cart;
