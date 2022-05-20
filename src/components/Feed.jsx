import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  const postContent = [
    {
      title: 'Shrimp and Chorizo Paella',
      postDate: 'September 14, 2016',
      imageSrc:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2016/12/shutterstock_171061349-View-of-the-White-Beach-in-Philippines-that-is-a-picture-perfect-white-sand-beach1.jpg',
      imgAlt: 'Paella dish',
      mainText:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
      title: 'Shrimp and Chorizo Paella',
      postDate: 'September 14, 2016',
      imageSrc:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2016/12/shutterstock_171061349-View-of-the-White-Beach-in-Philippines-that-is-a-picture-perfect-white-sand-beach1.jpg',
      imgAlt: 'Paella dish',
      mainText:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
      title: 'Shrimp and Chorizo Paella',
      postDate: 'September 14, 2016',
      imageSrc:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2016/12/shutterstock_171061349-View-of-the-White-Beach-in-Philippines-that-is-a-picture-perfect-white-sand-beach1.jpg',
      imgAlt: 'Paella dish',
      mainText:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
      title: 'Shrimp and Chorizo Paella',
      postDate: 'September 14, 2016',
      imageSrc:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2016/12/shutterstock_171061349-View-of-the-White-Beach-in-Philippines-that-is-a-picture-perfect-white-sand-beach1.jpg',
      imgAlt: 'Paella dish',
      mainText:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
  ];

  return (
    <Box flex={4} p={2}>
      {postContent.map(post => (
        <Post
          title={post.title}
          postDate={post.postDate}
          imageSrc={post.imageSrc}
          imgAlt={post.imgAlt}
          mainText={post.mainText}
        />
      ))}
    </Box>
  );
};

export default Feed;
