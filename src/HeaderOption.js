import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && (
				<Avatar
					className="headerOption__avatar"
					src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png"
					alt=""
				/>
			)}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
