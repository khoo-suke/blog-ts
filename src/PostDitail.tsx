import React, { useEffect, useState } from 'react';
import './PostDitail.scss';
import { useParams } from 'react-router-dom';

type PostPage = {
  thumbnailUrl: string,
  categories: string[],
  title: string,
  createdAt: string,
  content: string,
}

function PostDitail():any {
  const { postId } = useParams();
  const [post, setPost] = useState<PostPage>();

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${postId}`);
      const data = await res.json();
      setPost(data.post);
    };
    fetcher();
  }, [postId]);

  return (
    <>
      {post && (
      <div className="container">
        <img src={post.thumbnailUrl} alt={post.title} />
        <div className="info">
          <div className="date">
            {post.createdAt?.substring(0, 10).replace(/-/g, '/')}
          </div>
          <div className="categories">
            {post.categories.map(category => (
              <p key={category}>{category}</p>
            ))}
          </div>
        </div>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      </div>
      )};
    </>
  );
}

export default PostDitail;