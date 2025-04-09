import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

import './global.css'
import styles from './App.module.css'

export default function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post author={"Nathan"} content={"eae"}/>

                    <Post author={"Nathan"} content={"eae"}/>
                </main>
            </div>
        </div>
    )
}