import React from "react"
import ReactDOM  from "react-dom"
// import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page(){
return(
    <div>
        <MainContent />
        <Footer />
<h1>Hasitha</h1>
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
