import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Be.module.css';

const Be = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [photo, setPhoto] = useState<File | null>(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const reader = new FileReader();

        reader.onloadend = () => {
            const photoUrl = reader.result as string;
            const newMentor = { name, email, bio, photo: photoUrl };

            // Save to local storage
            const savedData = JSON.parse(localStorage.getItem('mentors') || '[]');
            savedData.push(newMentor);
            localStorage.setItem('mentors', JSON.stringify(savedData));

            // Show modal and redirect to First.tsx
            setShowModal(true);
            setTimeout(() => {
                router.push('/Find');
            }, 1000); // Adjust the duration as needed
        };

        if (photo) {
            reader.readAsDataURL(photo);
        } else {
            const newMentor = { name, email, bio, photo: null };
            const savedData = JSON.parse(localStorage.getItem('mentors') || '[]');
            savedData.push(newMentor);
            localStorage.setItem('mentors', JSON.stringify(savedData));

            // Show modal and redirect to First.tsx
            setShowModal(true);
            setTimeout(() => {
                router.push('/Find');
            }, 1000); // Adjust the duration as needed
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

    const handleHomeClick = () => {
        router.push('/First');
    };

    const handleProfileClick = () => {
        router.push('/Profile');
    };

    const handleSettingsClick = () => {
        router.push('/Menu');
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainScreen}>
                <h1 className={styles.title}>멘토 등록</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">이름:</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">이메일:</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="bio">소개:</label>
                        <textarea
                            className={styles.textarea}
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="photo">사진:</label>
                        <input
                            className={styles.input}
                            type="file"
                            id="photo"
                            accept="image/*"
                            onChange={handlePhotoChange}
                        />
                    </div>
                    <button className={styles.button} type="submit">등록하기</button>
                    <button className={styles.goBackButton} onClick={handleGoBack}>뒤로가기</button>
                </form>
                <footer className="footer">
                    <div className="footer-icon" onClick={handleSettingsClick}>=</div>
                    <div className="footer-icon" onClick={handleHomeClick}>🏠</div>
                    <div className="footer-icon" onClick={handleProfileClick}>👤</div>
                </footer>
            </div>
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>등록되었습니다!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Be;
