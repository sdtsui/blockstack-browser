import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PublicKeychain } from 'keychain-manager'

import { InputGroup, AccountSidebar, PageHeader } from '../../components/index'
import { KeychainActions } from '../../store/keychain'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

class WithdrawPage extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="body-inner body-inner-white">
        <PageHeader title="withdraw" />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AccountSidebar />
            </div>
            <div className="col-md-9">
              <p>Send your funds to another Bitcoin wallet.</p>
              <InputGroup label="Recipient address" placeholder="Recipient address" />
              <div>
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawPage)
