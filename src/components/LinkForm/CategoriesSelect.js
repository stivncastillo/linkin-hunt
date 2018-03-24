import React, { Component } from 'react';

import { getCategoriesFetch } from '../../actions/categoriesAction';

import { connect } from 'react-redux';

class CategoriesSelect extends Component {
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
            <option value={ option._id } key={ option._id }>{ option.name }</option>
        );

        this.setState({
            options: optionsCategories
        });
	}

    render() {
        return (
            <div>
                <select name="category" className="form-control">
                    { this.state.options }
                </select>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSelect)
