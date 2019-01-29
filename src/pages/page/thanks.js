import React from "react"
import { Button } from "antd";
import { Link } from "gatsby";


function Thanks() {
    return (
        <div>
            <h2>Wah makasih!</h2>
            <p>Kami bakal hubungin kamu balik, secepatnya. Thanks!</p>
            <Link to="/"><Button type="primary">Balik ke Home</Button></Link>
        </div>
    )
} 

export default Thanks