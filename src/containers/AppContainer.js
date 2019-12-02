import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ChatList from '../components/ChatList';
import MessageForm from '../components/MessageForm';
import '../styles/globalStyles.css';

import ChatHeader from '../components/ChatHeader';
import ChatListHeader from '../components/ChatListHeader';
import ProfileHeader from '../components/ProfileHeader';
import Profile from '../components/Profile';

export default class AppContainer extends React.Component {
	
	render() {
		return (
			<div className="main-window">
				<Router>
					<Switch>
						<Route path="/profile">
							<ProfileHeader />
							<Profile />
						</Route>
						<Route path="/chat_id=:chatId">
							<ChatHeader />
							<MessageForm />
						</Route>
						<Route exact path="/">
							<ChatListHeader />
							<ChatList />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
