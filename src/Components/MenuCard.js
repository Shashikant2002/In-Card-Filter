import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <div className="card-container">
                {menuData.map((crEle) => {
                    const{id, Category, title, description, price, image, link} = crEle;

                    return (
                        <div className="card" key={id}>
                            <p className='num'>{id}</p>
                            <p className='time'>{Category}</p>
                            <h2 className='heading'>{title}</h2>
                            <p className='para'>{description}</p>
                            <div className="read">
                                <p className='read-para'>$ <span>{price}</span></p>
                            </div>
                            <img className='main-img-card' src={image} alt="" />
                            <a className="ordernow" href={link}>Order Now</a>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default MenuCard
