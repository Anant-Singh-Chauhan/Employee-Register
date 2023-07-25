export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" >Home<span className="sr-only"></span></a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" >Logout<span className="sr-only"></span></a>
                    </li>
                </ul>
            </div>

            </nav>
        </div>
    );
};