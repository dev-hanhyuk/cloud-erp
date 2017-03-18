import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetch_all_accounts } from '_actions/account'
import { register_asset } from '_actions/asset'


const styles={}

class AssetPurchase extends Component {
    constructor(props) {
      super(props)
      this.state = { id: '', serial_number: '', name: '', quantity: 0, unit_price: 0, description: '', depreciation_method: 'none', account_id: ''}
    }

    componentDidMount () {
      this.props.fetch_all_accounts()
    }

    changeProp = (prop, val) => this.setState({ [prop]: val })

    registerAsset = (e) => {
      e.preventDefault()
      this.props.register_asset(this.state)
    }

    renderAssetClasses = () => {
      const { accounts } = this.props;
      return accounts.filter(a => +a.id > 11400 && +a.id < 11600 ).map(a => (<option key={a.id} value={a.id}>{a.subcategory}: {a.name}</option>))
    }


    render () {
      return (
        <section>
          <h3>Asset Registration</h3>
          <input type="text" placeholder="asset_custom_id" onChange={e => this.changeProp('id', e.target.value)} />
          <input type="text" placeholder="serial_number" onChange={e => this.changeProp('serial_number', e.target.value)} />
          <input type="text" placeholder="asset_name" onChange={e => this.changeProp('name', e.target.value)} />
          <input type="number" placeholder="quantity" onChange={e => this.changeProp('quantity', +e.target.value)} />
          <input type="number" placeholder="unit_price" onChange={e => this.changeProp('unit_price', +e.target.value)} />
          <input type="text" placeholder="description" onChange={e => this.changeProp('description', e.target.value)} />

          <select onChange={e => this.changeProp('depreciation_method', e.target.value)} value={this.state.depreciation_method}>
            <option value="none">NONE</option>
            <option value="stream-line">Stream-line</option>
            <option value="accelerated">Accelerated</option>
          </select>

          <select onChange={e => this.changeProp('account_id', e.target.value)} value={this.state.account_id}>
            {this.props.accounts ? this.renderAssetClasses() : ''}
          </select>

          <button onClick={this.registerAsset}>Register</button>
        </section>
      )
    }
}

const mapStateToProps = ({ assets, accounts }) => ({ assets, accounts })
export default connect(mapStateToProps, { register_asset, fetch_all_accounts }) (AssetPurchase)