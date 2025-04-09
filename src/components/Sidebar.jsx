import styles from "./Sidebar.module.css"

import { PencilLine } from 'phosphor-react'
import Avatar from "./Avatar.jsx";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://private-user-images.githubusercontent.com/93049899/412163477-f227ff2a-7742-4a5a-90c4-5655660bf427.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQyMDQwMDcsIm5iZiI6MTc0NDIwMzcwNywicGF0aCI6Ii85MzA0OTg5OS80MTIxNjM0NzctZjIyN2ZmMmEtNzc0Mi00YTVhLTkwYzQtNTY1NTY2MGJmNDI3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA5VDEzMDE0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNhMTZlZGFiNTg3ZDM0MzY4ODM5OTVlZjAwZDQ5NzQwODYwNzc3MTdlNzZiYTc5NGU2NGMzOGZkZTgxOTdlMzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.VUECwxmDuTx6BA2PGagNPg3optFCQCTjremyMHTqxs4"
                alt="Banner"
            />

            <div className={styles.profile}>
                <Avatar src={"https://github.com/nahtanpng.png"} />
                <strong>Nathan Ferreira</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}