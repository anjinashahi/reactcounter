import React from "react";
import { useState } from "react";
import Buttongroup from "./Buttongroup";
import Displaycompoment from "./Displaycomponent";

export default function Democomponent(){
    let [yesOrNo, setYesOrNo] = useState(false)
    let obj = {X:"apple", V:"banana", H:"carrot"}
    let anjina 
    if (yesOrNo) {
        anjina = <Buttongroup />;
      } else {
        anjina = <Displaycompoment />;
      }
    
    return(
        <div>
          {yesOrNo?(
            <Buttongroup/>
          ) : (
            <Democomponent/>
          )}
            {obj.X} {obj.H}
        </div>
    )
}