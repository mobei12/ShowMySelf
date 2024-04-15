import { ExtendedRouteObject } from 'src/router/type';
import { cacheUserInfo } from 'src/utils';
import { Navigate } from 'react-router-dom';

export default function routesWithGuard(routConfig: ExtendedRouteObject[]): ExtendedRouteObject[] {
	const isLogin = !!cacheUserInfo();
	return routConfig.map((item) => {
		if (!isLogin && item.needAuth && item.path === '/home') {
			return {
				...item,
				element: <Navigate to="/user/login" />,
			};
		}
		return item;
	});
}
