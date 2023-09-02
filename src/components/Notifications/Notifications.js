import React from 'react';
import './Notifications.css';
const Notifications = () => {
    const jsonData = [
        { title: 'Example Link 1', link: 'https://example.com/link1' },
        { title: 'Example Link 222222222222222222222222222222222222222222222222222222222222', link: 'https://example.com/link2' },
        { title: 'Example Link 3', link: 'https://example.com/link3' },
        { title: 'Example Link 1', link: 'https://example.com/link1' },
        { title: 'Example Link 2', link: 'https://example.com/link2' },
        { title: 'Example Link 3', link: 'https://example.com/link3' },
        { title: 'Example Link 1', link: 'https://example.com/link1' },
        { title: 'Example Link 2', link: 'https://example.com/link2' },
        { title: 'Example Link 3', link: 'https://example.com/link3' },
        { title: 'Example Link 1', link: 'https://example.com/link1' },
        { title: 'Example Link 2', link: 'https://example.com/link2' },
        { title: 'Example Link 3', link: 'https://example.com/link3' },
        { title: 'Example Link 1', link: 'https://example.com/link1' },
        { title: 'Example Link 2', link: 'https://example.com/link2' },
        { title: 'Example Link 3', link: 'https://example.com/link3' },
      ];
  return (
    <div className="link-list">
    
      <ul>
        {jsonData.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
