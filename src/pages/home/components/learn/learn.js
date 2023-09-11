import styles from './learn.module.css';

// import imgTravel from '../../../../assets/images/imgTravel.svg';
// import imgWorkAndLife from '../../../../assets/images/imgWorkAndLife.svg';
// import imgCommunication from '../../../../assets/images/imgCommunication.svg';
// import imgHaveFun from '../../../../assets/images/imgHaveFun.svg';

function Learn() {
    return (
        <section className={styles.learn}>
            <div className={styles.content}>
                <p className={styles.title_content}>
                    Learn Vietnamese - one of the world’s most interesting and popular languages
                </p>
                <p className={styles.text_content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit sollicitudin eros nisl. Blandit
                    neque accumsan lectus id consectetur amet proin. Enim eros habitant euismod porta. Sodales sed cras
                    at aliquam commodo mattis pretium.
                </p>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    {/* <img src={imgTravel} alt="img" className={styles.img}/> */}
                    <p className={styles.title_icon}>Travel</p>
                </div>
                <div className={styles.icon}>
                    {/* <img src={imgWorkAndLife} alt="img" className={styles.img}/> */}
                    <p className={styles.title_icon}>Work anh Live</p>
                </div>
                <div className={styles.icon}>
                    {/* <img src={imgCommunication} alt="img" className={styles.img}/> */}
                    <p className={styles.title_icon}>Communication</p>
                </div>
                <div className={styles.icon}>
                    {/* <img src={imgHaveFun} alt="img" className={styles.img}/> */}
                    <p className={styles.title_icon}>Have Fun</p>
                </div>
            </div>
        </section>
    );
}

export default Learn;
