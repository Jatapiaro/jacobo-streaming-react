import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Header extends React.Component {

    state = {
        isOpen: false,
        data: [],
        navbarClass: 'custom-navbar'
    }

    constructor(props) {
        super(props);
        this.setState({
            data: this.props.en
        });
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentWillMount() {
        const lang = this.props.lang;
        const data = (lang === "en") ? this.props.en : this.props.es;
        this.setState({
            data: data,
            navbarClass: (!this.props.navbarClass) ? 'custom-navbar' : this.props.navbarClass
        })
    }


    render() {
        return (
            <div id="header" className="header">
                <Navbar className={this.state.navbarClass} expand="md">
                    <NavbarBrand href="/">Jacobo Tapia</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink target="_blank" href="http://jacobo.totoringo.com">Versión en Wordpress</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

}
