import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import AccessSide from '../../components/AccessSide/AccessSide';
import CategoryList from '../../components/CategoryList/CategoryList';
import LinkForm from '../../components/LinkForm/LinkForm';

import { connect } from 'react-redux';

class CreateLink extends Component {
    constructor(props){
		super(props);

		this.state = {};
    }

    render() {
        return (
            <div>
                <Header withSearchBar={false} />
                <div className="row">
                    <div className="col-sm-3">
                        <CategoryList />
                    </div>

                    <div className="col-sm-6">
                        <LinkForm />
                    </div>

                    <div className="col-sm-3">
                        <AccessSide />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // posts: state.linksReducer
    }
};

const mapDispatchToProps = dispatch =>{
	return {
		// getData: () => dispatch(getData())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLink);