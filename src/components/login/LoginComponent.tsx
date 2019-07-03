import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AccessToken } from '../../store/session/reducer';
import { login } from '../../store/session/actions';
import { AppState } from '../../store/reducer';

interface State {
}

interface OwnProps {
}

interface DispatchProps {
    login: (username: string, password: string) => void
}

interface StateProps {
    accessToken: AccessToken
}

type Props = StateProps & OwnProps & DispatchProps

class Login extends React.Component<Props, State> {

    constructor(prop: Props) {
        super(prop)
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-6">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="userId">Username</label>
                            <input id="userId" type="text" className="form-control" placeholder="Username" aria-label="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-control" placeholder="Password" aria-label="Password" />
                        </div>
                        <button className="btn btn-primary" onClick={() => this.props.login("william@caminiti.com", "secret1234")}>
                            {
                                this.props.accessToken.isFetching &&
                                (
                                    <i className="fas fa-spinner fa-spin"></i>
                                ) || 'Login'
                            }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (states: AppState, ownProps: OwnProps): StateProps => {
    return {
        accessToken: states.accessToken
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
    return {
        login: async (username, password) => {
            await dispatch(login(username, password))
            console.log('Login completed [UI]')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)