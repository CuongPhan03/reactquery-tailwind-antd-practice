import { Card, Popconfirm } from 'antd';
import { DeleteOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons';

interface Props {
  id: number;
  author: number;
  title: string;
  body: string;
  handleOpenModal: (postId: number) => void;
  handleDeletePost: (postId: number) => void;
}

function PostCard(props: Props) {
  return (
    <Card
      actions={[
        <EllipsisOutlined
          style={{ color: '#46f', fontSize: '1rem' }}
          onClick={() => props.handleOpenModal(props.id)}
        />,
        <Popconfirm
          title=""
          description="Delete this post ?"
          icon={<QuestionCircleOutlined style={{ color: 'red', marginTop: '8px' }} />}
          onConfirm={() => props.handleDeletePost(props.id)}
        >
          <DeleteOutlined style={{ color: '#f55', fontSize: '0.9rem' }} />
        </Popconfirm>,
      ]}
    >
      <Card.Meta
        avatar={props.id}
        title={`Title: ${props.title}`}
        description={<p className="line-clamp-2">Content: {props.body}</p>}
      />
    </Card>
  );
}

export default PostCard;
