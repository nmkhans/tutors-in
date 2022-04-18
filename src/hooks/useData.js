import {useState, useEffect} from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nmkhans/turors-service/main/service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return { services, setServices};
}

export {
    useService,
}