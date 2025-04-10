import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

import './global.css'
import styles from './App.module.css'


const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https:github.com/nahtanpng.png",
            name: "Nathan Ferreira",
            role: "Full Stack Developer",
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2025-03-02 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: "https:github.com/cavator.png",
            name: "Gabriel Casa",
            role: "Full Stack Developer",
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2025-04-03 20:00:00')
    },
];

export default function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </div>
    )
}