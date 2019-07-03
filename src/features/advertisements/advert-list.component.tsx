import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAdvertisements, ActionTypes } from './../advertisements/actions'
import { bindActionCreators, Dispatch } from 'redux';

class AdvertisementComponent extends Component {

    componentDidMount() {
        const { getAdvertisements } = this.props as Props;
        getAdvertisements();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            getAdvertisements
        },
        dispatch
    );

type Props = ReturnType<typeof mapDispatchToProps>;

export default connect(null, mapDispatchToProps)(AdvertisementComponent);