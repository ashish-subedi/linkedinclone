import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';import ShareIcon from '@material-ui/icons/Share';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function Post({name,description,message,photoUrl}) {
    return (
        <div className="post">

            <div className="post__header">
                <Avatar src={photoUrl} />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" />

                <InputOptions  Icon={ChatOutlinedIcon} title="Comment"/>
                <InputOptions Icon={ShareOutlinedIcon} title="Share"/>
                <InputOptions  Icon={SendOutlinedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post
