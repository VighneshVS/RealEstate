import Subheading from './subheading'
import './searchProperties.css'

function SearchProperties({handleLocation, handleProType, handleDeed, handleSqft, handleSearch}) {
  /* const stateNames = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]; */

  const propertyType = ['Single Family', 'Condo', 'Townhouse', 'Manufactured', 'Multi Family', 'Apartment'];

  return (
    <div className='search'>
      <Subheading text={'Search Properties'} />
      <h3>Look up rent estimates, comps and market trends for any property in the US.</h3>
      <input type='text' className='search--locationText' placeholder='Search property by state' onChange={handleLocation} required></input>
      <form className='search-params'>
        <select className='search-trade' name='Rent/Sell' id='rent/sell' onChange={handleDeed}>
          <option value='Rent'>Rent</option>
          <option value='Sale'>Sale</option> 
        </select>

        <select className='search--propType' name='propertyType' id='propertyType' required onChange={handleProType}>
          <option className='placeholder-mock' value='' disabled hidden selected >Property Type</option>
          {propertyType.map(type => {
            return <option key={type} value={type}>{type}</option>
          })}
        </select>

        <input type='text' className='search--sqft' placeholder='Sq. ft' onChange={handleSqft}/>
      </form>
      <button className='search--button' onClick={handleSearch}>SEARCH</button>
    </div>
  )
}

export default SearchProperties