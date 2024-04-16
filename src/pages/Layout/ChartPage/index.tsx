import { FC } from 'react';
import './index.scss';
import {Line, Bar, Pie} from 'src/component/ChartComponent'

const PageTemplate: FC = () => {
	return (
		<div className="page min-h-screen w-full grid mm:grid-flow-row  mm:grid-cols-1 md:grid-flow-row  md:grid-cols-2  xl:grid-cols-4  xl:gap-8 ">
			<div className="mm:col-span-1   flex flex-col justify-between">
				<Line />
				<Bar />
				<Pie />
			</div>
			<div className="mm:col-span-1   md:col-end-5 flex flex-col justify-between">
				<Line />
				<Bar />
				<Pie />
			</div>
		</div>
	);
};
export default PageTemplate;
