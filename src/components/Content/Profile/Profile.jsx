import React from 'react';
import modClass from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {
	return (
		<div className={modClass.wrapper}>
			<ProfileInfo />
			<MyPosts
				postData={props.profilePage.postData}
				newMessage={props.profilePage.newMessage}
				dispatch={props.dispatch}
			/>
		</div>
	);
}

export default Profile;