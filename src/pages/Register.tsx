import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import '../styles/Be.css';

const Be = () => {
    const [activityTitle, setActivityTitle] = useState('');
    const [activityDescription, setActivityDescription] = useState('');
    const [activityLocation, setActivityLocation] = useState('');
    const [activityOrganization, setActivityOrganization] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [showModal, setShowModal] = useState(false); // State for showing modal
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const reader = new FileReader();

        reader.onloadend = () => {
            const photoUrl = reader.result as string;
            const newActivity = {
                title: activityTitle,
                description: activityDescription,
                location: activityLocation,
                organization: activityOrganization,
                photo: photoUrl,
            };

            let savedData = JSON.parse(localStorage.getItem('activities') || '[]');
            if (!Array.isArray(savedData)) {
                savedData = [];
            }
            savedData.push(newActivity);
            localStorage.setItem('activities', JSON.stringify(savedData));

            setShowModal(true); // Show modal after registration
            setTimeout(() => {
                router.push('/FindVolunteer'); // Navigate to FindVolunteer after 1 second
            }, 1000);
        };

        if (photo) {
            reader.readAsDataURL(photo);
        }
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleFirstImageClick = () => {
        router.push('/First');
    };

    const handleHomeClick = () => {
        router.push('/First');
    };

    const handleProfileClick = () => {
        router.push('/Profile');
    };

    const handleSettingsClick = () => {
        setSidebarOpen(true);
    };

    const handleSidebarLinkClick = (path: string) => {
        setSidebarOpen(false);
        router.push(path);
    };

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="container">
            <div className={`main-screen ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={isSidebarOpen ? handleOutsideClick : undefined}>
                <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} ref={sidebarRef}>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Search')}>Search</div>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Login')}>Login</div>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Mypage')}>My</div>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Chat')}>ChatBot</div>
                </div>
                <div className="header">
                    <Image src="/images/image-23.png" alt="search" width={40} height={40}/>
                    <div className="center-image-container" onClick={handleFirstImageClick} style={{cursor: 'pointer'}}>
                        <Image className="center-image" src="/images/first.png" alt="투게더!" width={120} height={45}/>
                    </div>
                    <Image src="/images/alert.png" alt="alert" className="alert-icon" width={50} height={50}/>
                </div>
                <main className="activitiesContainer">
                    <h1 className="title"> 봉사 등록</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label className="label" htmlFor="photo">사진:</label>
                            <input
                                className="input"
                                type="file"
                                id="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="title">제목:</label>
                            <input
                                className="input"
                                type="text"
                                id="title"
                                value={activityTitle}
                                onChange={(e) => setActivityTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="description">글:</label>
                            <textarea
                                className="textarea"
                                id="description"
                                value={activityDescription}
                                onChange={(e) => setActivityDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="location">봉사 위치:</label>
                            <input
                                className="input"
                                type="text"
                                id="location"
                                value={activityLocation}
                                onChange={(e) => setActivityLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="organization">봉사 기관:</label>
                            <input
                                className="input"
                                type="text"
                                id="organization"
                                value={activityOrganization}
                                onChange={(e) => setActivityOrganization(e.target.value)}
                                required
                            />
                        </div>
                        <div className="buttonContainer">
                            <button className="button" type="submit">등록하기</button>
                        </div>
                    </form>
                </main>
                <footer className="footer">
                    <div className="footer-icon" onClick={handleSettingsClick}>=</div>
                    <div className="footer-icon" onClick={handleHomeClick}>🏠</div>
                    <div className="footer-icon" onClick={handleProfileClick}>👤</div>
                </footer>
            </div>

            {/* Modal for Registration Success */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>등록되었습니다!</h2>
                        <button onClick={() => setShowModal(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Be;
