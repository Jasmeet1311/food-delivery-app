import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
// import { useState } from 'react';

function ExploreMenu({category,setCategory}){
//   const [category,setCategory] = useState("all");
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='content'> Craving something specific? Navigate through our menu categories to find your favorite dishes, whether it is pizza, Rolls, or comfort food classics.</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>{setCategory(prev=>(prev===item.menu_name)?"all":item.menu_name)}} key={index} className="explore-menu-list-items">
                            <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="image" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu
