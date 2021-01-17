import React from "react";
import "./BlogItem.css";
import BlogAcc from "./BlogAcc/BlogAcc";
import BlogAccFooter from "./BlogAcc/BlogAccFooter/BlogAccFooter";

function BlogItem({ blog, like }) {
    return (
        <div className="blogItem_container" style={{background: "#F0F3F6"}}>
            <div className="blogItem_img" style={{backgroundImage: `url(${blog.blogImg})`, backgroundSize: "cover"}}>

            </div>
            <div className="blogItem_about">
                <BlogAcc blog={blog}/>
                <p className="blog_1">{ blog.blogHeader }</p>
                <p className="blog_txt">Создайте подзаголовок поста: одно-два предложения, которые кратко передают
                    содержание поста и побуждают продолжить чтение. Это текст пост...</p>
                <BlogAccFooter blog={blog} like={like} />
            </div>
        </div>
    );
}

export default BlogItem;