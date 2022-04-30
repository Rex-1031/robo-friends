import React from 'react'
import Card from './Card'


const CardList = ({robots}) => {
    if(true){
        throw new Error('Does not Compute...')
    }

return (
    <div>
         {
            robots.map((user, indx)=>{
                return(
                    <Card 
                        key={indx} 
                        id={robots[indx].id} 
                        name={robots[indx].name} 
                        email={robots[indx].email} 
                    />
                )
        })
    }
    </div>
  )
}


export default CardList