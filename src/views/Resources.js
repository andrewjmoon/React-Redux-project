import React from 'react';

export default () => {
  return (
    <div className="App" data-testid="resource-view">
      <h1 className="center"> Resources for the Would You Prefer Game</h1>
      <ul>
        <li className="Link">
          Thought-Provoking Would You Rather Questions
          <a
            style={{ color: 'black' }}
            href="https://www.theodysseyonline.com/best-would-you-rather-questions"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://www.theodysseyonline.com/best-would-you-rather-questions
          </a>
        </li>
        <br />
        <li className="Link">
          Hardest Would You Rather Questions
          <a
            style={{ color: 'black' }}
            href="https://lifehacks.io/would-you-rather-questions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://lifehacks.io/would-you-rather-questions/
          </a>
        </li>
        <br />
        <li className="Link">
          100 Tough Would You Rather Questions
          <a
            style={{ color: 'black' }}
            href="https://www.cleverism.com/hardest-would-you-rather-questions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://www.cleverism.com/hardest-would-you-rather-questions/
          </a>
        </li>
        <br />
        <li className="Link">
          Deep Would You Rather Questions.
          <a
            style={{ color: 'black' }}
            href="https://deep-questions.com/deep-would-you-rather-questions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://deep-questions.com/deep-would-you-rather-questions/
          </a>
        </li>
        <br />
        <li className="Link">
          Impossible Would You Rather Questions
          <a
            style={{ color: 'black' }}
            href="https://www.pointsprizes.com/blog/132/25-impossible-would-you-rather-questions"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://www.pointsprizes.com/blog/132/25-impossible-would-you-rather-questions
          </a>
        </li>
        <br />
        <li className="Link">
          Scary Would You Rather Questions.
          <a
            style={{ color: 'black' }}
            href="https://thoughtcatalog.com/erin-cossetta/2017/10/50-would-you-rather-questions-that-will-drive-horror-fans-crazy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <br />
            https://thoughtcatalog.com/erin-cossetta/2017/10/50-would-you-rather-questions-that-will-drive-horror-fans-crazy/
          </a>
        </li>
      </ul>
    </div>
  );
};
