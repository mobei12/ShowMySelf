import { useEffect, useState } from 'react';

type TProps = {
	info: string
}
const PrintInfo = ({ info }: TProps) => {
	const [displayText, setDisplayText] = useState('');
	useEffect(() => {
		let currentIndex = 0;
		let animationFrameId: number | null = null;
		const printStr = () => {
			if (currentIndex < info.length) {
				setDisplayText(info.substr(0, currentIndex + 1));
				currentIndex += 1;
				animationFrameId = requestAnimationFrame(printStr);
			} else {
				cancelAnimationFrame(animationFrameId as number);
			}
		};
		animationFrameId = requestAnimationFrame(printStr);
		printStr();
		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		}
	}, [info]);
	return (
		<span >{displayText}</span>
	)
}
const Welcome = () => {
	return <div className="text-center  flex items-center justify-center   h-1/2 xl:font-bold mm:text-3xl xl:text-8xl"><PrintInfo info='欢迎' /></div>;
};
export default Welcome;
