import React from "react";
import IMAGES from '../images/Image';

export default function ProfilePicture({currentUser}){
    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon"
      ];
   
      function handleSubmit(e){
        e.preventDefault();
        let file = e.target.uploadFile.files[0]

        let formData = new FormData()
        formData.append('file', file)

        fetch(`/users/${currentUser.id}` ,{
            method: "POST",
            body: formData
        })
        .then((r) => r.json())
        .then(data => {
            if (data.errors) {
                alert(data.errors)
             }
             else {
                console.log(data)
             }
        })
      }

    return(
        <div> 
            <img src={IMAGES.defaultProfile} alt="default_profile_image" className="profile_avatar"/>       
            <form onSubmit={handleSubmit}>
                <input type="file" id="avatar" name="avatar" accept={fileTypes}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}