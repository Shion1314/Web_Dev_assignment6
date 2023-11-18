
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthorKey, setAuthorData } from './redux/authorSlice';
import BookRating from './BookRating';

export default function AuthorBooks() {
  const [User_Input, setName] = useState('');
  const dispatch = useDispatch();
  const authorKey = useSelector((state) => state.author.authorKey);
  const authorWorks = useSelector((state) => state.author.authorWorks);
  const authorName = useSelector((state) => state.author.authorName);

  const handleSearch = () => {
    dispatch(setAuthorKey(''));
  
    const authorSearchUrl = `https://openlibrary.org/search/authors.json?q=${User_Input}`;
  
    fetch(authorSearchUrl, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        if (data.docs.length > 0) {
          dispatch(setAuthorKey({ key: data.docs[0].key, name: data.docs[0].name }));
        }
      });
  };
  
  useEffect(() => {
    const fetchData = () => {
      if (authorKey && authorKey.key) {
        const authorWorksUrl = `https://openlibrary.org/authors/${authorKey.key}/works.json?limit=100`;
        const authorUrl = `https://openlibrary.org/authors/${authorKey.key}.json`;
  
        Promise.all([
          fetch(authorWorksUrl, { method: 'GET' }),
          fetch(authorUrl, { method: 'GET' }),
        ])
          .then(([worksResponse, authorResponse]) => Promise.all([worksResponse.json(), authorResponse.json()]))
          .then(([worksData, authorData]) => {
            if (worksData.entries && authorData.personal_name) {
              dispatch(
                setAuthorData({
                  authorWorks: worksData.entries,
                  authorName: authorData.personal_name,
                })
              );
            }
          });
      }
    };
  
    fetchData();
  }, [dispatch, authorKey]);
  

  return (
    <div>
      <label>
        Enter Author's Name:
        <input
          type="text"
          value={User_Input}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {authorName && (
        <>
          <h1>{authorName}'s Books</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Ratings</th>
                </tr>
              </thead>
              <tbody>
                {authorWorks.map((work) => (
                  <tr key={work.key}>
                    <td>{work.title}</td>
                    <td>
                      <BookRating openLibraryKey={work.key} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
