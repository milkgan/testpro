import Home from '@/views/Home';
import About from '@/views/About';
import Blog from '@/views/Blog';
import Message from '@/views/Message';
import Project from '@/views/Project';

// 路由规则
export default [
    {name: 'Home', path: '/', component: Home},
    {name: 'About', path: '/about', component: About},
    {name: 'Blog', path: '/blog/:id', component: Blog, props: {newsletterPopup: 456}},
    {name: 'Message', path: '/message', component: Message},
    {name: 'Project', path: '/Project', component: Project},
]

