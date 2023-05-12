import React from "react";
import { MAIN_URL } from "@/consts";

function Hero() {

  // const bannerStyle = {
  //   background: 'url(https://lyocredit.io/ssets/images/banner_main.png) center/cover, radial-gradient(75.43% 382.65% at 0% 51.35%, #109CEE 0%, #0A92ED 32.29%, #0894EC 55.21%, #0F97EC 79.69%, #17A0EA 100%)'
  // };
  

  return (


    <div class="main_content">
    <div class="first_section row"
        // style="background:url(<?=MAIN_URL?>assets/images/banner_main.png) center/cover;background: radial-gradient(75.43% 382.65% at 0% 51.35%, #109CEE 0%, #0A92ED 32.29%, #0894EC 55.21%, #0F97EC 79.69%, #17A0EA 100%);"
        style = {{
          background: "url(https://lyocredit.io/ssets/images/banner_main.png) center/cover, radial-gradient(75.43% 382.65% at 0% 51.35%, #109CEE 0%, #0A92ED 32.29%, #0894EC 55.21%, #0F97EC 79.69%, #17A0EA 100%)", // Dark grey color
        }}
        >
        <div class="row first_section_main">
            <div class="col-md-6 text-white content_text">
                <h1>LYO Credit (LYO)</h1>
                <p class="mt-5">LYO Credit (LYO) is the utility token of the LYOPAY Ecosystem. Use LYO for purchasing
                    flight tickets, paying transaction fees, staking, and more.</p>
                <div class="col-md-12 mt-5 icon-row">
                    <div>
                        <a href="https://www.coingecko.com/en/coins/lyo-credit/" target="_blank"><img
                                src="<?=MAIN_URL?>assets/images/apps/coingecko.png" class="image1_banner w-80" /></a>
                        <div>
                  
                        </div>

                    </div>
                    <div>
                        <a href="https://coinmarketcap.com/currencies/lyo-credit/" target="_blank"><img
                                src="<?=MAIN_URL?>assets/images/apps/coinmarketcap.png"
                                class="image1_banner w-80" /></a>
                        <div>
                
                        </div>
                    </div>

                </div>

                <div class="col-md-12 mt-5">
                   <a href="https://www.lyotrade.com/en_US/newProTrade/LYO_USDT" target="_blank" class="btn btn-sm desktop-link">Buy
                        Now</a>
                        <a href="https://m.lyotrade.com/#/trade" target="_blank" class="btn btn-sm mobile-link">Buy
                        Now</a>
                    <a href="https://white-paper.lyopay.com/" target="_blank"
                        class="btn btn-sm">White Paper</a>
                </div>


                <div class="mt-3 mb-2 loading-skeleton" id="apiLast">

                </div>
                <div class="mt-3 mb-2 loading-skeleton" id="apiVol">

                </div>

                <div class="mt-3 mb-2 apirow" id="apirowL">
                    <img src="<?=MAIN_URL?>assets/images/apps/lyo-credit.png"/>LYOCREDIT (LYO) <strong>$</strong><span
                        id="last" class="apiData"></span>
                </div>
                <div class="apirow" id="apirow">
                    24 Hour Trading Vol <strong>$</strong><span class="apiData vol" id="coinvol"></span>
                </div>
            </div>
            <div class="col-md-6 text-white position-relative">
              
            </div>

            <div class="follow_social text-white d-none">
                <a class="social_footer">Follow us: &nbsp;</a>
                <a href="https://www.facebook.com/lyopayofficial" class="social_footer" target="_blank"><i
                        class="fa fa-facebook"></i></a>&nbsp;
                <a href="https://www.instagram.com/lyopayofficial/" class="social_footer" target="_blank"><i
                        class="fa fa-instagram"></i></a>&nbsp;
                <a href="https://t.me/lyocredit" class="social_footer" target="_blank"><i
                        class="fa fa-telegram"></i></a>&nbsp;
                <a href="https://twitter.com/lyopayofficial" class="social_footer" target="_blank"><i
                        class="fa fa-twitter"></i></a>&nbsp;
                <a href="https://www.linkedin.com/company/lyopay/" class="social_footer" target="_blank"><i
                        class="fa fa-linkedin"></i></a>&nbsp;
            </div>
        </div>
    </div>




    <div class="second_section_zokyo row">
        <div class="container w-75 mx-auto my-5 py-5">
            <div class="row second_section_main">
                <div class="col-md-6 text-dark content_text p-5 mt-5">
                    <h1>99% Zokyo Audit Report</h1>
                    <p class="mt-5">LYO’s smart contract security qualifications got a 99% rating from Zokyo.</p>
                    <div class="col-md-12 mt-5">
                        <div class="menu_logo d-flex">
                            <img src="<?=MAIN_URL?>assets/images/layercheck.png" class="layer_check" />
                            <div class="layer_check">&nbsp; Zokyo is an end-to-end encrypted security company that
                                provides security auditing and testing services to blockchain-based projects.</div>
                        </div>
                        <div class="menu_logo d-flex mt-3">
                            <img src="<?=MAIN_URL?>assets/images/layercheck.png" />
                            <div class="layer_check">&nbsp; This audit analyzes step-by-step the security and
                                correctness of the LYO smart contract codebase..</div>
                        </div>

                        <div class="menu_logo d-flex mt-5">
                            <div class="layer_check_readmore"><a href="https://docs.lyocredit.io/token-information/token-audit"
                                    target="_blank">Read More &nbsp;<i class="fa fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5 text-dark p-5">
                    <img src="<?=MAIN_URL?>assets/images/section2_img1.png" class="image2_banner w-100 p-2 zokyo-img" />
                </div>
            </div>
        </div>
    </div>



    <div class="third_section_technology row" style={{background: "#F8FAFF"}}>
        <div class="container third_section_main">
            <div class="row">
                <div class="col-md-6 text-dark content_text">
                    <h1>Token Technology</h1>
                    <p class="mt-5">LYO Credit (LYO) is based on the BNB Chain. The BEP-20 smart contract allows
                        transactions in the ecosystem and records balances in its wallets.</p>
                    <p class="mt-3">Using the BNB chain enhances the liquidity of the token and reduces the risk of
                        contracts being broken. BNB complies with tech and protocol standards, is widely acceptable and
                        extremely reliable.</p>
                    <div class="col-md-12 mt-5">
                        <div class="menu_logo d-flex mt-5 mb-5">
                            <div  class="layer_check"><a
                                    href="https://bscscan.com/token/0x9bad6c75b5a4e72df8147cc89d068cc848648e59"
                                    target="_blank">
                                    Smart Contract &nbsp;<i class="fa fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-dark content_card">
                    <div class="row token_right_card_div">
                        <div class="col-md-6 p-5">
                            <div class="token_right_card p-5">
                                <img src="<?=MAIN_URL?>assets/images/supply1.png" class="image_token" />
                                <div class="col-md-12 mt-4">
                                    <h4 class="bold-600">Limited supply</h4>
                                    <p class="bold-500"><span id="apiTotalSupply"></span> units</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 p-5">
                            <div class="token_right_card p-5">
                                <img src="<?=MAIN_URL?>assets/images/blockchain1.png" class="image_token" />
                                <div class="col-md-12 mt-4">
                                    <h4 class="bold-600">Blockchain</h4>
                                    <p class="bold-500">BNB Chain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="four_section_roadmap row"
        style={{background: "#F8FAFF"}}>
        <div  style={{background:"#F8FAFF"}}>
            <div class="w-80 row four_section_main mx-auto">
                <div class="col-md-12 text-white text-center content_text pt-5 mt-5">
                    <h1>Token Timeline</h1>

                    <p class="mt-4">
                        <h3 class="pb-5">Coming Soon...</h3>
                    </p>
                </div>

          

                <div class="container-fluid row d-none">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card bg-transparent">
                                <div class="card-body">
                                    <h4 class="card-title mb-5"></h4>

                                    <div class="hori-timeline timeline_block" dir="ltr">
                                        <ul class="list-inline events">
                                            <li class="list-inline-item event-list time_line_card">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-primary text-primary">2 June</div>
                                                    <h5 class="font-size-16">Event One</h5>
                                                    <p class="text-muted">It will be as simple as occidental in fact it
                                                        will be Occidental Cambridge friend</p>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list time_line_card">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-success text-success">5 June</div>
                                                    <h5 class="font-size-16">Event Two</h5>
                                                    <p class="text-muted">Everyone realizes why a new common language
                                                        one could refuse translators.</p>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list time_line_card">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-danger text-danger">7 June</div>
                                                    <h5 class="font-size-16">Event Three</h5>
                                                    <p class="text-muted">If several languages coalesce the grammar of
                                                        the resulting simple and regular</p>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-inline-item event-list time_line_card">
                                                <div class="px-4">
                                                    <div class="event-date bg-soft-warning text-warning">8 June</div>
                                                    <h5 class="font-size-16">Event Four</h5>
                                                    <p class="text-muted">Languages only differ in their pronunciation
                                                        and their most common words.</p>
                                                    <div>
                                                        <a href="#" class="btn btn-primary btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>




    </div>


              
      


  );
}

export default Hero;
