import React from "react";


function Header() {
  return (



    <section class="bg-transparent position-fixed row navbar navbar_header ">
    <div class="container">
        <div class="row w-100">
        <div class="col-md-12 p-0">
        <a class="navbar-brand" href="<?=MAIN_URL?>">
            <img src="<?=MAIN_URL?>assets/images/logo-white.png" class="logo header_logo_white" />
            <img src="<?=MAIN_URL?>assets/images/logo.png" class="logo header_logo_blue" />
        </a>

        <a class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </a>

        <div class="float_right navbar_menu">
            <ul class="navbar_nav mt-2 w-100">
                <li class="nav-item active">
                    <a class="a_link" href="<?=MAIN_URL?>">Home</a>
                </li>
                <li class="nav-item">
                    <a class="a_link" href="https://docs.lyocredit.io/" target="_blank">About</a>
                </li>
                <li class="nav-item">
                    <a class="a_link" href="https://www.lyotrade.com/en_US/freeStaking" target="_blank">Earn</a>
                </li>
                <li class="nav-item">
                    <a class="a_link" href="<?=MAIN_URL?>#community">Community</a>
                </li>
                <li class="nav-item">
                    <a class="a_link" href="https://docs.lyocredit.io/" target="_blank">Guides</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-light btn_buy_token text-primary" target="_blank"
                        href="https://www.lyotrade.com/en_US/newProTrade/LYO_USDT">Buy
                        Token</a>
                </li>
                 <li class="nav-item">
                    <a class="btn btn-light btn_buy_token text-primary" data-toggle="tooltip" data-placement="bottom"
                    title="Coming soon"
                        >Bridge</a>
                </li>
            </ul>
        </div>
    </div>
        </div>
    </div>
    
</section>



  );
}

export default Header;
