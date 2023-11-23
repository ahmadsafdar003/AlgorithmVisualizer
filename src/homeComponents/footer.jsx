import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/ahmadsafdar003" data-show-count="true" aria-label="Follow @AhmadSafdar on GitHub">Follow @AhmadSafdar</GitHubButton></div>
                   
                </div>

                <div class="footer-copyright text-center py-3">© 2023 Copyright:
                    <a href="https://github.com/ahmadsafdar003" style={{color: "#65b6f0"}}> Ahmad Safdar and Fida Ullah</a>
                </div>

            </footer>
        );
    }
}

export default Footer;