import React from "react";
import "./PanelGrid.css";

export default function PanelGrid({icon, prop}){

    
    return(
        <>
            <div className="container bg-gray-950" >
                <a href="">
                    <div className='flex'>
                        <div>
                            {icon}
                        </div>
                        <div>
                            <p>
                                {prop}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
