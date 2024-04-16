import React, { PureComponent, createRef } from 'react'
import echarts, { ECOption, renderer, theme } from '../bashConfig';

export type TProps = {
    data: {
        name: string
        value: number
    }[]
}

const option: ECOption = {
	xAxis: {
		type: 'category',
		data: ['A', 'B', 'C']
	},
	yAxis: { type: 'value' },
	series: [
		{
			data: [120, 200, 150],
			type: 'bar'
		}
	]
};
export default class Bar extends PureComponent {
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
		console.log('resize')
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
