import styles from './cart.module.css';
import { removeFromCart } from '../../ultils/action';
import coupons from '../courses/components/couponData';
import imgPreviewCourseCart from '../../assets/images/imgPreviewCourseCart.png';
import imgSad from '../../assets/images/imgSad.png';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.png';
import iconArrowRight from '../../assets/icons/iconArrowRight.png';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import imgCongratulation from '../../assets/images/imgCongratulation.png';

function Cart() {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const [discountCode, setDiscountCode] = useState('');
    const [discountPrice, setDiscountPrice] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    const totalPrice = cart.reduce((total, course) => {
        return total + course.price;
    }, 0);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(cart.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleRemoveFromCart = (course) => {
        dispatch(removeFromCart(course));

        if (currentItems.length === 1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleDiscountCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const calculateDiscountPrice = (discountCode, totalPrice) => {
        const coupon = coupons.find((coupon) => coupon.code === discountCode);

        if (coupon) {
            const discountPrice = coupon.discountPrice;

            return totalPrice - discountPrice;
        }
        return totalPrice;
    };

    const handleApplyDiscountCode = () => {
        if (discountCode) {
            const discountPrice = calculateDiscountPrice(discountCode, totalPrice);
            const amount = totalPrice - discountPrice;

            setDiscountPrice(discountPrice);
            setDiscountAmount(amount);
            setIsDiscountApplied(true);
        } else {
            setDiscountAmount(0);
            setIsDiscountApplied(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <p className={styles.title_shopping_cart}>Shopping Cart</p>
                {cart.length === 0 ? (
                    <div className={styles.cart_no_course}>
                        <img src={imgSad} alt="img_sad" className={styles.img_sad} />
                        <p className={styles.text_no_course}>Your cart is empty. Keep Going to find a course!</p>
                        <Link to={'/courses'} className={styles.link_to_courses}>
                            <button className={styles.button_course}>Go to Courses</button>
                        </Link>
                    </div>
                ) : (
                    <div className={styles.shopping_cart}>
                        <div className={styles.cart}>
                            <p className={styles.title}>Your Cart</p>
                            {currentItems.map((item) => (
                                <div className={styles.content_cart}>
                                    <div className={styles.wrapper_item_cart} key={item.id}>
                                        <div className={styles.item_cart}>
                                            <div className={styles.info_item_cart}>
                                                <img
                                                    src={imgPreviewCourseCart}
                                                    alt="img_preview_course_cart"
                                                    className={styles.img_preview_course_cart}
                                                />
                                                <div className={styles.wrapper_name_and_price}>
                                                    <div className={styles.wrapper_name_and_filter}>
                                                        <div className={styles.box_info_item_cart}>
                                                            <p className={styles.name_course}>{item.name}</p>
                                                            <div className={styles.filter_course}>
                                                                <div className={styles.filter}>
                                                                    <p className={styles.text_filter}>{item.level}</p>
                                                                </div>
                                                                <div className={styles.filter}>
                                                                    <p className={styles.text_filter}>{item.skill}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.container_item_cart}>
                                                        <div className={styles.wrapper_price_and_remove}>
                                                            <div className={styles.price_course}>
                                                                <p className={styles.new_price}>${item.price}</p>
                                                                <p className={styles.old_price}>$84.99</p>
                                                            </div>
                                                            <p
                                                                className={styles.remove_course}
                                                                onClick={() => handleRemoveFromCart(item)}
                                                            >
                                                                Remove
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.line_item}></div>
                                </div>
                            ))}
                            {totalPages > 1 && (
                                <div className={styles.pagination}>
                                    {currentPage > 1 && (
                                        <div className={styles.arrow_back} onClick={handlePreviousPage}>
                                            <img src={iconArrowLeft} alt="icon_arrow_left" />
                                        </div>
                                    )}
                                    {Array.from(Array(totalPages), (e, i) => {
                                        const pageNumber = i + 1;
                                        return (
                                            <div
                                                className={`${styles.page} ${
                                                    pageNumber === currentPage && styles.active
                                                }`}
                                                key={pageNumber}
                                                onClick={() => handlePageChange(pageNumber)}
                                            >
                                                {pageNumber}
                                            </div>
                                        );
                                    })}
                                    {currentPage < totalPages && (
                                        <div className={styles.arrow_back} onClick={handleNextPage}>
                                            <img src={iconArrowRight} alt="icon_arrow_right" />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={styles.wrapper_coupon_discount}>
                            <div className={styles.coupon}>
                                <p className={styles.title}>Coupon Discount</p>
                                <div className={styles.input_filled}>
                                    <div className={styles.form_coupon}>
                                        <div className={styles.label_input_coupon}>
                                            <p className={styles.label_coupon}>Couple Code</p>
                                        </div>
                                        <div className={styles.wrapper_input_coupon}>
                                            <input
                                                type="text"
                                                className={styles.input_coupon}
                                                placeholder="Example"
                                                value={discountCode}
                                                onChange={handleDiscountCodeChange}
                                            />
                                        </div>
                                    </div>
                                    <button className={styles.button_apply} onClick={handleApplyDiscountCode}>
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <div className={styles.original_price}>
                                    <p className={styles.text_discount}>Orginal Price</p>
                                    <p className={styles.price_discount}>${totalPrice}</p>
                                </div>
                                <div className={styles.original_price}>
                                    <p className={styles.text_discount}>Discount</p>
                                    <p className={styles.price_discount}>-${discountAmount}</p>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.original_price}>
                                    <p className={styles.text_discount}>Total</p>
                                    <p className={styles.price_result}>
                                        ${isDiscountApplied ? discountPrice : totalPrice}
                                    </p>
                                </div>
                                <button className={styles.check_out}>Check Out</button>
                            </div>
                        </div>
                    </div>
                )}
                {/* <img src={imgCongratulation} alt="img_congratulation" className={styles.img_congratulation} />
                    <div className={styles.text_successful}>
                        <p className={styles.successful}>Your Payment is Successful</p>
                        <p className={styles.getting}>Let’s Getting into Your Course</p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button_my_course}>My Coureses</button>
                        <button className={styles.button_back_to_home}>Back to Home</button>
                    </div> */}
            </div>
        </div>
    );
}

export default Cart;
