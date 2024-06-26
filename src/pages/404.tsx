import { FC } from 'react';
import { Link} from 'react-router-dom';

const NoFoundPage: FC = () => {
	return (
		<div className="text-center  pt-20 space-y-20">
			<div className="mm:text-4xl font-bold xl:text-8xl">404</div>
			<div
				className=" bg-sky-500 w-20  p-1 mx-auto rounded-md cursor-pointer hover:bg-sky-700 text-gray-50"
			>
				<Link to="/home">Home</Link>
			</div>
			<div className="mm:text-xl xl:text-5xl">这里什么 都没有</div>
			<div className="font-semibold mt-20">design by @MOBEi</div>
		</div>
	);
};

export default NoFoundPage;
