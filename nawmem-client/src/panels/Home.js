import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderBack } from '@vkontakte/vkui'
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

console.log(window.location.search + 'asd')

const Home = ({ id}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack/>}> <h3 style={{textAlign: 'center'}}>Главная страница приложения</h3></PanelHeader>
		<h3 style={{textAlign: 'center'}}>Компонент {'<Home/>'}</h3>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired
};

export default Home;
