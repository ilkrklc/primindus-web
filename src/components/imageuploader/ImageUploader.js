import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import imageIcon from '../../assets/image-icon.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import './ImageUploader.css'
import axios from "axios";
import { baseUrl } from "../constants/BaseUrl";

const ImageUploader = () => {
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const number = queryParams.get('number');
        if (!number) {
            getInitialCreds()
        }
        else {
            localStorage.setItem("number", JSON.stringify(number))
        }
    }, [])
    const [image, setImage] = useState()
    const [prevImage, setPrevImage] = useState(null)
    const [data, setData] = useState({})


    const getInitialCreds = async () => {
        try {
            const number = JSON.parse(localStorage.getItem('number'))
            const res = await axios.get(`${baseUrl}/api/v1/nurses/getnurse`, {
                params: {
                    number
                }
            })
            if (res.status === 200) {
                console.log(res.data.data, "hello friends")
                return setData(res.data.data)
            }
            return alert("fail")
        }
        catch (err) {
            console.log(err)
        }
    }

    const navigate = useNavigate();

    const imageHandler = (e) => {
        if (!e.target.files[0].type.startsWith("image")) {
            return alert("Please Upload Image")
        }
        setPrevImage(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])


    };
    const handleProceed = async (e) => {
        e.preventDefault();
        const number = JSON.parse(localStorage.getItem('number'))

        console.log(number, "number from local storage")
        var formData = new FormData();
        formData.append("image_upload", image);

        if (!image && !data.profilePhoto) {
            return alert("You Must Upload Image First")
        }
        try {
            if (!image) {
                const res = await axios.patch(`${baseUrl}/api/v1/nurses/updatephoto`, { data: data.profilePhoto },
                    {
                        params: {
                            number
                        }
                    },
                    {
                        headers: {
                            'Content-Type': "application/json"
                        }
                    }

                )
                console.log(res, "i am response object")
                if (res.status === 200) {
                    navigate('/interests')
                    return
                }
                else {
                    alert("image Update failed")
                }
            }
            else {
                const res = await axios.patch(`${baseUrl}/api/v1/nurses/updatephoto`, formData,
                    {
                        params: {
                            number
                        }
                    },
                    {
                        headers: {
                            'Content-Type': "multipart/form-data"
                        }
                    }

                )
                console.log(res, "i am response object")
                if (res.status === 200) {
                    navigate('/interests')
                    return
                }
                else {
                    alert("image Update failed")
                }
            }

        }
        catch (err) {
            alert('image update failed')
        }
    }

    return (
        <>
            <div className="page">
                <div className="text-main">
                    <p>
                        <h1 style={{ textAlign: 'center', fontSize: '100%' }}>Earn at least 2000 EUR net with Primundus!</h1>
                        <strong>Dear nurse,</strong> thank you for accepting our invitation.
                        You have been selected based on your experience and performance
                        to receive the opportunity to participate in our new product Primundus
                        and earn up to 2000 EUR per month. </p>
                </div>
                <div className="upload-image-main">
                    <div>
                        <div className="image-container">
                            <div className="container">
                                <h1 className="heading">Add your Image</h1>
                                <div className={`${!prevImage && !data.profilePhoto ? 'prev-none' : 'img-holder'}`}>
                                    <img src={!image ? `${baseUrl + data.profilePhoto}` : prevImage} alt="" id="img" className="img" />
                                </div>
                                <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                                <div className="label">
                                    <label className="image-upload" htmlFor="input">
                                        <FiUpload className="FiUpload" />
                                        <p>Choose your Photo</p>
                                    </label>
                                </div>
                            </div>
                            <div className="form-icons">

                                <button onClick={handleProceed} className="form-link">Proceed <FaArrowAltCircleRight className="icon-self" /> </button>

                            </div>
                        </div>
                    </div>

                    <div className="video-main-container">
                        <h2>How to take a proper photo</h2>
                        <div>
                            <iframe
                                className="iframe"
                                src={`https://www.youtube.com/embed/HZf0LP_2YKs`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </div>


                </div>


            </div>
        </>

    )

}
export default ImageUploader