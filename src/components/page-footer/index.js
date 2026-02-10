import React from 'react';
import './style.scss';

function PageFooter({ author, homepageUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={homepageUrl}>{author}</a>
        <span style={{ color: '#ccc' }}>
          &nbsp;powered by
          <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog" style={{ color: '#ccc' }}>
            &nbsp;zoomkoding-gatsby-blog
          </a>
        </span>
      </p>
    </footer>
  );
}

export default PageFooter;
