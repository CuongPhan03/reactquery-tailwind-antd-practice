import { useSearchParams } from 'react-router-dom';

const getSearchParam = (name: string) => {
    const [searchParams] = useSearchParams();
    return searchParams.get(name);
}

export default getSearchParam