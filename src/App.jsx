import './global.css'
import Post from "./Post.jsx";
import Header from "./components/Header.jsx";

export default function App() {
    return (
        <div>
            <Header />
            <Post author={"Nathan"} content={"eae"}/>
        </div>
    )
}