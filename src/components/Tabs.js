
import React,{useState} from "react";

const Tabs = ({tabs}) =>{

    const [activeTab,setActiveTabs] = useState(0);

    const handleClick = (index) =>{
        setActiveTabs(index);
    };

    return(
        <div>
            <ul>
                {
                    tabs.map((tab,index)=>(
                        <li key={index}
                        onClick={()=>handleClick(index)}>
                            {tab}
                        </li>
                    ))
                }
            </ul>
            <div>This is content of {tabs[activeTab]}</div>
        </div>
    )
}

export default Tabs;