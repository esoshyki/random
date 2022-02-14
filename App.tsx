
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { select } from './store/select';
import { AppStages } from './store/view/view.types';
import Intro from './screens/Intro/Intro';
import { Fragment } from 'react';

export default function App() {

	const Content = () => {
		const stage = useSelector(select.view.stage);
		
		return (
			<Fragment>
				{stage === AppStages.intro && <Intro />}
			</Fragment>
			)

	};

	return (
		<Provider store={store}>
			<Content />
		</Provider>
	);
}


