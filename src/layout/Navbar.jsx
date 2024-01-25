import './Navbar.scss'
import Search from '../assets/search1.svg'

const Navbar=()=>{
    return(
        <div className="navbar">
            <form className="form">
                <input type="text" className="input" placeholder='type a word ..' />
                <button ><img src={Search} alt="" /></button>
            </form>
        </div>
    )
};

export default Navbar;