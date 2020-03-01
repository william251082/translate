import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
    state = { resources: [] };

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

        this.setState({ resources: response.data })
    }

    // gets called everytime a component gets updated
    // don't just copy componentDidMount without prevProps
    async componentDidUpdate(prevProps) {
        console.log(prevProps);
        if (prevProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

            this.setState({ resources: response.data })
        }
    }

    render() {
        return <div>{this.state.resources.length}</div>
    }
}

export default ResourceList;
