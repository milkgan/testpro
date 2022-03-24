import loadingUrl from '@/assets/img/loading.svg'
import styles from './loading.module.less'

// 创建loading图标元素
function createLoadingImg() {
    console.log(styles.loading)
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

// 得到指定el中loading图标元素
function getLoadingImage(el) {
    return el.querySelector("img[data-role='loading']")
}


export default function(el, binding) {
    const curImg = getLoadingImage(el);
    // 根据binding.value中的值决定创建或删除img元素
    if(binding.value) {
        // 不存在loading图标则创建
        if(!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else {
        // 存在loading图标则移除
        if(curImg) {
            curImg.remove();
        }
    }
}
   