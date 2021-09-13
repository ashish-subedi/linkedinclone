import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
				<Avatar />
				<h2>Fernando Torres</h2>
				<h4>elnino9@gmail.com</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you ?</p>
					<p className="sidebar__statNumber">2,345</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on Post</p>
					<p className="sidebar__statNumber">34587</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recents</p>
			</div>
		</div>
	);
}

export default Sidebar;
