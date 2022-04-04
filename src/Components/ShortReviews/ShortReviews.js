import React from 'react'
import useReviews from '../Customhooks/Customhook'
import ShowShort from '../ShowShortRevies/ShowShort'
import "./Shorrevies.css"

const ShortReviews = () => {
    const [customars] = useReviews()
    // console.log(customars)
    return (
        <div className='d-flex mt-5'>
            {
                customars.slice(0, 3).map(customar => <ShowShort
                    customar={customar}
                    key={customar.id}
                />)
            }
        </div>
    )
}

export default ShortReviews