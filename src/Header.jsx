import React from 'react'

const Header = () => {
return (
    <header>
    <div className="container">
        <nav>
            <h1 className = "logo"><i class="fa-solid fa-spa"></i> KHANBAN</h1>
            <button className = "btn"><i class="fa-solid fa-plus"></i> Add new task</button>
        </nav>
        </div>
    </header>
)
}

export default Header