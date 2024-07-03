import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Modal, Spin } from 'antd';
import { getPostsById } from '../services/postService';
import { Post } from '../types/post';

interface Props {
  isShow: boolean;
  postId: number;
  setShowModal: (value: boolean) => void;
}

const initInputValue: Post = { id: 0, title: '', userId: 0, body: '' };

function ModalPost(props: Props) {
  const [inputValue, setInputValue] = useState<Post>(initInputValue);

  const { data, isFetching } = useQuery({
    queryKey: ['post', props.postId],
    queryFn: () => getPostsById(props.postId),
    enabled: props.postId > 0,
  });

  useEffect(() => {
    const postData = data?.data ?? initInputValue;
    setInputValue(postData);
  }, [isFetching, props.isShow]);

  return (
    <Modal
      title={<p className="text-blue-500">Post {props.postId}</p>}
      open={props.isShow}
      onOk={() => props.setShowModal(false)}
      onCancel={() => props.setShowModal(false)}
    >
      <Spin spinning={isFetching}>
        <h1 className="text-xl font-semibold">Title: {inputValue.title}</h1>
        <p className="opacity-75">Author: {inputValue.userId !== 0 ? inputValue.userId : ''}</p>
        <p className="mt-2 whitespace-break-spaces">{inputValue.body}</p>
      </Spin>
    </Modal>
  );
}
export default ModalPost;
