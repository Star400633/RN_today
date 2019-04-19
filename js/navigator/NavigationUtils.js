/**
 * 全局导航 工具类
 */
export default class NavigationUtils {
    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的路由名
     */
    static goPage(page, params) {
        const navigation = NavigationUtils.navigation
        
        if(!navigation) {
            console.log('NavigationUtils.navigation can not be null')
            return
        }
        
        navigation.navigate(
            page, {
                ...params,
            }
        )
    }
    /**
     * 返回上一页
     * @param navigation
     */
    static goBack(navigation) {
        navigation.goBack()
    }
    
    /**
     * 重置到首页
     * @param params
     */
    static resetToHomePage(params) {
        const { navigation } = params
        navigation.navigate('Main')
    }
}
