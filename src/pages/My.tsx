import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import '../styles/My.css';

const My: React.FC = () => {
    const router = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showPasswordMismatch, setShowPasswordMismatch] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');
        const storedAddress = localStorage.getItem('address');
        const storedDetailAddress = localStorage.getItem('detailAddress');

        if (storedUsername) setUsername(storedUsername);
        if (storedEmail) setEmail(storedEmail);
        if (storedAddress) setAddress(storedAddress);
        if (storedDetailAddress) setDetailAddress(storedDetailAddress);
    }, []);

    const handleSave = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('address', address);
        localStorage.setItem('detailAddress', detailAddress);
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            router.push('/First');
        }, 1000);
    };

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('address');
        localStorage.removeItem('detailAddress');
        router.push('/Login');
    };

    const handleHomeClick = () => {
        router.push('/First');
    };

    const handleFirstImageClick = () => {
        router.push('/First');
    };

    const handleProfileClick = () => {
        router.push('/Mypage');
    };

    const handleSettingsClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarLinkClick = (path: string) => {
        setSidebarOpen(false);
        router.push(path);
    };

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && !sidebar.contains(event.target as Node)) {
            setSidebarOpen(false);
        }
    };

    const handleChangePassword = () => {
        // 클라이언트 측 간단한 유효성 검사
        if (currentPassword === '') {
            alert('현재 비밀번호를 입력해주세요.');
            return;
        }
        if (newPassword === '') {
            alert('새로운 비밀번호를 입력해주세요.');
            return;
        }
        if (newPassword.length < 8) {
            alert('새로운 비밀번호는 최소 8자 이상이어야 합니다.');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('새로운 비밀번호와 확인용 비밀번호가 일치하지 않습니다.');
            return;
        }

        // 실제 비밀번호 변경 로직 추가
        if (newPassword === confirmPassword) {
            // 여기에 서버와의 통신을 통한 비밀번호 변경 로직을 추가할 수 있습니다.
            setShowPasswordMismatch(false);
            setShowModal(true); // 변경 완료 메시지 표시
            setTimeout(() => {
                setShowModal(false);
                // 비밀번호 변경 후 필요한 처리 (예: 로그아웃, 다른 페이지로 이동 등)
            }, 1000);
        } else {
            setShowPasswordMismatch(true);
        }
    };

    return (
        <div
            className={`main-screen ${isSidebarOpen ? 'sidebar-open' : ''}`}
            onClick={isSidebarOpen ? handleOutsideClick : undefined}
        >
            <div className="sidebar">
                <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Search')}>Search</div>
                <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Login')}>Login</div>
                <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Mypage')}>My</div>
                <div className="sidebar-link" onClick={() => handleSidebarLinkClick('/Chat')}>ChatBot</div>
            </div>
            <header className="header">
                <Image src="/images/image-23.png" alt="search" width={40} height={40}/>
                <div className="center-image-container" onClick={handleFirstImageClick} style={{cursor: 'pointer'}}>
                    <Image className="center-image" src="/images/first.png" alt="투게더!" width={120} height={45}/>
                </div>
                <Image src="/images/alert.png" alt="alert" className="alert-icon" width={50} height={50}/>
            </header>
            <div className="content">
                <div className="intro">
                    <h1>개인정보 수정 및 확인</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="username">이름</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">주소</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="detailAddress">상세 주소</label>
                    <input
                        type="text"
                        id="detailAddress"
                        value={detailAddress}
                        onChange={(e) => setDetailAddress(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="currentPassword">현재 비밀번호</label>
                    <input
                        type="password"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">새로운 비밀번호</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">비밀번호 확인</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {showPasswordMismatch && <p className="error-message">새로운 비밀번호와 확인용 비밀번호가 일치하지 않습니다.</p>}
                <button onClick={handleChangePassword}>비밀번호 변경</button>
                <button onClick={handleSave}>저장</button>
                <button onClick={handleLogout} className="logout-button">로그아웃</button>
            </div>
            {showModal && (<div className="modal">
                    <div className="modal-content">
                        정보가 저장되었습니다.
                    </div>
                </div>
            )}
            <footer className="footer">
                <div className="footer-icon" onClick={handleSettingsClick}>=</div>
                <div className="footer-icon" onClick={handleHomeClick}>🏠</div>
                <div className="footer-icon" onClick={handleProfileClick}>👤</div>
            </footer>
        </div>
    );
};

export default My;


