export const BicycleForm = () => {
  return (
    <div className="main-page__form">
      <form action="" className="bicycle-form">
        <div className="bicycle-form__grid-2col">
          <input type="text" placeholder="Name" className="bicycle-form__name" />
          <input type="text" placeholder="Type" className="bicycle-form__type" />
        </div>
        <div className="bicycle-form__grid-2col">
          <input type="text" placeholder="Color" className="bicycle-form__color" />
          <input type="number" placeholder="Wheel size" className="bicycle-form__wheel-size" />
        </div>
        <div className="bicycle-form__grid-2col">
          <input type="number" placeholder="Price" className="bicycle-form__price" />
          <input type="text" placeholder="ID (slug): ХХХХХХХХХХХХХ" className="bicycle-form__id" />
        </div>
        <div className="bicycle-form__grid-1col">
          <textarea placeholder="Description" className="bicycle-form__description" />
        </div>
        <div className="bicycle-form__grid-2col">
          <button type="submit" className="bicycle-form__btn">
            {'Save'.toUpperCase()}
          </button>
          <button type="reset" className="bicycle-form__btn">
            {'Clear'.toUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
};
