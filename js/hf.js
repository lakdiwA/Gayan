const header = () => {
    let el = document.querySelector('header');
    el.innerHTML = `<div id="side-nav" class="sidenav">
    <a href="javascript:void(0)" id="side-nav-close">&times;</a>

    <div class="sidenav-content">
        <p>
            Kuncen WB1, Wirobrajan 10010, DIY
        </p>
        <p>
            <span class="fs-16 primary-color">(+68) 120034509</span>
        </p>
        <p>info@yourdomain.com</p>
    </div>
</div>
<div id="side-search" class="sidenav">
    <a href="javascript:void(0)" id="side-search-close">&times;</a>
    <div class="sidenav-content">
        <form action="">

            <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                    aria-label="Search">
                <div class="input-group-append">
                    <button class="input-group-text red lighten-3" id="basic-text1">
                        <span class="lnr lnr-magnifier"></span>
                    </button>
                </div>
            </div>

        </form>
    </div>

</div>
<nav id="header-navbar" class="navbar navbar-expand-lg py-4">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center text-white" href="/">
            <img class="mb-0" src="img/favicon-32x32.png" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header"
            aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
            <span class="lnr lnr-menu"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-nav-header">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sponser.html">Sponsor</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a id="side-search-open" class="nav-link" href="#">
                        <span class="lnr lnr-magnifier"></span>
                    </a>
                </li>
                <li class="nav-item only-desktop">
                    <a class="nav-link" id="side-nav-open" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-question-circle" viewBox="0 0 16 16" style="margin-bottom: .2rem;">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div id="side-nav" class="sidenav">
    <a href="javascript:void(0)" id="side-nav-close">&times;</a>

    <div class="sidenav-content">
        <p>
            Kuncen WB1, Wirobrajan 10010, DIY
        </p>
        <p>
            <span class="fs-16 primary-color">(+68) 120034509</span>
        </p>
        <p>info@yourdomain.com</p>
    </div>
</div>
<div id="side-search" class="sidenav">
    <a href="javascript:void(0)" id="side-search-close">&times;</a>
    <div class="sidenav-content">
        <form action="">

            <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                    aria-label="Search">
                <div class="input-group-append">
                    <button class="input-group-text red lighten-3" id="basic-text1">
                        <span class="lnr lnr-magnifier"></span>
                    </button>
                </div>
            </div>

        </form>
    </div>
</div>`;
}

const footer = () => {
    let el = document.querySelector('footer');
    el.innerHTML = `<div class="inner container">
    <div class="row">
        <div class="col-lg-4 col-md-12 d-flex align-items-center">

        </div>
        <div class="col-lg-4 col-md-12 d-flex align-items-center">
            <p class="mx-auto text-center mb-0">&copy; 2019 Roxy. Design by Gayan Perera.</p>
        </div>

        <div class="col-lg-4 col-md-12">
            <nav class="nav nav-mastfoot justify-content-center">
                <a class="nav-link" href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="nav-link" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="nav-link" href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="nav-link" href="#">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="nav-link" href="#">
                    <i class="fab fa-youtube"></i>
                </a>
            </nav>
        </div>

    </div>
</div>`;
}

header();
footer();