export default function Testimonials(){
    return (
      <div className="testiCt">
        <div>
          <h2>Testimonials</h2>
        </div>
        <div className="sep">
          {/* testimonials box 1 */}
          <div className="testiInnerCt">
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/rating.33edb6d38b2d41f4bba0.png"
              alt="rating"
            />
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/profile1.412d62619d46ab20d554.jpg"
              alt="propic"
              className="testiCtProPic"
            />
            <h4>Selena</h4>
            <p>"Really enjoyed the atmosphere"</p>
          </div>

          {/* testimonials box 2 */}
          <div className="testiInnerCt">
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/rating.33edb6d38b2d41f4bba0.png"
              alt="rating"
            />
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/profile2-copy-0.6055557532ec417e5819.jpg"
              alt="propic"
              className="testiCtProPic"
            />
            <h4>Selena</h4>
            <p>"You have to try the Greek Salad!"</p>
          </div>

          {/* testimonials box 3 */}
          <div className="testiInnerCt">
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/rating.33edb6d38b2d41f4bba0.png"
              alt="rating"
            />
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/profile3.368a476e22b04c93c00f.jpg"
              alt="propic"
              className="testiCtProPic"
            />
            <h4>Selena</h4>
            <p>"Awesome place peaceful atmosphere with delicious food"</p>
          </div>
        </div>
      </div>
    );
}