import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Books from "./Books/Books";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

function App() {

    const [portfolio, setPortfolio] = useState([
        {
            id: 1,
            PortfolioText: 'ЭДИТОРИАЛ',
            portfolioImg: 'https://i2.wp.com/www.eatthis.com/wp-content/uploads/2020/06/seafood.jpg?fit=1200%2C879&ssl=1'
        },
        {
            id: 2,
            PortfolioText: 'СЕРВИРОВКА',
            portfolioImg: 'https://free4kwallpapers.com/uploads/originals/2017/04/09/pizza-in-4k-wallpaper.jpg'
        },
        {
            id: 3,
            PortfolioText: 'ВЫПЕЧКА',
            portfolioImg: 'https://www.wallpaperflare.com/static/947/355/653/fish-herbs-delicious-dish-wallpaper.jpg'
        }
    ]);

    let booksItem = [
        {
            id: 1,
            bookImg: 'https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.webp',
            bookName: 'ЗАВТРАКИ',
            bookText: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.',
            bookPrice: 400
        },
        {
            id: 2,
            bookImg: 'https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.webp',
            bookName: 'САХАР И СПЕЦИИ',
            bookText: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.',
            bookPrice: 350
        },
        {
            id: 3,
            bookImg: 'https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.webp',
            bookName: 'БЛЮДА ЛЕТНОГО СЕЗОНА',
            bookText: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт.',
            bookPrice: 200
        }
    ]


    const [blog, setBlog] = useState([
        {
            id: 1,
            likeCount: 1,
            blogImg: 'https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/495dbf5ead054840a9b405f5b8e55af3.webp',
            blogAvatar: 'https://lh3.googleusercontent.com/proxy/_1I3Rtuc4E-LxTV1qCp_rZEd-6p3-XJyNY2Ujdi8rBN21CoGNBKw9c4b1O_ipeRGjx2GG8Q3oydMN8SbidaOHJZhE-dgWN_hQ-QeLjZgnfEh5wRA0GP3yw',
            blogAvtor: 'Admin',
            dateMonth: 'Авг',
            dateMonthNumber: 3,
            blogRead: 1,
            blogHeader: 'Праздничные Блюда',
            blogSaw: 21,
            liked: false
        },
        {
            id: 2,
            likeCount: 5,
            blogImg: 'https://static.wixstatic.com/media/cd1da2d221ec4d71af4e3ed305010c7c.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/cd1da2d221ec4d71af4e3ed305010c7c.webp',
            blogAvatar: 'https://happyfacesparty.com/wp-content/uploads/2019/06/avataaars-Brittany.png',
            blogAvtor: 'User2',
            dateMonth: 'Авг',
            dateMonthNumber: 3,
            blogRead: 15,
            blogHeader: 'Простой фон для съемок еды',
            blogSaw: 8,
            liked: false
        },
        {
            id: 3,
            likeCount: 0,
            blogImg: 'https://static.wixstatic.com/media/ce9814ce9f304fd6a9ae1bb862863c81.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/ce9814ce9f304fd6a9ae1bb862863c81.webp',
            blogAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmudcTPrgIt0Ky5rF5ZIEDCnRRG6ubzBSTLA&usqp=CAU',
            blogAvtor: 'User3',
            dateMonth: 'Авг',
            dateMonthNumber: 3,
            blogRead: 30,
            blogHeader: 'До первой капли',
            blogSaw: 9,
            liked: false
        },
        {
            id: 4,
            likeCount: 1,
            blogImg: 'https://static.wixstatic.com/media/57a7b875930547cdb003bc37b6713574.jpg/v1/fill/w_740,h_490,al_c,q_90,usm_0.66_1.00_0.01/57a7b875930547cdb003bc37b6713574.webp',
            blogAvatar: 'https://pbs.twimg.com/media/DOoC4oZWkAA4GgC.png',
            blogAvtor: 'User4',
            dateMonth: 'Авг',
            dateMonthNumber: 3,
            blogRead: 32,
            blogHeader: 'Модные коктейли',
            blogSaw: 4,
            liked: false
        },
        {
            id: 5,
            likeCount: 9,
            blogImg: 'https://static.wixstatic.com/media/9e01dfb9a15749e482e69dbc82886703.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/9e01dfb9a15749e482e69dbc82886703.webp',
            blogAvatar: 'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png',
            blogAvtor: 'User5',
            dateMonth: 'Авг',
            dateMonthNumber: 3,
            blogRead: 41,
            blogHeader: 'Секреты карамели',
            blogSaw: 5,
            liked: false
        },
        {
            id: 6,
            likeCount: 3,
            blogImg: 'https://static.wixstatic.com/media/c4f7ff68441b408eb753f40e1ba38756.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/c4f7ff68441b408eb753f40e1ba38756.webp',
            blogAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM3zqm7FMnvCNhyeWHEAqvP8POv4ByxBE1iQ&usqp=CAU',
            blogAvtor: 'User6',
            dateMonth: 'Авг',
            dateMonthNumber: 3,
            blogRead: 58,
            blogHeader: 'Накормить глаза',
            blogSaw: 6,
            liked: false
        }
    ])

    function like(id) {
        setBlog(
            blog.map(bl => {
                if (bl.id === id) {
                    bl.liked = !bl.liked
                    if (bl.liked) {
                        bl.likeCount++
                    } else {
                        bl.likeCount--
                    }
                }
                return bl
            })
        )
    }

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Route path="/Home" render={() => <Home/>}/>
                <Route path="/Portfolio" render={() => <Portfolio portfolioState={portfolio}/>}/>
                <Route path="/About" render={() => <About/>}/>
                <Route path="/Books" render={() => <Books booksItem={booksItem}/>}/>
                <Route path="/Blog" render={() => <Blog blog={blog} like={like}/>}/>
                <Route path="/Contact" render={() => <Contact/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
