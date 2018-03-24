import React, { Component } from 'react';

import { getCategoriesFetch } from '../../actions/categoriesAction';

import { connect } from 'react-redux';

class CategoryList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: []
        };
    }

    componentWillMount() {
        this.props.getCategoriesFetch();
    }

    componentWillReceiveProps(nextProps){
        this._renderFetch(nextProps);
    }

	_renderFetch = (data) => {
        const optionsCategories = data.categoriesReducer.categories.map(option =>
            <li key={ option._id }><a href="">{ option.name }</a></li>
        );

        this.setState({
            options: optionsCategories
        });
    }

  render() {
    return (
        <nav className="menu">
            <h4>Topics</h4>
            <ol className="list-unstyled">
                { this.state.options }
            </ol>
        </nav>
    );
  }
}

const mapStateToProps = state => {
    return {
        categoriesReducer: state.categoriesReducer
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        getCategoriesFetch: () => dispatch(getCategoriesFetch())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
