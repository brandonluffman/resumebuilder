import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = ({ content, setContent }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['clean']
          ]
        }
      });

      editor.on('text-change', () => {
        setContent(editor.root.innerHTML);
      });

      // Set initial content
      editor.root.innerHTML = content;
    }
  }, [content, setContent]);

  return <div ref={editorRef} />;
};

export default QuillEditor;
