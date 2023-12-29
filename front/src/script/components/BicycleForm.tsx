export const BicycleForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Type" />
        <input type="text" placeholder="Color" />
        <input type="number" placeholder="Wheel size" />
        <input type="number" placeholder="Price" />
        <input type="text" placeholder="ID (slug): ХХХХХХХХХХХХХ" />
        <input type="text" placeholder="Description" />
        <button type="submit">Save</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
};
