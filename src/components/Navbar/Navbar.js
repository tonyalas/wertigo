import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">Wertigo</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                            <a className="nav-link" href="/discover.html">Discover</a>
                            <a className="nav-link" href="/contactus.html">Add Your Business</a>
                            <a className="nav-link" href="/faq.html">FAQ</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;