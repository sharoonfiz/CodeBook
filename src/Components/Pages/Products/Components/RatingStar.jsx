import React from 'react'

const RatingStar = ({ rating }) => {

    const ratingArray = Array(5).fill(false)

    for (let i = 0; i < rating; i++) {
        ratingArray[i] = true;
    }

    return (

        <div>

            {ratingArray.map((rate, indx) => (
                rate ? <i key={indx} className="text-lg bi bi-star-fill text-yellow-300 mr-1"></i>
                    :
                    (<i key={indx} className="text-lg bi bi-star text-yellow-400 mr-1"></i>)

            ))}



        </div>
    )
}

export default RatingStar