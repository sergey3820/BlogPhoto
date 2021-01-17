import React, {useState} from "react";
import "./Blog.css";
import BlogItem from "./BlogItem/BlogItem";
import HomeFooter from "../Home/HomeFooter/HomeFooter";

function Blog(props) {

    return (
        <div className="blog_wrapper">
            <div className="blog_container">
                <div className="blog_search">
                    <a href="#" className="blog_all">All Posts</a>
                    <div className="search_place">
                        <img
                            src="data:image/png;base64,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"
                            alt="search_icon"
                            width="25px"
                            height="25px"
                        />
                        <input type="text" placeholder="Поиск"/>
                        <p className="close_input">X</p>
                    </div>
                </div>
                { props.blog.map((blogEl) => {
                    return <BlogItem blog={blogEl} key={blogEl.id} like={props.like} />
                }) }
            </div>
            <HomeFooter />
        </div>
    );
}

export default Blog;