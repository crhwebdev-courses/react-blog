import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList(posts) {
    return posts.map(post => {
      return <p>{post.title}</p>;
    });
  }

  render() {
    console.log(this.props.posts);
    return <div>{this.renderList(this.props.posts)}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
