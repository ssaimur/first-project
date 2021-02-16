import React from 'react'
import { useGlobe } from "./Context";
import EachItems from "./Eachitems";

const Listofproducts = () => {
    const {list} = useGlobe();
    return (
        <div className='lists'>
            <div className="margin"></div>
            <div className="taka50">
                <h4>Deikkha lon baiccha lon, ekdaam 50</h4>
            </div>
            <div className="flex-items">
                {list.map(item => {
                    return <EachItems key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}

export default Listofproducts
