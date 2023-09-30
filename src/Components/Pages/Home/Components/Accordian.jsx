import React, { useState } from 'react'

const Accordian = ({ faq }) => {

    const [showAccordian, setShowAccordian] = useState(false)

    return (

        <div className=' transition ease-in-out duration-[1.6s] cursor-pointer '  >
            <h2 id="accordion-flush-heading-1">
                <button onClick={() => setShowAccordian(!showAccordian)} type="button" className="text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b-[2px] border-cyan-600 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span className="text-xl text-blue-700 dark:text-white">{faq.question} </span>
                    {showAccordian ?
                        (<svg data-accordion-icon className="rotate-180 w-6 h-6 shrink-0 bg-cyan-400 text-cyan-100 rounded-2xl  hover:text-blue-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>)
                        :
                        (<svg data-accordion-icon className="w-6 h-6 shrink-0  bg-cyan-400 text-cyan-100 rounded-2xl hover:text-blue-600 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>)}


                </button>
            </h2>

            {showAccordian && (

                <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 border-b border-cyan-500 dark:border-gray-700">
                        <p className="text-lg mb-2 font-semibold text-indigo-800 dark:text-cyan-400">{faq.answer} </p>
                    </div>
                </div>
            )}


        </div>

    )
}

export default Accordian