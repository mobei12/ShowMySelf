/* eslint-disable import/no-extraneous-dependencies */
import * as echarts from 'echarts/core';
import {
	BarChart,
	LineChart,
	PieChart
} from 'echarts/charts';
import {
	TitleComponent,
	LegendComponent,
	TooltipComponent,
	GridComponent,
	// 数据集组件
	DatasetComponent,
	// 内置数据转换器组件 (filter, sort)
	TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
	// 系列类型的定义后缀都为 SeriesOption
	BarSeriesOption,
	LineSeriesOption,
	PieSeriesOption
} from 'echarts/charts';
import type {
	// 组件类型的定义后缀都为 ComponentOption
	TitleComponentOption,
	TooltipComponentOption,
	LegendComponentOption,
	GridComponentOption,
	DatasetComponentOption
} from 'echarts/components';
import type { ComposeOption, } from 'echarts/core';
import chalk from './theme/chalk.project.json'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
    | PieSeriesOption
    | BarSeriesOption
    | LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | LegendComponentOption
    | GridComponentOption
    | DatasetComponentOption
>;
export const renderer: 'svg'|'canvas' = 'svg';
export const theme: 'chalk'|'light' = 'chalk';
// 注册必须的组件
echarts.use([
	TitleComponent,
	LegendComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	BarChart,
	LineChart,
	PieChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer
]);

echarts.registerTheme('chalk', chalk.theme);
export default echarts
