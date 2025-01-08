import React from 'react';

const Icons = () => {
  return (
    <div className="flex flex-row justify-left items-left my-10 sm:mx-5 ">
      {/* Email */}
      <a
        href="mailto:work.chandril@gmail.com"
        className="mx-5 shrink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          fill="none"
          className="opacity-70 hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/9007877563"
        className="mx-5 shrink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          className="opacity-70 hover:opacity-100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.52 3.48A11.93 11.93 0 0 0 3.48 20.52L2 22l1.48-5.68a11.94 11.94 0 1 0 17.04-12.84ZM12 19.56a7.5 7.5 0 0 1-4.12-1.26l-.3-.18-2.44.66.66-2.44-.18-.3a7.5 7.5 0 1 1 6.38 3.52Zm3.83-5.58c-.21-.1-1.25-.62-1.45-.7s-.34-.1-.49.1-.56.7-.68.85-.25.15-.47.05a6.27 6.27 0 0 1-1.85-1.14 7 7 0 0 1-1.3-1.6c-.13-.21 0-.33.1-.43.1-.1.24-.26.36-.4s.16-.21.25-.34a.44.44 0 0 0 0-.42c-.05-.1-.49-1.2-.67-1.65s-.34-.37-.48-.38h-.41a.8.8 0 0 0-.57.26 2.41 2.41 0 0 0-.75 1.79c0 1.06.78 2.09.89 2.24s1.54 2.37 3.75 3.33c.52.22.93.35 1.25.45a3 3 0 0 0 1.37.09c.42-.06 1.26-.51 1.44-1 .18-.49.18-.92.13-1.01s-.2-.14-.41-.24Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/chandril-adhikary/"
        className="mx-5 shrink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 15 15"
          className="opacity-70 hover:opacity-100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Icons;
