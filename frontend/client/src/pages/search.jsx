import React, { useState } from 'react'
import SearchProperties from '../constants/searchProperties'
import Charts from '../components/charts'
import "./search.css"

const windowHeight = 500;
const itemHeight = 50;

function Search() {
    const [location, setLocation] = useState("");
    const [proType, setProType] = useState("");
    const [deed, setDeed] = useState("Rent");
    const [sqft, setSqft] = useState(0);
    const [search, setSearch] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const details =[
        {
            address: "California",
            listedRent: 875,
            lastSeen: "June 3, 2025",
            distance: "4.05mi",
            beds: 1,
            baths: 1,
            sqft: 520,
            type: "Condo"
        },
        {
            address: "Huntsville",
            listedRent: 699,
            lastSeen: "April 14, 2025",
            distance: "3.66mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "Hunters Ridge",
            listedRent: 699,
            lastSeen: "March 27, 2025",
            distance: "3.74mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4028, Hunters Ridge",
            listedRent: 699,
            lastSeen: "April 17, 2025",
            distance: "3.75mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4030, Hunters Ridge",
            listedRent: 725,
            lastSeen: "March 6, 2025",
            distance: "3.78mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "California",
            listedRent: 875,
            lastSeen: "June 3, 2025",
            distance: "4.05mi",
            beds: 1,
            baths: 1,
            sqft: 520,
            type: "Condo"
        },
        {
            address: "Huntsville",
            listedRent: 699,
            lastSeen: "April 14, 2025",
            distance: "3.66mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "Hunters Ridge",
            listedRent: 699,
            lastSeen: "March 27, 2025",
            distance: "3.74mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4028, Hunters Ridge",
            listedRent: 699,
            lastSeen: "April 17, 2025",
            distance: "3.75mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4030, Hunters Ridge",
            listedRent: 725,
            lastSeen: "March 6, 2025",
            distance: "3.78mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "California",
            listedRent: 875,
            lastSeen: "June 3, 2025",
            distance: "4.05mi",
            beds: 1,
            baths: 1,
            sqft: 520,
            type: "Condo"
        },
        {
            address: "Huntsville",
            listedRent: 699,
            lastSeen: "April 14, 2025",
            distance: "3.66mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "Hunters Ridge",
            listedRent: 699,
            lastSeen: "March 27, 2025",
            distance: "3.74mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4028, Hunters Ridge",
            listedRent: 699,
            lastSeen: "April 17, 2025",
            distance: "3.75mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4030, Hunters Ridge",
            listedRent: 725,
            lastSeen: "March 6, 2025",
            distance: "3.78mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "California",
            listedRent: 875,
            lastSeen: "June 3, 2025",
            distance: "4.05mi",
            beds: 1,
            baths: 1,
            sqft: 520,
            type: "Condo"
        },
        {
            address: "Huntsville",
            listedRent: 699,
            lastSeen: "April 14, 2025",
            distance: "3.66mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "Hunters Ridge",
            listedRent: 699,
            lastSeen: "March 27, 2025",
            distance: "3.74mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4028, Hunters Ridge",
            listedRent: 699,
            lastSeen: "April 17, 2025",
            distance: "3.75mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4030, Hunters Ridge",
            listedRent: 725,
            lastSeen: "March 6, 2025",
            distance: "3.78mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "California",
            listedRent: 875,
            lastSeen: "June 3, 2025",
            distance: "4.05mi",
            beds: 1,
            baths: 1,
            sqft: 520,
            type: "Condo"
        },
        {
            address: "Huntsville",
            listedRent: 699,
            lastSeen: "April 14, 2025",
            distance: "3.66mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "Hunters Ridge",
            listedRent: 699,
            lastSeen: "March 27, 2025",
            distance: "3.74mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4028, Hunters Ridge",
            listedRent: 699,
            lastSeen: "April 17, 2025",
            distance: "3.75mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4030, Hunters Ridge",
            listedRent: 725,
            lastSeen: "March 6, 2025",
            distance: "3.78mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "California",
            listedRent: 875,
            lastSeen: "June 3, 2025",
            distance: "4.05mi",
            beds: 1,
            baths: 1,
            sqft: 520,
            type: "Condo"
        },
        {
            address: "Huntsville",
            listedRent: 699,
            lastSeen: "April 14, 2025",
            distance: "3.66mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "Hunters Ridge",
            listedRent: 699,
            lastSeen: "March 27, 2025",
            distance: "3.74mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4028, Hunters Ridge",
            listedRent: 699,
            lastSeen: "April 17, 2025",
            distance: "3.75mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
        {
            address: "4030, Hunters Ridge",
            listedRent: 725,
            lastSeen: "March 6, 2025",
            distance: "3.78mi",
            beds: 1,
            baths: 1,
            sqft: 570,
            type: "Condo"
        },
    ]

    const overscan = 10;
    const startIndex = Math.max(0, Math.floor(scrollTop/itemHeight) - overscan);
    const endIndex = Math.min(details.length, Math.floor((scrollTop + windowHeight) /itemHeight));

    const handleLocation = (value) => {
        setLocation(value);
    }
    const handleProType = (value) => {
        setProType(value);
    }
    const handleDeed = (value) => {
        setDeed(value);
    }
    const handleSqft = (value) => {
        setSqft(value);
    }
    const handleSearch = () => {
        setSearch(details);
    }

    const generateRows = () => {
        let items = [];

        for(let i = startIndex; i < endIndex; i++){
                items.push( 
                    <div className="data-row" style={{height:'50px', top: `${itemHeight * i}px`, backgroundColor: i % 2 === 0 ? '#f0f0f0' : '#ffffff'}} id={i} key={i}>
                        <span className='span-data'>{search[i].address}</span>
                        <span className='span-data'>{search[i].listedRent}</span>
                        <span className='span-data'>{search[i].lastSeen}</span>
                        <span className='span-data'>{search[i].distance}</span>
                        <span className='span-data'>{search[i].beds}</span>
                        <span className='span-data'>{search[i].baths}</span>
                        <span className='span-data'>{search[i].sqft}</span>
                        <span className='span-data'>{search[i].type}</span>
                    </div>
                    
                )
        }
        return items;
    }

  return (
    <div className='searchPage'>
        <SearchProperties
            location= {location}
            proType = {proType}
            deed = {deed}
            sqft = {sqft} 
            handleLocation= {handleLocation}
            handleProType= {handleProType}
            handleDeed= {handleDeed}
            handleSqft= {handleSqft}
            handleSearch= {handleSearch}
        />
        {search ? (
            <>
                <Charts className="line-chart" details={details} />
                <div className="tableContainer" style={{height: `${windowHeight}px`}} onScroll={(e) => {
                    setScrollTop(e.currentTarget.scrollTop)
                }}>
                    <div className='listing'>
                        <div className='table-header'>
                            <span className='span-header'>ADDRESS</span>
                            <span className='span-header'>LISTED RENT</span>
                            <span className='span-header'>LAST SEEN</span>    
                            <span className='span-header'>DISTANCE</span> 
                            <span className='span-header'>BEDS</span> 
                            <span className='span-header'>BATHS</span> 
                            <span className='span-header'>SQ FT.</span>
                            <span className='span-header'>TYPE</span>
                        </div>
                        <div className='table-body'>
                            <div style={{height: `${details.length * itemHeight}`}}>
                                {generateRows()} 
                            </div>
                           
                        </div>
                    </div>
                </div>
            </>
        ):(<></>)}
    </div>
  )
}

export default Search