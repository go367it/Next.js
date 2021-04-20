// for /news/soething

import { useEffect } from "react"

function Details() {

    useEffect(()=>{
        console.log('details page')
    })

    return(
        <div>
            <h1>Details page</h1>
        </div>
    )
}

export default Details