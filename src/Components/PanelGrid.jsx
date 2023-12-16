import React from 'react';
import "./PanelGrid.css";
import { useNavigate } from 'react-router-dom';


export default function PanelGrid({icon, prop,onClick}){
    const navigate = useNavigate();

    const handleClick = (e) => {
        // Use the prop or any other identifier to construct the route
        e.preventDefault();
        const route = `/${prop}`;
        navigate(route);
        
      };
    return(
        <>
            <div className="container" onClick={handleClick}>
                <a href="#">
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