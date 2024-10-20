import {useState} from 'react'

import {AiOutlineUser} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {CiSearch} from 'react-icons/ci'

import './index.css'

const activeItems = [
  {id: 1, displayText: 'Home'},
  {id: 2, displayText: 'Plants & Pots'},
  {id: 3, displayText: 'Tools'},
  {id: 4, displayText: 'Our Services'},
  {id: 5, displayText: 'Blog'},
  {id: 6, displayText: 'Our Story'},
  {id: 7, displayText: 'FAQs'},
]

const Header = () => {
  const [activeOptionId, setOptionId] = useState(activeItems[1].id)

  const listItem = itemDetails => {
    const {id, displayText} = itemDetails
    const changeOption = () => setOptionId(id)
    const classStyle =
      id === activeOptionId ? 'selected-item' : 'non-selected-item'

    return (
      <li key={id}>
        <button className={classStyle} type="button" onClick={changeOption}>
          {displayText}
        </button>
      </li>
    )
  }

  return (
    <nav className="header-container">
      <div className="green-container">
        <p className="top-center-text">Free Shipping on orders above 999/-</p>
        <p className="top-right-text">Call us on: +91 98768 051203</p>
      </div>
      <div className="flex-row-container">
        <div className="logo-container">
          <img
            className="logo-image"
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1729269028/image_55_lhovwe.png"
            alt="chaperon logo"
          />
          <h1 className="logo-heading">Chaperone</h1>
        </div>
        <ul className="ul-items-constainer">
          {activeItems.map(eachItem => listItem(eachItem))}
        </ul>
        <ul className="profile-container">
          <li className="profile-list-container">
            <button className="profile-btn" type="button">
              <AiOutlineUser size="20" />
            </button>
            <p className="profile-text">My Profile</p>
          </li>
          <li className="profile-list-container">
            <button className="profile-btn" type="button">
              <BsCart size="20" />
            </button>
            <p className="profile-text">My Profile</p>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <div className="search-input-icon-container">
          <button className="profile-btn" type="button">
            <CiSearch size="20" />
          </button>
          <input
            type="search"
            placeholder="Search Plant"
            className="input-text"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729321824/image_91_rjunum.png"
          alt="tree icon"
          className="search-tree-img"
        />
      </div>
    </nav>
  )
}
export default Header
