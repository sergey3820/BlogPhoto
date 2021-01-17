import React, {useState} from "react";
import "./BlogAccFooter.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function BlogAccFooter({blog, like}) {
    const classes = [];
    if (blog.liked) {
        classes.push('done');
    }
    return (
        <div className="blogfooter_wrapper">
            <hr className="blogFooter_line"/>
            <div className="blogFooter_contain">
                <div className="blogFooter_saw">
                    <p className="blog_saw">Просмотров: {blog.blogSaw}</p>
                    <p className="blogFooter_comment_txt">Комментировать</p>
                </div>
                <div className="like_wrapper">
                    <p>{blog.likeCount}</p>
                    <img
                        onClick={() => like(blog.id)}
                        src="https://img.icons8.com/fluent-systems-regular/24/000000/like.png"
                        className={classes.join('')}
                    />
                </div>
            </div>
        </div>
    );
}

export default BlogAccFooter;