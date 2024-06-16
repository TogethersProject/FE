import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import '../styles/Be.css';
import Image from 'next/image';

const Be = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const reader = new FileReader();

        reader.onloadend = () => {
            const photoUrl = reader.result as string;
            const newMentor = { name, email, bio, photo: photoUrl };

            let savedData = JSON.parse(localStorage.getItem('mentors') || '[]');
            if (!Array.isArray(savedData)) {
                savedData = [];
            }
            savedData.push(newMentor);
            localStorage.setItem('mentors', JSON.stringify(savedData));

            setShowModal(true);
            setTimeout(() => {
                router.push('/Find');
            }, 1000);
        };

        if (photo) {
            reader.readAsDataURL(photo);
        } else {
            const newMentor = { name, email, bio, photo: null };

            let savedData = JSON.parse(localStorage.getItem('mentors') || '[]');
            if (!Array.isArray(savedData)) {
                savedData = [];
            }
            savedData.push(newMentor);
            localStorage.setItem('mentors', JSON.stringify(savedData));

            setShowModal(true);
            setTimeout(() => {
                router.push('/Find');
            }, 1000);
        }
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleGoBack = () => {
        router.push('/Mentor');
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
        setSidebarOpen(true); // = 버튼 클릭 시 사이드바 열기
    };

    const handleSidebarLinkClick = (path: string) => {
        setSidebarOpen(false); // 사이드바 링크 클릭 시 닫기
        router.push(path);
    };

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="container">
            <div className={`main-screen ${isSidebarOpen ? 'sidebar-open' : ''}`}
                 onClick={isSidebarOpen ? handleOutsideClick : undefined}>
                <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} ref={sidebarRef}>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Search')}>Search</div>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Login')}>Login</div>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/My')}>My</div>
                    <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Chat')}>ChatBot</div>
                </div>
                <div className="header">
                    <Image src="/images/image-23.png" alt="search" width={40} height={40}/>
                    <div className="center-image-container" onClick={handleFirstImageClick}
                         style={{cursor: 'pointer'}}>
                        <Image className="center-image" src="/images/first.png" alt="투게더!" width={120} height={45}/>
                    </div>
                    <Image src="/images/alert.png" alt="alert" className="alert-icon" width={50} height={50}/>
                </div>
                <main className="activitiesContainer">
                    <h1 className="title">멘토 등록</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label className="label" htmlFor="name">이름:</label>
                            <input
                                className="input"
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="email">이메일:</label>
                            <input
                                className="input"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label className="label" htmlFor="bio">소개:</label>
                            <textarea
                                className="textarea"
                                id="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                required
                            ></textarea>
                        </div>
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
        </div>
    );
};

export default Be;
