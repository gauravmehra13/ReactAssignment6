
import React, { createContext, useState } from 'react'

export const store=createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Patrick Bateman",
"Age":"25",
"Course":"HTML",
"Batch":"August",
"id":"1"

},

{

    "Name":"Travis Bickle",
    "Age":"27",
    "Course":"Css",
    "Batch":"september",
    "id":"2"
    
    },
    {

        "Name":"Norman Bates",
        "Age":"27",
        "Course":"React",
        "Batch":"December",
        "id":"3"
        
        },
        
        {
        
            "Name":"Hannibal Lector",
            "Age":"23",
            "Course":"Nodejs",
            "Batch":"januauary",
            "id":"4"
            
            },
            {
        
                "Name":"Thomas Shelby",
                "Age":"24",
                "Course":"Database",
                "Batch":"April",
                "id":"5"
                
                },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail