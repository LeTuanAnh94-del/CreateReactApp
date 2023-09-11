import styles from './button.module.css';

function Button(props) {
    const { data, disabled, isLoading, isClicked } = props;

    return (
        <button className={data ? styles.buttonRegister : styles.muted} disabled={disabled || isLoading || isClicked}>
            Create Account
            {isLoading ? <div className={styles.loader}></div> : ''}
        </button>
    );
}

export default Button;
