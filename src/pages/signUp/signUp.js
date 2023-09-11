// import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './signUp.module.css';
import UseLogicSignUp from './useLogicSignUp';
import Logo from '../../components/logo';
import { CheckField, InputField } from '../../components/inputField';
import Button from '../../components/button/button';

function signUp() {
    const { formData, isLoading, handleChange, handleSubmit, isClicked } = UseLogicSignUp();

    return (
        <div className={styles.sign_up}>
            <div className={styles.container}>
                <div className={styles.inner_container}>
                    <Logo />
                    <p className={styles.title}>Sign in to your account</p>
                    <div className={styles.form}>
                        <div onSubmit={handleSubmit}>
                            <form>
                                <div className={styles.inputs}>
                                    <InputField
                                        label="Full Name"
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        placeholder="Your Name"
                                        value={formData.fullname.value}
                                        onChange={handleChange}
                                        error={formData.fullname.error}
                                    />
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
                                    <CheckField
                                        type="checkbox"
                                        id="agreeToTerms"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms.value}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.button}>
                                    <Button
                                        isClicked={isClicked}
                                        data={formData.agreeToTerms.value}
                                        disabled={!formData.agreeToTerms.value || isLoading || isClicked}
                                        isLoading={isLoading}
                                    />
                                    <p className={styles.text}>
                                        Already have an account?{String.fromCharCode(160)} <b>Sign in</b>
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

export default signUp;
