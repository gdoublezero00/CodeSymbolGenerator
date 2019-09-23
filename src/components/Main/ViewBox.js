import React from 'react'
import { connect } from 'react-redux'
import bwipjs from 'bwip-js'
import { Columns } from 'react-bulma-components/full'

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
            <Columns.Column>
                <canvas id="symbol"></canvas>
            </Columns.Column>
        )
    }
}

const mapStateToProps = state => ({
    symbolType: state.symbolType,
    codeString: state.codeString,
})

export default connect(mapStateToProps)(ViewBox)