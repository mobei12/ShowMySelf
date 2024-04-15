import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';

const User: FC = () => {
	return (
		<div className="user-main ">
			<div className="user-container dark:bg-gray-700 bg-white rounded-xl px-4 py-6 pb-4 border-solid border-1 border-sky-500 m-auto shadow-md sm:w-2/5 xl:w-2/12">
				<div className="title font-bold text-xl text-center">{process.env.CUSTOMIZE_APP_TITLE}</div>
				<Outlet />
			</div>
		</div>
	);
};
export default User;
