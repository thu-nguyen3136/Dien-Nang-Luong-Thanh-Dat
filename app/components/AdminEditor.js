'use client';
import React, { useRef, useMemo, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import JoditEditor dynamically to avoid SSR issues
const JoditEditor = dynamic(() => import('jodit-react'), { 
  ssr: false,
  loading: () => <div style={{ height: '500px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Đang nạp trình soạn thảo...</div>
});

export default function AdminEditor({ initialValue = '', onChange }) {
  const editor = useRef(null);
  
  // Custom Selector States
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectorType, setSelectorType] = useState('image'); // 'image' | 'video' | 'file'
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'gallery'
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedGalleryUrl, setSelectedGalleryUrl] = useState('');
  const [selectedGalleryName, setSelectedGalleryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [editorInstance, setEditorInstance] = useState(null);

  // Fetch gallery when tab switches to gallery
  useEffect(() => {
    if (isSelectorOpen && activeTab === 'gallery') {
      fetchGallery();
    }
  }, [isSelectorOpen, activeTab, selectorType]);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/media?type=${selectorType}`);
      if (res.ok) {
        const data = await res.json();
        setGalleryImages(data);
      }
    } catch (err) {
      console.error('Failed to load gallery assets', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocalUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError('');

    // Strict client-side validation based on active selectorType
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

    if (selectorType === 'image') {
      const allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'ico'];
      if (!file.type.startsWith('image/') || !allowed.includes(fileExtension)) {
        setUploadError('Chỉ chấp nhận các tập tin hình ảnh (jpg, png, webp, svg, v.v.).');
        return;
      }
    } else if (selectorType === 'video') {
      const allowed = ['mp4', 'webm', 'ogg', 'mov'];
      if (!file.type.startsWith('video/') || !allowed.includes(fileExtension)) {
        setUploadError('Chỉ chấp nhận các tập tin video (mp4, webm, ogg, mov).');
        return;
      }
    } else { // 'file' (Documents/Zips)
      const allowed = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar'];
      const unsafe = ['js', 'html', 'php', 'exe', 'bat', 'sh', 'jsp', 'asp', 'aspx', 'css'];
      
      if (unsafe.includes(fileExtension)) {
        setUploadError('Tập tin không an toàn! Chỉ chấp nhận tài liệu hoặc file nén (pdf, docx, xlsx, zip, rar, v.v.).');
        return;
      }
      if (!allowed.includes(fileExtension)) {
        setUploadError('Định dạng tài liệu không được hỗ trợ. Vui lòng tải các định dạng phổ biến như PDF, Word, Excel hoặc Zip.');
        return;
      }
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
        insertAssetToEditor(data.url, file.name);
      } else {
        setUploadError(data.error || 'Tải tập tin lên thất bại!');
      }
    } catch (err) {
      setUploadError('Đã xảy ra lỗi khi tải tập tin lên!');
    } finally {
      setLoading(false);
    }
  };

  const insertAssetToEditor = (url, name = '') => {
    if (!editorInstance) {
      setIsSelectorOpen(false);
      return;
    }

    const filename = name || url.split('/').pop();

    if (selectorType === 'image') {
      // Insert image node
      editorInstance.selection.insertHTML(`<img src="${url}" alt="${filename}" style="max-width: 100%; height: auto; border-radius: 4px; display: block; margin: 10px auto;" />`);
    } else if (selectorType === 'video') {
      // Insert video node
      editorInstance.selection.insertHTML(`<video controls style="max-width: 100%; height: auto; border-radius: 4px; display: block; margin: 15px auto;"><source src="${url}" />Trình duyệt không hỗ trợ xem video.</video>`);
    } else {
      // Insert document download anchor
      editorInstance.selection.insertHTML(`<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #008542; font-weight: 600; text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;">📄 Tải xuống file: ${filename}</a>`);
    }

    setIsSelectorOpen(false);
    setSelectedGalleryUrl('');
    setSelectedGalleryName('');
    setUploadError('');
  };

  const handleSelectGalleryImage = () => {
    if (selectedGalleryUrl) {
      insertAssetToEditor(selectedGalleryUrl, selectedGalleryName);
    }
  };

  const handleSelectGalleryItem = (url, name) => {
    setSelectedGalleryUrl(url);
    setSelectedGalleryName(name);
  };

  // Configure Custom Control Buttons to override Native Dialogs
  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Bắt đầu soạn thảo nội dung chuyên nghiệp...',
    height: 500,
    toolbarSticky: false,
    controls: {
      image: {
        tooltip: 'Chèn hình ảnh (Tải lên hoặc chọn từ thư viện)',
        exec: (editorInst) => {
          setEditorInstance(editorInst);
          setSelectorType('image');
          setActiveTab('upload');
          setIsSelectorOpen(true);
        }
      },
      file: {
        tooltip: 'Chèn tài liệu/file (Tải lên hoặc chọn từ thư viện)',
        exec: (editorInst) => {
          setEditorInstance(editorInst);
          setSelectorType('file');
          setActiveTab('upload');
          setIsSelectorOpen(true);
        }
      },
      video: {
        tooltip: 'Chèn video (Tải lên hoặc chọn từ thư viện)',
        exec: (editorInst) => {
          setEditorInstance(editorInst);
          setSelectorType('video');
          setActiveTab('upload');
          setIsSelectorOpen(true);
        }
      }
    },
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', 'strikethrough', 'eraser', '|',
      'ul', 'ol', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'image', 'file', 'video', 'table', 'link', '|',
      'align', 'undo', 'redo', '|',
      'hr', 'symbol', 'fullsize', 'print', 'preview'
    ],
    theme: 'default',
    style: {
      color: '#333'
    }
  }), []);

  // Modal Configuration Helpers
  const modalTitle = {
    image: 'Chèn hình ảnh vào nội dung',
    video: 'Chèn video vào nội dung',
    file: 'Chèn tài liệu / file đính kèm'
  }[selectorType];

  const uploadAcceptAttr = {
    image: 'image/*',
    video: 'video/*',
    file: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar'
  }[selectorType];

  const uploadLabel = {
    image: 'Chọn file ảnh từ thiết bị của bạn',
    video: 'Chọn file video (mp4, webm...) từ thiết bị',
    file: 'Chọn file tài liệu (pdf, docx, zip...) từ thiết bị'
  }[selectorType];

  return (
    <div style={{ color: 'black', width: '100%', minHeight: '550px', position: 'relative' }}>
      <JoditEditor
        ref={editor}
        value={initialValue}
        config={config}
        tabIndex={1}
        onBlur={newContent => onChange(newContent)}
        onChange={newContent => {}} // We use onBlur for better performance
      />

      {/* Embedded Secure Media Selector Modal for Editor */}
      {isSelectorOpen && (
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
          zIndex: 99999, /* Overlay standard full-screen or modal elements */
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
              overflow: 'hidden',
              fontFamily: 'sans-serif'
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
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', fontWeight: '700' }}>{modalTitle}</h3>
              <button 
                onClick={() => { setIsSelectorOpen(false); setUploadError(''); }}
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
                  borderBottom: activeTab === 'upload' ? '2px solid #008542' : 'none',
                  fontWeight: activeTab === 'upload' ? '700' : '500',
                  color: activeTab === 'upload' ? '#008542' : '#64748b',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                📤 Tải lên từ máy tính
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                style={{
                  flex: 1,
                  padding: '14px',
                  border: 'none',
                  background: activeTab === 'gallery' ? '#fff' : 'none',
                  borderBottom: activeTab === 'gallery' ? '2px solid #008542' : 'none',
                  fontWeight: activeTab === 'gallery' ? '700' : '500',
                  color: activeTab === 'gallery' ? '#008542' : '#64748b',
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
                      accept={uploadAcceptAttr}
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
                    <span style={{ fontSize: '40px', display: 'block', marginBottom: '15px' }}>
                      {selectorType === 'image' ? '🖼️' : selectorType === 'video' ? '🎥' : '📄'}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', display: 'block', marginBottom: '5px' }}>
                      {loading ? 'Đang xử lý tải lên...' : uploadLabel}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Định dạng bảo mật an toàn cao</span>
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
                    <p style={{ textAlign: 'center', color: '#64748b' }}>Đang nạp dữ liệu thư viện...</p>
                  ) : galleryImages.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#64748b', padding: '40px 0' }}>Không tìm thấy tập tin nào cùng loại.</p>
                  ) : (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                      gap: '15px',
                      maxHeight: '40vh',
                      overflowY: 'auto',
                      padding: '5px'
                    }}>
                      {galleryImages.map((item) => (
                        <div 
                          key={item.url}
                          onClick={() => handleSelectGalleryItem(item.url, item.name)}
                          style={{
                            border: selectedGalleryUrl === item.url ? '3px solid #008542' : '1px solid #e2e8f0',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            position: 'relative',
                            paddingBottom: '100%',
                            backgroundColor: '#f8fafc',
                            transition: 'transform 0.15s ease'
                          }}
                        >
                          {selectorType === 'image' ? (
                            <img 
                              src={item.url} 
                              alt={item.name} 
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          ) : selectorType === 'video' ? (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '10px',
                              textAlign: 'center'
                            }}>
                              <span style={{ fontSize: '24px' }}>🎥</span>
                              <span style={{ fontSize: '10px', color: '#64748b', wordBreak: 'break-all', marginTop: '5px', height: '2.4em', overflow: 'hidden' }}>{item.name}</span>
                            </div>
                          ) : (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '10px',
                              textAlign: 'center'
                            }}>
                              <span style={{ fontSize: '28px' }}>📄</span>
                              <span style={{ fontSize: '10px', color: '#64748b', wordBreak: 'break-all', marginTop: '5px', height: '2.4em', overflow: 'hidden' }}>{item.name}</span>
                            </div>
                          )}
                          
                          {selectedGalleryUrl === item.url && (
                            <div style={{
                              position: 'absolute',
                              top: '5px',
                              right: '5px',
                              backgroundColor: '#008542',
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
                onClick={() => { setIsSelectorOpen(false); setUploadError(''); }}
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
                Hủy
              </button>
              {activeTab === 'gallery' && (
                <button
                  onClick={handleSelectGalleryImage}
                  disabled={!selectedGalleryUrl}
                  style={{
                    padding: '9px 18px',
                    border: 'none',
                    backgroundColor: selectedGalleryUrl ? '#008542' : '#94a3b8',
                    borderRadius: '6px',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: selectedGalleryUrl ? 'pointer' : 'not-allowed',
                    fontSize: '14px'
                  }}
                >
                  Xác nhận chèn
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
