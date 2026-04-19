'use client';
import React, { useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';

// Import JoditEditor dynamically to avoid SSR issues
const JoditEditor = dynamic(() => import('jodit-react'), { 
  ssr: false,
  loading: () => <div style={{ height: '500px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Đang nạp trình soạn thảo...</div>
});

export default function AdminEditor({ initialValue, onChange }) {
  const editor = useRef(null);

  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Bắt đầu soạn thảo nội dung chuyên nghiệp...',
    height: 500,
    toolbarSticky: false,
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', 'strikethrough', 'eraser', '|',
      'ul', 'ol', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'image', 'video', 'table', 'link', '|',
      'align', 'undo', 'redo', '|',
      'hr', 'symbol', 'fullsize', 'print', 'preview'
    ],
    // Ensure it looks premium
    theme: 'default',
    style: {
      color: '#333'
    }
  }), []);

  return (
    <div style={{ color: 'black', width: '100%', minHeight: '550px' }}>
      <JoditEditor
        ref={editor}
        value={initialValue}
        config={config}
        tabIndex={1}
        onBlur={newContent => onChange(newContent)}
        onChange={newContent => {}} // We use onBlur for better performance
      />
    </div>
  );
}
