import config from '../config';

import signIn from '../pages/signIn';
import signUp from '../pages/signUp';
import congratulation from '../pages/congratulation';
import AboutUs from '../pages/about us/aboutUs';
import home from '../pages/home/home';
import Courses from '../pages/courses/courses';
import Profile from '../pages/profile/profile';
import Cart from '../pages/cart/cart';
import CourseDetail from '../pages/courses/courseDetail';
import CoursePage from '../pages/course-page/course-page';
import LearningCourse from '../pages/learning_course/learningCourse';
import Blog from '../pages/learning_course/blog/blog';
import BlogDetail from '../pages/learning_course/blog/blog-detail/blogDetail';
import PostCast from '../pages/learning_course/post_cast/postCast';
import SocialNetwork from '../pages/learning_course/social-network/socialNetwork';
import Community from '../pages/learning_course/community/community';

const publicRoutes = [
    { path: config.routes.sign_in, component: signIn, layout: null },
    { path: config.routes.sign_up, component: signUp, layout: null },
    { path: config.routes.congratulation, component: congratulation, layout: null },
    { path: config.routes.home, component: home },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.courses, component: Courses },
    { path: config.routes.course_detail, component: CourseDetail },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.course_page, component: CoursePage, layout: null },
    { path: config.routes.learning_course, component: LearningCourse },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blog_detail, component: BlogDetail },
    { path: config.routes.post_cast, component: PostCast },
    { path: config.routes.social_network, component: SocialNetwork },
    { path: config.routes.community, component: Community },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
