import React, { useEffect, useContext } from 'react'
import { ProfileContext } from './Profile'

function LatestA({currentUser}) {
    const { latestAvatar, setLatestAvatar} = useContext(ProfileContext);

    useEffect(() => {
        fetch(`/users/${currentUser.id}`)
        .then((r) => r.json())
        .then((data) => {
            setLatestAvatar(data.avatar_url)
        })
        .catch((error) => console.error(error))
    },[latestAvatar])

  return (
    <div>
        <img src={latestAvatar} alt="latest avatar" className='latest-avatar' />
    </div>
    
  )
}

export default LatestA