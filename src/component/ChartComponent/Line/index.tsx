import React, { PureComponent, createRef } from 'react'
import echarts, { renderer, theme, ECOption } from '../bashConfig';

export type TProps = {
	data: {
		name: string
		value: number
	}[]
}

const option: ECOption = {
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: { type: 'value' },
	series: [
		{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: 'line',
			areaStyle: {}
		}
	]
};
export default class Line extends PureComponent {
	domRef = createRef<HTMLDivElement>();

	chart: echarts.ECharts | null = null

	state: {
		xName: string[]
		yName: string[]
	}

	constructor(props: TProps) {
		super(props)
		this.state = {
			xName: [],
			yName: []
		}
	}

	componentDidMount() {
		this.renderChart()
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		if (this.chart) {
			this.chart.dispose();
			this.chart = null;
		}
	}

	handleResize = () => {
		if (this.chart) {
			this.chart.resize();
		}
	}

	renderChart() {
		const context = this.domRef.current;
		if (context) {
			this.chart = echarts.init(context, theme, { renderer });
			this.chart.setOption(option);
		}
	}

	render() {
		return (
			<div className='mm:w-full,mm:min-h-1/3 min-w-30 min-h-20' ref={this.domRef} />
		)
	}
}
