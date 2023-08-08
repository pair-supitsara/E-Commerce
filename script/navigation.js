const navbar = ` <nav class="navigation">
                    <div class="navigation-logo">
                        <div class="navigation-items">LOGO</div>
                    </div>

                    <ul class="navigation-menu">
                        <li>
                            <a class="navigation-items">    
                                Shop
                            </a>
                        </li>
                        <li>
                            <a class="navigation-items">
                                Filter
                            </a>
                        </li>
                        <li>
                            <a class="navigation-items">
                                My cart
                            </a>
                        </li>
                        <li>
                            <div class="navigation-items">
                                <i class="bi bi-arrow-down-left-square"></i>
                            </div>
                            <div class="dropdown">
                                <ul class="dropdown-content">
                                    <li href="#home">Home</li>
                                    <li href="#about">About</li>
                                    <li href="#contact">Contact</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    
                </nav>
                
`
document.body.insertAdjacentHTML("afterbegin", navbar);
