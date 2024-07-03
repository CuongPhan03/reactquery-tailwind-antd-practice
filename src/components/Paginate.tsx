import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Pagination, ConfigProvider } from 'antd';
import { getAllPosts } from '../services/postService';

interface Props {
  currPage: number;
  pageSize: number;
}

const Paginate = (props: Props) => {
  const navigate = useNavigate();
  const onChange = (page: number) => {
    navigate(`/posts?page=${page}`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['allPosts'],
    queryFn: () => getAllPosts(),
  });

  return (
    <div className="w-max mx-auto my-10">
      <Pagination
        current={props.currPage}
        total={data?.data.length}
        pageSize={props.pageSize}
        showSizeChanger={false}
        onChange={onChange}
      />
    </div>
  );
};

export default Paginate;
