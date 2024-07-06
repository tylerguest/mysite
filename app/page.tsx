// Import statement at the top
import Image from "next/image";
import React from "react"; // Import React (optional, depending on your setup)
import styles from './Home.module.css'; // Assuming CSS module for styling

const ProgressBar = ({ progress }) => {
  // Inline styles for the container of the progress bar
  const containerStyles = {
    height: '20px',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: '0px',
    margin: '25px 0',
    border: '1px dashed darkblue',
    position: 'relative',
    fontWeight: 'bold',
  };

  // Updated inline styles for the filler of the progress bar, including the transition
  const fillerStyles = {
    height: '100%',
    width: `${progress}%`, // This will be dynamically updated based on the progress prop
    backgroundColor: 'darkblue',
    borderRadius: '1px',
    textAlign: 'right',
    transition: 'width 2s ease-in-out', // Smooth transition for width change
  };

  // Inline styles for the percentage text
  const percentageStyles = {
    position: 'absolute',
    right: '-35px',
    top: '0',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'darkblue',
    fontSize: '14px',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
      <div style={percentageStyles}>{progress}%</div>
    </div>
  );
};

// Define your Home component
function Home() { 
  // Function to generate scrolling text
  const generateScrollingText = () => {
    return "test test test test test test test test test test - ".repeat(2000);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <div className={styles.header1}>
        </div>
        <div className={styles.header2}>
          <h1 className={styles.header2a}>tyler guest</h1>
          <p>cs student. software engineer. tguest@umich.edu&nbsp;
            <a href="mailto:tguest@umich.edu" className={styles.emailLink}>
            (click to send email).
            </a>
          </p>
        </div>
      </div>
      <div className={styles.scrollingSection}>
        <div className={styles.scrollingText}>
          {generateScrollingText()}
        </div>
      </div>
      <div className={styles.projects}>
        <h1>projects</h1>
        <div className={styles.projectContainer}>
          <h2 style={{fontWeight: 'bold'}}>project name: 3DQ</h2>
          <h2 style={{fontWeight: 'bold'}}>github repo:&nbsp;
            <a href="https://github.com/tylerguest/3DQ" className={styles.emailLink} target="_blank" rel="noopener noreferrer">
            https://github.com/tylerguest/3DQ
            </a>
          </h2>
          <p>vst plugin built with c++ and the juce framework.</p>
          <div style={{display: 'flex', alignItems: 'center'}}> {/* New container with flexbox */}
            <span style={{marginRight: '10px', fontWeight: 'bold'}}>progress:</span> {/* Progress text */}
            <ProgressBar progress={30} />
          </div>
        </div>
        <div className={styles.projectContainer}>
          <h2 style={{fontWeight: 'bold'}}>project name: oneComp</h2>
          <h2 style={{fontWeight: 'bold'}}>github repo:&nbsp;
            <a href="https://github.com/tylerguest/oneComp" className={styles.emailLink} target="_blank" rel="noopener noreferrer">
            https://github.com/tylerguest/oneComp
            </a>
          </h2>
          <p>vst plugin built with c++ and the juce framework.</p>
          <div style={{display: 'flex', alignItems: 'center'}}> {/* New container with flexbox */}
            <span style={{marginRight: '10px', fontWeight: 'bold'}}>progress:</span> {/* Progress text */}
            <ProgressBar progress={65} />
          </div>
        </div>
        <div className={styles.projectContainer}>
          <h2 style={{fontWeight: 'bold'}}>project name: vhsite</h2>
          <h2 style={{fontWeight: 'bold'}}>github repo:&nbsp;
            <a href="https://github.com/tylerguest/vhsite" className={styles.emailLink} target="_blank" rel="noopener noreferrer">
            https://github.com/tylerguest/vhsite
            </a>
          </h2>
          <p>vst plugin built with c++ and the juce framework.</p>
          <div style={{display: 'flex', alignItems: 'center'}}> {/* New container with flexbox */}
            <span style={{marginRight: '10px', fontWeight: 'bold'}}>progress:</span> {/* Progress text */}
            <ProgressBar progress={75} />
          </div>
        </div>
        <div className={styles.skills}>
          <h1>skills</h1>
          <ul>
            <li>c++</li>
            <li>react</li>
            <li>typescript</li>
            <li>next.js</li>
            <li>html & jsx</li>
            <li>version control</li>
            <li>JUCE framework</li>
          </ul>
        </div>
      </div>
      {/* Add more child divs as needed */}
    </div>
  );
}

// Export your Home component as the default export
export default Home;