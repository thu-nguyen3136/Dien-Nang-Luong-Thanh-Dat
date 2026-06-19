'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSelector({ value, onChange, label = 'Ảnh đại diện' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'gallery'
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedGalleryUrl, setSelectedGalleryUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Load images when opening the gallery tab
  useEffect(() => {
    if (isOpen && activeTab === 'gallery') {
      fetchGallery();
    }
  }, [isOpen, activeTab]);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/media');
      if (res.ok) {
        const data = await res.ok ? await res.json() : [];
        setGalleryImages(data);
      }
    } catch (err) {
      console.error('Failed to load gallery images', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocalUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError('');

    // Client-side validation: extension and MIME prefix
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    
    if (!file.type.startsWith('image/') || !allowedExtensions.includes(fileExtension)) {
      setUploadError('Chỉ chấp nhận các tập tin hình ảnh (jpg, png, webp, v.v.). Các định dạng text hoặc file thực thi không được chấp nhận để bảo mật.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        onChange(data.url);
        setIsOpen(false);
      } else {
        setUploadError(data.error || 'Tải ảnh lên thất bại!');
      }
    } catch (err) {
      setUploadError('Đã xảy ra lỗi khi tải ảnh lên!');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectGalleryImage = () => {
    if (selectedGalleryUrl) {
      onChange(selectedGalleryUrl);
      setIsOpen(false);
    }
  };

  return (
    <div style={{ marginBottom: '20px', fontFamily: 'inherit' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>{label}</label>
      
      {/* Selector Container */}
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          border: '2px dashed #cbd5e1',
          borderRadius: '8px',
          padding: '15px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: '#fff',
          transition: 'all 0.2s ease',
          minHeight: '130px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'var(--primary-color)';
          e.currentTarget.style.backgroundColor = '#f7faf8';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = '#cbd5e1';
          e.currentTarget.style.backgroundColor = '#fff';
        }}
      >
        {value ? (
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px', height: '140px' }}>
            <img 
              src={value} 
              alt="Cover preview" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '4px' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              background: 'rgba(0,0,0,0.6)',
              color: '#fff',
              padding: '2px 8px',
              fontSize: '11px',
              borderRadius: '3px'
            }}>
              Thay đổi ảnh
            </div>
          </div>
        ) : (
          <div style={{ color: '#64748b' }}>
            <span style={{ fontSize: '24px', display: 'block', marginBottom: '5px' }}>🖼️</span>
            <span>Click để chọn hoặc tải ảnh đại diện lên</span>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '650px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '85vh',
              overflow: 'hidden'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '18px 24px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', fontWeight: '700' }}>Chọn ảnh đại diện</h3>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                &times;
              </button>
            </div>

            {/* Modal Tabs */}
            <div style={{
              display: 'flex',
              borderBottom: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc'
            }}>
              <button
                onClick={() => setActiveTab('upload')}
                style={{
                  flex: 1,
                  padding: '14px',
                  border: 'none',
                  background: activeTab === 'upload' ? '#fff' : 'none',
                  borderBottom: activeTab === 'upload' ? '2px solid var(--primary-color)' : 'none',
                  fontWeight: activeTab === 'upload' ? '700' : '500',
                  color: activeTab === 'upload' ? 'var(--primary-color)' : '#64748b',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                📤 Tải lên ảnh mới
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                style={{
                  flex: 1,
                  padding: '14px',
                  border: 'none',
                  background: activeTab === 'gallery' ? '#fff' : 'none',
                  borderBottom: activeTab === 'gallery' ? '2px solid var(--primary-color)' : 'none',
                  fontWeight: activeTab === 'gallery' ? '700' : '500',
                  color: activeTab === 'gallery' ? 'var(--primary-color)' : '#64748b',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                📁 Chọn từ thư viện có sẵn
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
              {activeTab === 'upload' && (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{
                    border: '2px dashed #cbd5e1',
                    borderRadius: '8px',
                    padding: '40px 20px',
                    position: 'relative',
                    cursor: 'pointer',
                    backgroundColor: '#f8fafc'
                  }}>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleLocalUpload}
                      disabled={loading}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer'
                      }}
                    />
                    <span style={{ fontSize: '40px', display: 'block', marginBottom: '15px' }}>📤</span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', display: 'block', marginBottom: '5px' }}>
                      {loading ? 'Đang xử lý tải lên...' : 'Chọn file ảnh từ thiết bị của bạn'}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Chỉ chấp nhận các tập tin định dạng hình ảnh</span>
                  </div>

                  {uploadError && (
                    <div style={{
                      marginTop: '15px',
                      backgroundColor: '#fef2f2',
                      borderLeft: '4px solid #ef4444',
                      color: '#991b1b',
                      padding: '10px 15px',
                      fontSize: '13px',
                      borderRadius: '4px',
                      textAlign: 'left'
                    }}>
                      ⚠️ {uploadError}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  {loading ? (
                    <p style={{ textAlign: 'center', color: '#64748b' }}>Đang nạp ảnh từ thư viện...</p>
                  ) : galleryImages.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#64748b', padding: '40px 0' }}>Chưa có hình ảnh nào được tải lên.</p>
                  ) : (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                      gap: '15px',
                      maxHeight: '40vh',
                      overflowY: 'auto',
                      padding: '5px'
                    }}>
                      {galleryImages.map((img) => (
                        <div 
                          key={img.url}
                          onClick={() => setSelectedGalleryUrl(img.url)}
                          style={{
                            border: selectedGalleryUrl === img.url ? '3px solid var(--primary-color)' : '1px solid #e2e8f0',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            position: 'relative',
                            paddingBottom: '100%',
                            backgroundColor: '#f8fafc',
                            transition: 'transform 0.15s ease'
                          }}
                        >
                          <img 
                            src={img.url} 
                            alt={img.name} 
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                          {selectedGalleryUrl === img.url && (
                            <div style={{
                              position: 'absolute',
                              top: '5px',
                              right: '5px',
                              backgroundColor: 'var(--primary-color)',
                              color: '#fff',
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '11px',
                              fontWeight: 'bold'
                            }}>
                              ✓
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
              backgroundColor: '#f8fafc'
            }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '9px 16px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#fff',
                  borderRadius: '6px',
                  color: '#334155',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Hủy bỏ
              </button>
              {activeTab === 'gallery' && (
                <button
                  onClick={handleSelectGalleryImage}
                  disabled={!selectedGalleryUrl}
                  style={{
                    padding: '9px 18px',
                    border: 'none',
                    backgroundColor: selectedGalleryUrl ? 'var(--primary-color)' : '#94a3b8',
                    borderRadius: '6px',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: selectedGalleryUrl ? 'pointer' : 'not-allowed',
                    fontSize: '14px'
                  }}
                >
                  Xác nhận chọn
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
