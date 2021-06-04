import React from 'react';
import ContentLoader from "react-content-loader"

function LoadingBlock() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="136" cy="136" r="136" />
			<rect x="0" y="291" rx="6" ry="6" width="280" height="36" />
			<rect x="0" y="343" rx="6" ry="6" width="280" height="62" />
			<rect x="0" y="423" rx="6" ry="6" width="102" height="27" />
			<rect x="130" y="415" rx="20" ry="20" width="150" height="40" />
		</ContentLoader>
	)
}

export default LoadingBlock
