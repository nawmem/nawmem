import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
// import Persik from './panels/Persik';

const App = () => {
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<View >
						<Home/>
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
		
	);
}

export default App;

