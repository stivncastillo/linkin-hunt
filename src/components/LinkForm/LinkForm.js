import React, { Component } from 'react';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

import * as routes from '../../constants/routes';
import { helpers } from '../../utils';
import { postFetch, getMetaDataFetch } from '../../actions/linksAction';
import CategoriesSelect from './CategoriesSelect';

import { connect } from 'react-redux';

class LinkForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            description: null,
            tags: [],
            category: null,
            url: 'http://stivencastillo.com/'
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (tags) => {
        this.setState({tags})
    }

    onSubmit(event) {
        // const {
        //     email,
        //     password,
        // } = this.state;

        // this.setState({ isLoading: true });
        this.props.postFetch();

        event.preventDefault();
    }

    componentWillReceiveProps(nextProps){ this._renderFetch(nextProps); }

	_renderFetch = (data) => {
        // if (data.authReducer.isLogged) {
        //     this.setState({ isLoading: false });
        //     this.props.history.push(routes.HOME);
        // }else{
        //     this.setState(helpers.byPropKey('error', 'The credentials are not valid'));
        // }
    }

    _getMetadata = () => {
        this.props.getMetaDataFetch({url: this.state.url}, `?url=${this.state.url}`, 'GET');
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
                        <label>Url</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="http://example.com/"
                            onChange={event => this.setState(helpers.byPropKey('url', event.target.value))}
                            onBlur={this._getMetadata}
                            value={this.state.url}/>
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
                        <TagsInput value={this.state.tags} onChange={this.handleChange} maxTags={5} addKeys={[188,186]}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        newLink: state.newLinkReducer,
        metadata: state.metadataReducer
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        postFetch: () => dispatch(postFetch()),
        getMetaDataFetch: (body, urlApi, method) => dispatch(getMetaDataFetch(body, urlApi, method))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkForm)
