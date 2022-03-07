import React from 'react'

const MenuCard = ({HereMenuData}) => {
//console.log(HereMenuData) u will see 9 arrayw values

  return (
    <>
    <section className="main-card--cointainer">
    {HereMenuData.map((currEle)=>{

      //de structuing
      const {id, name, category, image, description}=currEle


        return (
        <>
        <div className="card-container" key={id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-category subtle">{name}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">{ description}</span>

                <span className='card-read'>Read</span>
                {<img src={image} alt="images" className='card-media'/> }
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
    </div>

    
    </>
        );
    })}

    </section>
    </>    
  )
}

export default MenuCard