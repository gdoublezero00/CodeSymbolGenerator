import React from 'react'
import { Container, Columns, Section } from 'react-bulma-components/full'

import InputBox from './InputBox'
import ViewBox from './ViewBox'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Section className="has-background-grey-light">
                <Container>
                    <Columns>
                        <InputBox />
                        <ViewBox />
                    </Columns>
                </Container>
            </Section>
        )
    }
}
export default Layout