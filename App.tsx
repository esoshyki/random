
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { select } from './store/select';
import { AppStages } from './store/view/view.types';
import Intro from './screens/Intro/Intro';
import { Fragment } from 'react';
import Login from './screens/Login/Login';
import Items from './screens/Items';
import Layout from './components/Layout';
import Wheel from './screens/Wheel';

export default function App() {

	const Content = () => {
		const stage = useSelector(select.view.stage);

		const getContent = () => {
			switch(stage) {
				case AppStages.Intro:
					return <Intro />
				case AppStages.Login:
					return <Login />
				case AppStages.Items:
					return <Items />
				case AppStages.Wheel:
					return <Wheel />
				default: 
					return null;
			}
		}
		
		return (
			<Layout>
				{getContent()}
			</Layout>
			)

	};

	return (
		<Provider store={store}>
			<Content />
		</Provider>
	);
}


