let isLogin = false

let list = ` <li><a href="../page/login.html"><i class="bi bi-cart3"></i> Login</a></li>
             <li><a href="../page/register.html"><i class="bi bi-cart3"></i> Register</a></li>`
if (isLogin) {
    list = ` <li><a href="../page/profile.html"><i class="bi bi-person-circle"></i> Profile</a></li>
             <li><a><i class="bi bi-box-arrow-right"></i> Logout</a></li> `
}

const navbar = ` <nav class="navigation">
                    <div class="navigation-logo">
                        <div class="navigation-items">LOGO</div>
                    </div>
                    <ul class="navigation-menu">
                        <li><a href="../page/shop.html" class="navigation-items">shop</a></li>
                        <li><a href="../page/category.html" class="navigation-items">category</a></li>
                        <li><div class="navigation-items" id="dropdown-icon" onclick="document.getElementById('dropdown-menu').classList.toggle('visible');">
                                <i class="bi bi-arrow-down-left-square"></i>
                            </div>
                            <div class="dropdown " id="dropdown-menu">
                                <ul class="dropdown-content">
                                    ${list}
                                </ul>
                            </div>
                        </li>
                    </ul>             
                </nav>  `
document.body.insertAdjacentHTML("afterbegin", navbar);
