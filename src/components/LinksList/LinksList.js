import React, { Component } from 'react';
import LinkItem from '../LinkItem/LinkItem';

import { getData } from '../../actions/linksAction';

import { connect } from 'react-redux';

class LinksList extends Component {
  constructor(props){
		super(props);

		this.state = {
            posts: []
        };
    }

    render() {


        const posts = this.props.posts.map((item, key) => {
            return (
                <LinkItem
                    name={item.title}
                    key={key}
                    description={item.description}
                    views={532}
                    favs={35}
                    url={item.url}
                />
            );
        });;

        return (
            <div>
                { posts }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.linksReducer
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        getData: () => dispatch(getData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinksList)