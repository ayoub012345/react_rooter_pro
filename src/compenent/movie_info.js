import React from "react";
import "./movie_info.css";
import { Link } from "react-router-dom";
function Movie_info({title,des,trai})
{

        let url=window.location.href
        title=url.slice(url.indexOf("?title=")+7,url.indexOf("?description=")).replace("%20"," ");
        for (let x in title ) {
            title=title.replace("%20"," ");   
          }
        des=url.slice(url.indexOf("?description=")+13,url.length).replace("%20"," ");
        for (let x in des ) {
          des=des.replace("%20"," ");   
        }
        trai=url.slice(url.indexOf("?id=")+4,url.indexOf("?title="));
        console.log(trai)
    return(
        <div id="prc">
            <div>
            <iframe width="950" height="620" src={trai} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <h1>title : {title}</h1>
                <h2>description</h2>
                <h2>{des}</h2>
                <Link className="lnk_" to="/">back</Link>
            </div>
        </div>
    );
}
export default Movie_info;
