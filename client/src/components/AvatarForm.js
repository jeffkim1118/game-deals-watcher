import React, { useContext } from 'react'
import { ProfileContext } from './Profile'

function AvatarForm({currentUser}) {
    const { latestAvatar, setLatestAvatar} = useContext(ProfileContext)

    function handleSubmit(event){
        event.preventDefault();
        // const data = new FormData();
        let data = event.target.avatar.files[0]
        // data.append("user[avatar]", event.target.avatar.files[0]);
        submitToAPI(data)
    }

    function submitToAPI(data){
        fetch(`/users/${currentUser.id}/avatar`, {
            method: "POST",
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            setLatestAvatar(data.avatar_url);
        })
        .catch((error) => console.error(error))
    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='avatar'>Avatar</label>
            <input type="file" name="avatar" id="avatar" />
            <button type='submit'>Upload</button>
        </form>
    </div>
  )
}

export default AvatarForm