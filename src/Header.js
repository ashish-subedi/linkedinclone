import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://image.flaticon.com/icons/png/512/174/174857.png"
					alt=""
				/>
				<div className="header__search">
					{/* Material Icon For Search  */}
					<SearchIcon className="search__logo" />
					<input type="text" />
				</div>
			</div>

			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption
					avatar="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png"
					title="Me"
				/>
			</div>
		</div>
	);
}

export default Header;
