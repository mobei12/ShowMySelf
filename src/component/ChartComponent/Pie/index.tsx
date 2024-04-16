import React, { PureComponent, createRef } from 'react'
import echarts, { ECOption, renderer, theme } from '../bashConfig';

export type TProps = {
	data: {
		name: string
		value: number
	}[]
}

const option: ECOption = {
	tooltip: { trigger: 'item' },
	legend: {
		top: '5%',
		left: 'center',
	},
	series: [
		{
			name: 'Access From',
			type: 'pie',
			radius: ['40%', '70%'],
			avoidLabelOverlap: false,
			itemStyle: {
				borderRadius: 10,
				borderColor: '#fff',
				borderWidth: 2
			},
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					show: true,
					fontSize: 40,
					fontWeight: 'bold'
				}
			},
			labelLine: { show: false },
			data: [
				{ value: 1048, name: 'Search Engine' },
				{ value: 735, name: 'Direct' },
				{ value: 580, name: 'Email' },
				{ value: 484, name: 'Union Ads' },
				{ value: 300, name: 'Video Ads' }
			]
		}
	]
};
export default class Pie extends PureComponent {
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

	componentDidMount(): void {
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
