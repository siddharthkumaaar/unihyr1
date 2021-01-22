import React, { Component } from 'react'

class Footer extends Component{

    render(){

        return(
            <>
                {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">
                <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>Siddharth Tech</span></strong>
                </div>
                <div class="credits">
                    {/* <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
                    Designed by <a href="https://bootstrapmade.com/">Siddharth Kumar</a>
                </div>
                </div>
            </footer>
            {/* <!-- End  Footer --> */}
            </>
        )
    }
}

export default Footer