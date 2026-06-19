'use client';
import { useState, useEffect } from 'react';

export default function MultiImageSelector({ value = [], onChange, label = 'Thư viện hình ảnh sản phẩm' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'gallery'
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]); // Temporary selection state in modal
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Sync selectedUrls with value when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedUrls([...value]);
    }
  }, [isOpen, value]);

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
        const data = await res.json();
        setGalleryImages(data);
      }
    } catch (err) {
      console.error('Failed to load gallery images', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocalUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadError('');
    setLoading(true);

    const uploadedUrls = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
      
      if (!file.type.startsWith('image/') || !allowedExtensions.includes(fileExtension)) {
        setUploadError(`Bỏ qua file "${file.name}": Định dạng không hợp lệ.`);
        continue;
      }

      try {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/media', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (res.ok && data.success) {
          uploadedUrls.push(data.url);
        } else {
          setUploadError(data.error || `Tải file "${file.name}" thất bại!`);
        }
      } catch (err) {
        setUploadError(`Lỗi khi tải file "${file.name}" lên!`);
      }
    }

    if (uploadedUrls.length > 0) {
      const newValue = [...value, ...uploadedUrls];
      onChange(newValue);
      setSelectedUrls(newValue);
      setIsOpen(false);
    }

    setLoading(false);
  };

  const toggleGalleryImage = (url) => {
    if (selectedUrls.includes(url)) {
      setSelectedUrls(selectedUrls.filter(u => u !== url));
    } else {
      setSelectedUrls([...selectedUrls, url]);
    }
  };

  const handleSelectGalleryImages = () => {
    onChange(selectedUrls);
    setIsOpen(false);
  };

  const handleRemoveImage = (indexToRemove) => {
    const newValue = value.filter((_, idx) => idx !== indexToRemove);
    onChange(newValue);
  };

  const handleMoveImage = (index, direction) => {
    const newValue = [...value];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newValue.length) return;
    
    // Swap items
    const temp = newValue[index];
    newValue[index] = newValue[targetIndex];
    newValue[targetIndex] = temp;
    
    onChange(newValue);
  };

  return (
    <div style={{ marginBottom: '25px', fontFamily: 'inherit' }}>
      <label style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#333' }}>{label}</label>

      {/* Selected Image Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '15px',
        marginBottom: '15px'
      }}>
        {value.map((url, idx) => (
          <div 
            key={`${url}-${idx}`}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '5px',
              backgroundColor: '#f9f9f9',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ width: '100%', height: '90px', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
              <img 
                src={url} 
                alt={`Product thumbnail ${idx + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            {/* Control buttons underneath thumbnail */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '5px',
              padding: '2px 4px'
            }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => handleMoveImage(idx, -1)}
                  style={{
                    padding: '2px 6px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    borderRadius: '3px',
                    cursor: idx === 0 ? 'not-allowed' : 'pointer',
                    fontSize: '10px',
                    opacity: idx === 0 ? 0.4 : 1
                  }}
                  title="Di chuyển sang trái"
                >
                  ◀
                </button>
                <button
                  type="button"
                  disabled={idx === value.length - 1}
                  onClick={() => handleMoveImage(idx, 1)}
                  style={{
                    padding: '2px 6px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    borderRadius: '3px',
                    cursor: idx === value.length - 1 ? 'not-allowed' : 'pointer',
                    fontSize: '10px',
                    opacity: idx === value.length - 1 ? 0.4 : 1
                  }}
                  title="Di chuyển sang phải"
                >
                  ▶
                </button>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveImage(idx)}
                style={{
                  padding: '2px 6px',
                  border: '1px solid #e74c3c',
                  background: '#fde8e8',
                  color: '#e74c3c',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}
                title="Xóa hình ảnh này"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {/* Add images box placeholder */}
        <div 
          onClick={() => setIsOpen(true)}
          style={{
            border: '2px dashed #cbd5e1',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#fff',
            transition: 'all 0.2s ease',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
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
          <span style={{ fontSize: '24px' }}>➕</span>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>Quản lý thư viện</span>
        </div>
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
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', fontWeight: '700' }}>Quản lý hình ảnh sản phẩm</h3>
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
                📤 Tải lên từ thiết bị
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
                📁 Chọn từ thư viện sẵn có
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
                      multiple
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
                      {loading ? 'Đang xử lý tải lên...' : 'Chọn một hoặc nhiều file ảnh để tải lên cùng lúc'}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Định dạng ảnh: JPG, PNG, WEBP, GIF, SVG</span>
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
                    <p style={{ textAlign: 'center', color: '#64748b' }}>Đang nạp ảnh thư viện...</p>
                  ) : galleryImages.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#64748b', padding: '40px 0' }}>Chưa có hình ảnh nào trên hệ thống.</p>
                  ) : (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                      gap: '15px',
                      maxHeight: '40vh',
                      overflowY: 'auto',
                      padding: '5px'
                    }}>
                      {galleryImages.map((img) => {
                        const isSelected = selectedUrls.includes(img.url);
                        return (
                          <div 
                            key={img.url}
                            onClick={() => toggleGalleryImage(img.url)}
                            style={{
                              border: isSelected ? '3px solid var(--primary-color)' : '1px solid #e2e8f0',
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
                            {isSelected && (
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
                        );
                      })}
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
                  onClick={handleSelectGalleryImages}
                  style={{
                    padding: '9px 18px',
                    border: 'none',
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Xác nhận ({selectedUrls.length} ảnh)
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
