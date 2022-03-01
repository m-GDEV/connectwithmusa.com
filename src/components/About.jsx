// linkedin and github links

import React, {useEffect} from "react";

export default function Missing() {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  },[])

    return (
          <div>   
            <h1 className="text-xl">No pagedd found!</h1>
            <p>go home bro</p>
          </div>
      );
}
