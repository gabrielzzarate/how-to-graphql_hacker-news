import React, { Component } from 'react';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';

class Link extends Component {
    render() {
        return (
            <div>
                <div>{this.props.link.description} {{this.props.link}}</div>
            </div>
        )
    }
}

export default createFragmentContainer(Link, graphql`
    fragment Link_link on Link {
        id
        description
        url
    }
`);