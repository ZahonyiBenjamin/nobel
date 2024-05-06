var menu = `
    <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <a id="nav-cim" class="navbar-brand" href="https://hu.wikipedia.org/wiki/Nobel-d%C3%ADj" target="_blank"><b>Nobel Díjak</b></a>
          <button class="navbar-toggler modal_gombok" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Modálisok</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ev_keresese.html">Év keresése</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="lenyilo.html">Lenyíló lista</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="szemely.html">Személy keresése</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
`
document.getElementById("menu").innerHTML = menu