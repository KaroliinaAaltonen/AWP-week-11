// /src/components/About.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();

        // Extract id and title from the API response
        const formattedData = jsonData.map(({ id, title }) => ({ id, title }));

        // Check if the component is still mounted before updating state
        if (mounted) {
          setData(formattedData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error or set appropriate state
      }
    };

    fetchData();

    return () => {
      // Cleanup function to set mounted to false when the component is unmounted
      mounted = false;
    };
  }, []); // Empty dependency array means this useEffect runs only on mount

  return (
    <div>
      <h2>{t('aboutPageText')}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      {/*<p>Hello {name}!</p>*/}
    </div>
  );
};

export default About;
