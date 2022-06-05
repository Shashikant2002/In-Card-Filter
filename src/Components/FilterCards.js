import React, { useState } from 'react';
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((curEle) => {
    return curEle.Category;
})),
    "All"
];


const FilterCards = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);

    const filterFood = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curEle) => {
            return curEle.Category === category;
        });
        setMenuData(updateList);
    }


    return (
        <>
            <Navbar filterFood={filterFood} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default FilterCards
