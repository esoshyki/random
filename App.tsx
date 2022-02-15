
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { select } from './store/select';
import { AppStages } from './store/view/view.types';
import Intro from './screens/Intro/Intro';
import { Fragment } from 'react';
import Login from './screens/Login/Login';
import Items from './screens/Items';

export default function App() {

	const Content = () => {
		const stage = useSelector(select.view.stage);

		console.log(stage);
		
		return (
			<Fragment>
				{stage === AppStages.Intro && <Intro />}
				{stage === AppStages.Login && <Login />}
				{stage === AppStages.Items && <Items />}
			</Fragment>
			)

	};

	return (
		<Provider store={store}>
			<Content />
		</Provider>
	);
}


