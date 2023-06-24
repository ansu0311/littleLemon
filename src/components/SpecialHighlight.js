export default function SpecialHighlight(){
    return (
      <div>
        <div className="sep shct1">
          <div>
            <h1>Specials</h1>
          </div>
          <div>
            <button type="button" className="btn btn-warning">
              Online Menu
            </button>
          </div>
        </div>
        <div className="sep">
          {/* Special Item 1 */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/greek-salad1.da4153859902e076458c.jpg"
              className="card-img-top"
              alt="Greek Salad"
            />
            <div className="card-body">
              <h5 className="card-title">Greek Salad</h5>
              <p className="card-text">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="#" className="btn btn-primary">
                Order Delivery
              </a>
            </div>
          </div>

          {/* Special Item 3 */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/bruchetta.40310f42c67ccfe9571e5e5127e98059.svg"
              className="card-img-top"
              alt="Bruschetta"
            />
            <div className="card-body">
              <h5 className="card-title">Bruschetta</h5>
              <p className="card-text">
                Our Bruschetta is made from homemade grilled bread that has been
                smeared with garlic and seasoned with salt and olive oil. Topped
                with fresh vegetables.
              </p>
              <a href="#" className="btn btn-primary">
                Order Delivery
              </a>
            </div>
          </div>

          {/* Special Item 3 */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/greek-salad1.da4153859902e076458c.jpg"
              className="card-img-top"
              alt="Lemon Cake"
            />
            <div className="card-body">
              <h5 className="card-title">Lemon Cake</h5>
              <p className="card-text">
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="#" className="btn btn-primary">
                Order Delivery
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}