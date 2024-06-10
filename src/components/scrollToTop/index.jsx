import React, { useState, useEffect, useRef } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={backToTop}
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: '99',
        fontSize: '18px',
        border: 'none',
        outline: 'none',
        backgroundColor: '#449c18',
        color: 'White',
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '4px',
      }}
    >
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg>
    </button>
  );
};

export default ScrollToTopButton;