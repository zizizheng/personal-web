import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { navAction } from '../../action/navAction';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.navbar = null;
        this.handleScroll = this.handleScroll.bind(this);
        this.state = { navStyle: "navbar navbar-default navbar-sticky" };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.navOffset = this.navbar.getBoundingClientRect().top;
    }

    componentDidUpdate() {
        this.navOffset = this.props.navOffset;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <nav ref={(nav) => this.navbar = nav} className={this.state.navStyle}>
                <div className="nav-container">
                    <ul className="navbar-list">
                        <li>
                            <Link to="/" onClick={() => { this.changePage(navAction('home')) }} className={this.props.curPage === 'home' ? 'active' : ''}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => { this.changePage(navAction('about')) }} className={this.props.curPage === 'about' ? 'active' : ''}>About
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={() => { this.changePage(navAction('portfolio')) }} className={this.props.curPage === 'portfolio' ? 'active' : ''}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => { this.changePage(navAction('contact')) }} className={this.props.curPage === 'contact' ? 'active' : ''}>Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    changePage(v) {
        this.props.dispatch(v);
    }

    handleScroll() {
        let curOffset = window.pageYOffset;
        if (curOffset > this.navOffset) {
            this.setState({ navStyle: "navbar navbar-default navbar-sticky stick" });
        }
        else {
            this.setState({ navStyle: "navbar navbar-default navbar-sticky" })
        }
        // console.log(curOffset);
    }
}

const mapStateToProps = (state) => {
    return {
        curPage: state.navReducer.curPage,
        navOffset: state.navReducer.navOffset
    }
}
export default connect(mapStateToProps)(Nav);

