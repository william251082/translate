import React, {useEffect, useState} from "react";
import axios from "axios";

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return <div>{resources.length}</div>
};

export default ResourceList;

// // useEffect called or not called on second render
// useEffect(() => {});
// useEffect(() => {}); // called
//
// useEffect(() => {}, []);
// useEffect(() => {}, []); // not called
//
// useEffect(() => {}, [1]);
// useEffect(() => {}, [1]); // not called
//
// useEffect(() => {}, ['hi']);
// useEffect(() => {}, [1]); // called
//
// useEffect(() => {}, [{color: 'red'}]);
// useEffect(() => {}, [{color: 'red'}]); // called because passing another object in js is a different object in memory
//
// useEffect(() => {}, [10, 10]);
// useEffect(() => {}, [10, 10]); // not called
//
// useEffect(() => {}, [10]);
// useEffect(() => {}, [10, 10]); // called


