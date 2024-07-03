import { useState } from 'react';
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query';
import { Spin, message } from 'antd';
import PostCard from '../components/PostCard';
import ModalPost from '../components/ModalPost';
import Paginate from '../components/Paginate';
import { deletePost, getPostsByPage } from '../services/postService';
import getSearchParam from '../utils/getSearchParam';

const LIMIT = 9;

function PostsPage() {
  const queryClient = useQueryClient();
  const page: string = getSearchParam('page') ?? '1';

  const [currPostId, setCurrPostId] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleOpenModal = (postId: number) => {
    setCurrPostId(postId);
    setShowModal(true);
  };

  const { data, isFetching, refetch } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getPostsByPage(+page, LIMIT),
    placeholderData: keepPreviousData,
  });

  const deletePostMutation = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      message.success('Delete post successfully !');
      // queryClient.invalidateQueries({ queryKey: ['posts', page] });
      refetch();
    },
  });
  const handleDeletePost = (postId: number) => {
    deletePostMutation.mutate(postId);
  };

  return (
    <Spin spinning={isFetching}>
      <ModalPost isShow={showModal} postId={currPostId} setShowModal={setShowModal} />
      <div className="grid grid-cols-3 gap-5">
        {data?.data.map((post) => (
          <PostCard
            id={post.id}
            author={post.userId}
            title={post.title}
            body={post.body}
            handleOpenModal={handleOpenModal}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </div>
      <Paginate currPage={+page} pageSize={LIMIT} />
    </Spin>
  );
}

export default PostsPage;
