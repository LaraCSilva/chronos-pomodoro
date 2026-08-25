import styles from'./Container.module.css'

export function Container() {

    type ContainerProps = {
        children: React.ReactNode
    }
    return (
        <div className={styles.container}>{children}</div>  
    )
}