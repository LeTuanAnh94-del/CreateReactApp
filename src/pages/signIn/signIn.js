// import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './signIn.module.css';
import useLogicSignIn from './useLogicSignIn';
import Logo from '../../components/logo';
import { InputField } from '../../components/inputField';

function SignIn() {
    const { formData, handleChange, handleLogin, isLoading } = useLogicSignIn();

    return (
        <div className={styles.sign_up}>
            <div className={styles.container}>
                <div className={styles.inner_container}>
                    <Logo />
                    <p className={styles.title}>Sign in to your account</p>
                    <div className={styles.form}>
                        <div className={styles.wrapper_inputs}>
                            <form>
                                <div className={styles.inputs}>
                                    <InputField
                                        label="Email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email.value}
                                        onChange={handleChange}
                                        error={formData.email.error}
                                    />
                                    <InputField
                                        label="Password"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Your Password"
                                        value={formData.password.value}
                                        onChange={handleChange}
                                        error={formData.password.error}
                                    />
                                </div>
                                <div className={styles.button}>
                                    <button
                                        onClick={handleLogin}
                                        type="button"
                                        className={styles.button_sign_in}
                                        disabled={isLoading}
                                    >
                                        Sign in {isLoading ? <div className={styles.loader}></div> : ''}
                                    </button>
                                    <p className={styles.text}>
                                        <b>Forgot Password</b>
                                    </p>
                                    <p className={styles.text}>
                                        Donn't have an account? {String.fromCharCode(160)} <b>Sign up</b>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default SignIn;
