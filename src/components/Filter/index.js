import Products from '../Products'

import './index.css'

const filterItems = [
  {id: 1, displayText: 'Type of Plants'},
  {id: 2, displayText: 'Price'},
  {id: 3, displayText: 'Nursery'},
  {id: 4, displayText: 'Ideal Plants Location'},
  {id: 5, displayText: 'Indoor/ Outdoor'},
  {id: 6, displayText: 'Maintenance'},
  {id: 7, displayText: 'Plant Size'},
  {id: 8, displayText: 'Water Schedule'},
  {id: 9, displayText: 'Color'},
  {id: 10, displayText: 'Seasonal'},
  {id: 11, displayText: 'Light Efficient'},
]

const sortbyOptions = [
  {
    optionId: 'Sort by',
    displayText: 'Sort by',
  },
  {
    optionId: 'Size',
    displayText: 'Size',
  },
  {
    optionId: 'Popularity',
    displayText: 'Popularity',
  },
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price High-Low',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price Low-High',
  },
]

const Filter = () => (
  <div className="flex-row-container">
    <ul className="filter-ul-container">
      <li>
        <div className="filter-list-item">
          <p className="filter-content-text">Filter</p>
          <p className="filter-content-text">CLEAR ALL</p>
        </div>
        <hr className="line" />
      </li>
      {filterItems.map(eachItem => (
        <li key={eachItem.id}>
          <div className="filter-list-item">
            <p className="filter-content-text">{eachItem.displayText}</p>
            <p className="filter-content-text">+</p>
          </div>
          <hr className="line" />
        </li>
      ))}
    </ul>
    <div className="products-column-container">
      <div className="sort-by-container">
        <p className="sort-by-products-text">300 products</p>
        <select className="sort-by-input">
          {sortbyOptions.map(eachOption => (
            <option key={eachOption.optionId}>{eachOption.displayText}</option>
          ))}
        </select>
      </div>
      <Products />
    </div>
  </div>
)

export default Filter
