import React from "react";
import './BlogAcc.css';

function BlogAcc({ blog }) {
    
    return(
      <div className="blogAcc_wrapper">
          <div className="acc_name">
              <div className="acc_name_txt" style={{backgroundImage: `url(${blog.blogAvatar})`, backgroundSize: "cover"}}>

              </div>
              <div className="acc_time">
                  <p className="akk_name">Admin</p>
                  <p className="akk_date">{blog.dateMonth} {blog.dateMonthNumber} ․ {blog.blogRead} мин чтения</p>
              </div>
          </div>
          <div className="blogItem_more">
              <span className="blogItem_p">.</span>
              <span className="blogItem_p">.</span>
              <span className="blogItem_p">.</span>
          </div>
      </div>
    );
}

export default BlogAcc;