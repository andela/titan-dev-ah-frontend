import React, { Component } from "react";
/* eslint global-require: "off" */
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import authorDefaultImage from "../../../assets/img/author.svg";
import thumbsUp from "../../../assets/img/thumb-up-outline.svg";
import thumbsDown from "../../../assets/img/thumb-down-outline.svg";
import commentIcon from "../../../assets/img/comment-multiple-outline.svg";
import bookmarkIcon from "../../../assets/img/bookmark.svg";
import {
  stringToHtmlElement,
  calculateTimeStamp
} from "../../../utils/helperFunctions";

class Latest extends Component {
  redirectToArticle = () => {
    const { article, history } = this.props;
    return history.push(`/articles/${article.slug}`);
  };

  render() {
    const { article } = this.props;
    const {
      title,
      body,
      readTime,
      createdAt,
      author,
      comments,
      description,
      likesCount
    } = article;
    const { firstName, lastName, image, username } = author;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div className="latest_article_content" onClick={this.redirectToArticle}>
        <div
          className="pic"
          style={{
            backgroundImage: `url(${stringToHtmlElement(body).firstImage})`
          }}
        />
        <div className="article_text">
          <div className="avatar-wrapper">
            <img
              src={image || authorDefaultImage}
              alt="Avatar"
              className="avatar"
            />
            <div className="name_minutes">
              <span className="author_name">
                {username && firstName && lastName
                  ? `${firstName} ${lastName}`
                  : username}
              </span>
              <br />
              <span className="date_read_time">
                {calculateTimeStamp(createdAt)}, {readTime}min read
              </span>
            </div>
          </div>
          <h3>{title}</h3>
          <div className="tex-content__body">{description}</div>
          <span className="cat">FILM</span>
          <div className="icons">
            <div className="left-icons">
              <img src={thumbsUp} alt="likes" className="likes" />
              <div className="numbers">{likesCount}</div>
              <img src={thumbsDown} alt="dislikes" className="dislikes" />
              <div className="numbers">3,844</div>
              <img src={commentIcon} alt="comments" className="comments" />
              <div className="numbers">{comments.length}</div>
            </div>
            <div className="right-icons">
              <img src={bookmarkIcon} alt="bookmark" className="bookmark" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Latest.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  article: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    readTime: PropTypes.number,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      image: PropTypes.string,
      username: PropTypes.string
    }),
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string,
          image: PropTypes.string,
          username: PropTypes.string
        }),
        body: PropTypes.string,
        like: PropTypes.number,
        id: PropTypes.string
      })
    ),
    likesCount: PropTypes.number
  }).isRequired
};

export default withRouter(Latest);
