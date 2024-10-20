import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Filter from '../Filter'
import SubScribe from '../SubScribe'

import './index.css'

const imagesList = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729323010/Ellipse_68_wir7zu.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729323016/Ellipse_69_hthq78.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729323023/Ellipse_71_lf4wdy.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729324702/Ellipse_62_e20zat.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729323010/Ellipse_68_wir7zu.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729323016/Ellipse_69_hthq78.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729323023/Ellipse_71_lf4wdy.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dieu9paow/image/upload/v1729324702/Ellipse_62_e20zat.png',
    displayText: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
  },
]

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Home = () => (
  <div className="home-container">
    <div className="buttons-container">
      <button className="plants-btn" type="button">
        Plants
      </button>
      <button className="pots-btn" type="button">
        Pots
      </button>
    </div>
    <p className="top-para">
      Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
      necessitatibus enim ut internos accusantium a numquam autem ab rerum
      omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates
      ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem
      eius. Et architecto nihil id labore omnis hic iste deleniti et porro
    </p>
    <h1 className="nursery-text">Nursery</h1>
    <ul className="slider-container">
      <Slider {...settings}>
        {imagesList.map(eachItem => (
          <li key={eachItem.id} className="scroll-item-container">
            <img
              src={eachItem.imageUrl}
              alt="user story"
              className="scroll-image"
            />
            <p className="scroll-text">{eachItem.displayText}</p>
          </li>
        ))}
      </Slider>
    </ul>
    <Filter />
    <SubScribe />
  </div>
)

export default Home
