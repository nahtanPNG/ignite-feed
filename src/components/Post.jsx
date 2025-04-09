import styles from './Post.module.css'

export default function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/nahtanpng.png" alt="Avatar"/>
                    <div className={styles.authorInfo}>
                        <strong>Nathan Ferreira</strong>
                        <span>FullStack Developer</span>
                    </div>
                </div>

                <time title="09 de Abril às 11:22h" dateTime="2025-04-09 11:22:55">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
                    Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '} <a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}