import React from 'react'

const Navbar = ({ filterFood, menuList }) => {
  return (
    <>
       <div className="nav-bar">
                <div className="btn-group">
                    {
                        menuList.map((curEle) => {
                            return <button className="nav-button" onClick={() => filterFood(curEle)}>{curEle}</button>
                        })
                    }
                    {/* <button className="nav-button" onClick={() => setMenuData(Menu)}>All</button>
                    <button className="nav-button" onClick={() => filterFood("Break_Fast")}>Break Fast</button>
                    <button className="nav-button" onClick={() => filterFood("Lunch")}>Lunch</button>
                    <button className="nav-button" onClick={() => filterFood("Dinner")}>Dinner</button> */}
                </div>
            </div>
    </>
  )
}

export default Navbar
