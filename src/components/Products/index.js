import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoCloseSharp} from 'react-icons/io5'
import {useState} from 'react'
import {IoIosHeartEmpty} from 'react-icons/io'
import {FaPlus} from 'react-icons/fa'
import {HiMinusSm} from 'react-icons/hi'

import './index.css'

const productsData = [
  {
    id: 11,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334623/e1ce63ff429a0c018fd6e2e5dd614458_q76isj.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 12,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334630/7973d62829a030074ad8b6ad34_qy3fiu.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 13,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334637/daa994fdb511faa82ea79a5ef58fbb1a_yrs04h.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 14,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334623/e1ce63ff429a0c018fd6e2e5dd614458_q76isj.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 15,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334630/7973d62829a030074ad8b6ad34_qy3fiu.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 16,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334637/daa994fdb511faa82ea79a5ef58fbb1a_yrs04h.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
]

const moreProductsData = [
  {
    id: 111,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334623/e1ce63ff429a0c018fd6e2e5dd614458_q76isj.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 122,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334630/7973d62829a030074ad8b6ad34_qy3fiu.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 133,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334637/daa994fdb511faa82ea79a5ef58fbb1a_yrs04h.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 144,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334623/e1ce63ff429a0c018fd6e2e5dd614458_q76isj.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 155,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334630/7973d62829a030074ad8b6ad34_qy3fiu.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
  {
    id: 166,
    name: 'Monsterra',
    imagrUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729334637/daa994fdb511faa82ea79a5ef58fbb1a_yrs04h.png',
    price: '₹ 299',
    discountPrice: '₹ 359',
    rating: 4.9,
    description: 'Indoor Plant, Low maintenance',
  },
]

const Products = () => {
  const [showMore, setShowMore] = useState(false)

  const productDetails = props => {
    const {
      id,
      name,
      imagrUrl,
      price,
      discountPrice,
      rating,
      description,
    } = props

    return (
      <li key={id} className="product-card-container">
        <div className="d-flex-column">
          <button className="like-btn" type="button">
            <IoIosHeartEmpty size="20" color="#575757" />
          </button>
          <img src={imagrUrl} alt="plant" className="plant-image" />
        </div>
        <Link to="/thankyou">
          <button className="view-product-btn" type="button">
            View Product
          </button>
        </Link>
        <div className="product-name-container">
          <h1 className="product-name">{name}</h1>
          <p className="product-description">{description}</p>
          <div className="rating-container">
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1729355114/image_10_lohuig.png"
              alt="rating stars"
              className="rating-image"
            />
            <p className="rating-text">{rating}</p>
          </div>
          <div className="rating-container">
            <span className="discountPrice">{discountPrice}</span>
            <span className="price">{price}</span>
          </div>
          <div className="btn-flex-container">
            <div className="rating-container add-item-container ">
              <button className="add-item-btn" type="button">
                <HiMinusSm size="20" color="#ffffff" />
              </button>
              <Popup
                modal
                trigger={
                  <button className="add-item-btn" type="button">
                    Add to cart
                  </button>
                }
                position="top"
              >
                {closed => (
                  <>
                    <div className="popup-container">
                      <p className="confirm-name">
                        Product Name :{' '}
                        <span className="product-name">{name}</span>
                      </p>
                      <p className="confirm-name">
                        Price :{' '}
                        <span className="discountPrice">{discountPrice}</span>
                        <span className="price">{price}</span>
                      </p>
                      <p>to confirm adding the product to the cart.</p>
                      <div className="btn-flex-container">
                        <button
                          type="button"
                          className="confirm-btn"
                          onClick={() => closed()}
                        >
                          Cancel
                        </button>

                        <Popup
                          modal
                          trigger={
                            <button type="button" className="confirm-btn">
                              Confirm
                            </button>
                          }
                        >
                          {close => (
                            <>
                              <div className="confirm-order-container">
                                <button
                                  type="button"
                                  className="duplicate-btn"
                                  onClick={() => close()}
                                >
                                  <IoCloseSharp size="20" />
                                </button>
                                <h1 className="your-cart">Your Cart</h1>

                                <div className="bg-container-1">
                                  <hr className="cart-line" />
                                  <h1 className="congratuations-heading">
                                    Congratulations <br />
                                    Order Placed!
                                  </h1>
                                </div>
                                <img
                                  src="https://res.cloudinary.com/dieu9paow/image/upload/v1729420881/plant_1_u97tpe.png"
                                  alt="plant"
                                  className="plant-image"
                                />
                                <div className="bg-container-2">
                                  <p className="thank-you-description">
                                    Thank you for choosing Chaperone services.
                                    We will soon get in touch with you!
                                  </p>
                                  <Link to="/">
                                    <button
                                      type="button"
                                      className="continue-shopping-btn"
                                    >
                                      cotinue shopping
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </>
                          )}
                        </Popup>
                      </div>
                    </div>
                  </>
                )}
              </Popup>

              <button className="add-item-btn" type="button">
                <FaPlus size="15" color="#ffffff" />
              </button>
            </div>

            <button type="button" className="buy-rent-btn">
              Buy on Rent
            </button>
          </div>
        </div>
      </li>
    )
  }

  const onClickViewLess = () => setShowMore(!showMore)
  return (
    <div className="d-flex-column">
      <ul className="products-container">
        {productsData.map(eachProduct => productDetails(eachProduct))}
      </ul>
      {!showMore && (
        <button
          className="view-more-btn"
          type="button"
          onClick={onClickViewLess}
        >
          View More
        </button>
      )}
      {showMore && (
        <div className="d-flex-column">
          <ul className="products-container">
            {moreProductsData.map(eachProduct => productDetails(eachProduct))}
          </ul>
          {showMore && (
            <button
              className="view-more-btn"
              type="button"
              onClick={onClickViewLess}
            >
              View Less
            </button>
          )}
        </div>
      )}
    </div>
  )
}
export default Products
