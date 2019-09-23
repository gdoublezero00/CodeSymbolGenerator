import React from 'react'
import { Navbar } from 'react-bulma-components/full'

class NavBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar color="grey-darker" className="has-background-grey">
                <Navbar.Brand>
                    <Navbar.Item className="has-text-white">
                        <div>CodeSymbolGenerator</div>
                    </Navbar.Item>
                </Navbar.Brand>
            </Navbar>
        )
    }
}
export default NavBox