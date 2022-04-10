import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItems from "./MenuItems";

export default function Menu() {
  const [beans, setBeans] = useState('');

  const getMenuData = () => {
    axios.get('http://localhost:5000/api/beans')
    .then(result => {
      const menuData = result.data.menu
      setBeans(menuData)
    })
    .catch(error => console.error(`Error: ${error}`))
  }

  useEffect(() => {
    getMenuData();
  }, []);

  return(
    <MenuItems beans={beans} />
  )
}
