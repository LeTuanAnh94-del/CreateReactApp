import styles from './inputField.module.css';

export const InputField = (props) => {
    const { label, type, id, name, placeholder, value, onChange, error } = props;
    return (
        <div className={styles.box_input}>
            <label htmlFor="username" className={styles.label}>
                <p className={styles.text}>{label}</p>
            </label>
            <div className={styles.input}>
                <input
                    className={styles.fullname}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {error && <p className={styles.input_error}>{error}</p>}
            </div>
        </div>
    );
};

export const CheckField = (props) => {
    const { checked, type, id, name, onChange } = props;

    return (
        <div className={styles.check}>
            <input type={type} id={id} name={name} checked={checked} onChange={onChange} className={styles.checkbox} />
            <label htmlFor="checkbox" className={styles.label_checkbox}>
                <div className={styles.row}>
                    <p>I accept Levion's</p>
                    <b >
                        {String.fromCharCode(160)}Terms of Service{String.fromCharCode(160)}
                    </b>
                </div>
                <div className={styles.row}>
                    <p>and</p>
                    <b>{String.fromCharCode(160)}Privacy Policy.</b>
                </div>
            </label>
        </div>
    );
};
