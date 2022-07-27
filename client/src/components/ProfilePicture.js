import React from "react";
import IMAGES from '../images/Image';

export default function ProfilePicture(){
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
   
      function handleChange(){

      }

    return(
        <div>
            <img src={IMAGES.defaultProfile} alt="default_profile_image" className="profile_avatar"/>       
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleChange}/>
            <button>Upload</button>    
        </div>
    )
}