import React, { Component } from 'react';

import * as routes from '../../constants/routes';
import { helpers } from '../../utils';
import { getFetch } from '../../actions/authAction';
import CategoriesSelect from './CategoriesSelect';

import { connect } from 'react-redux';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE,
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const {
            email,
            password,
        } = this.state;

        this.setState({ isLoading: true });
        this.props.getFetch(email, password);

        event.preventDefault();
    }

    componentWillReceiveProps(nextProps){ this._renderFetch(nextProps); }

	_renderFetch = (data) => {
        if (data.authReducer.isLogged) {
            this.setState({ isLoading: false });
            this.props.history.push(routes.HOME);
        }else{
            this.setState(helpers.byPropKey('error', 'The credentials are not valid'));
        }
	}

    render() {
        // const { email, password } = this.state;
        // const isInvalid =
        //     password === '' ||
        //     email === '';

        return (
            <div>
                <h3>Create Link</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Category</label>
                        <CategoriesSelect />
                    </div>

                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" placeholder="Title of link"/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea name="description" className="form-control" rows="3"></textarea>
                        <small className="form-text text-muted">A short description of Link or Resource.</small>
                    </div>

                    <div className="form-group">
                        <label>Tags</label>
                        <input type="text" className="form-control" placeholder="angular, java, photoshop..."/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        getFetch: (email, password) => dispatch(getFetch(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkForm)
