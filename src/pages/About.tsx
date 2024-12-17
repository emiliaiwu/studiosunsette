
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
		<div className='bg-gray-900'>
			<Helmet>
				<title>About - Studio Basique</title>
				<meta
					name='description'
					content='Welcome to the home page of My Website!'
				/>
			</Helmet>
		</div>
	);
}

export default About