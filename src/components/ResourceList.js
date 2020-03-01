import React, {useEffect, useState} from "react";
import axios from "axios";

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);

    // const fetchResource = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    //
    //     setResources(response.data);
    // };

    // must use a cleanup function or nothing
    // putting a direct async function as the 1st arg is not allowed
    // useEffect(() => {
    //     fetchResource(resource);
    // }, [resource]);

    // another option
    useEffect(
        () => {
            (async (resource) => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

                setResources(response.data);
            })(resource);
        }, [resource]
    );

    return <div>{resources.length}</div>
};

export default ResourceList;

