import React from 'react'
import { connect } from 'react-redux'
import { Columns, Form } from 'react-bulma-components/full'
import { changeSymbolType } from '../../actions/changeSymbolType'
import { changeCodeString } from '../../actions/changeCodeString'

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChangeSymbolType = this.handleChangeSymbolType.bind(this)
        this.handleChangeString = this.handleChangeString.bind(this)

    }

    componentDidMount() {
        var symbolType = localStorage.getItem("SymbolType")
        if (symbolType != null) {
            this.props.changeSymbolType(symbolType)
        }
    }

    handleChangeSymbolType(e) {
        this.props.changeSymbolType(e.target.value)
        localStorage.setItem("SymbolType", e.target.value)
    }

    handleChangeString(e) {
        this.props.changeCodeString(e.target.value)
    }

    render() {
        return (
            <Columns.Column>
                <Form.Field>
                    <Form.Label>Symbol</Form.Label>
                    <Form.Control>
                        <Form.Select value={this.props.symbolType} onChange={this.handleChangeSymbolType}>
                            <option value="code128">Code128</option>
                            <option value="qrcode">QRCode</option>
                            <option value="datamatrix">DataMatrix</option>
                        </Form.Select>
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Symbol Value</Form.Label>
                    <Form.Control>
                        <Form.Input placeholder="input the symbol value." value={this.props.codeString} onChange={this.handleChangeString}></Form.Input>
                    </Form.Control>
                </Form.Field>
            </Columns.Column>
        )
    }
}

const mapStateToProps = state => ({
    symbolType: state.symbolType,
    codeString: state.codeString,
})

const mapDispatchToProps = dispatch => ({
    changeSymbolType: ((type) => {
        dispatch(changeSymbolType(type))
    }),
    changeCodeString: (str) => dispatch(changeCodeString(str))
})
export default connect(mapStateToProps, mapDispatchToProps)(InputBox)