import styles from './styles.module.css'

type ContainerProps = {
    children: React.ReactNode
}

export function Container({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}