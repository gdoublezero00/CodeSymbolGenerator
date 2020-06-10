import React from 'react'
import { connect } from 'react-redux'
import bwipjs from 'bwip-js'
import { Columns, Card } from 'react-bulma-components/full'

class ViewBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        bwipjs('symbol', {
            bcid:        this.props.symbolType,       // Barcode type
            text:        this.props.codeString,    // Text to encode
            scale:       2,               // 3x scaling factor
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this

        }, () => {

        })
    }

    render() {
        return (
            <Columns.Column style={{textAlign: 'center', minWidth: '300px'}}>
                {this.props.codeString !== "" ?
                <Card>
                    <Card.Content>
                        <canvas id="symbol"></canvas>
                    </Card.Content>
                </Card>
                : null }
            </Columns.Column>
        )
    }
}

const mapStateToProps = state => ({
    symbolType: state.symbolType,
    codeString: state.codeString,
})

export default connect(mapStateToProps)(ViewBox)