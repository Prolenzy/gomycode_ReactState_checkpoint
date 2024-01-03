import React, { Component } from 'react';
import './App.css';

// Now define the App component as a class-based component. We're transforming the App.js into a class-based component by using the 'class' keyword and extending the 'Component' class from React.
class App extends Component {
  // Initialize the state with a Person object and inherent fields
  state = {
    // Define the Person object with fullName, bio, imgSrc, and profession fields
    person: {
      fullName: 'Steven Gerrard',
      bio: `Steven Gerrard, born on May 30, 1980, in Whiston, Merseyside, England, stands as a monumental figure in football's annals. His illustrious playing career, predominantly with Liverpool FC, is punctuated by his unparalleled midfield prowess, leadership acumen, and undying allegiance to the club.

      From his early days at Liverpool's youth academy to his first-team debut in 1998 and his subsequent 17-year tenure as a cornerstone player, Gerrard etched an indelible mark. His trademark powerful strikes, impeccable passes, and relentless dynamism were instrumental in Liverpool's notable triumphs, notably the unforgettable UEFA Champions League win in 2005.
      
      On the international stage, Gerrard donned England's jersey across multiple FIFA World Cups and UEFA European Championships, embodying dedication and valor that resonated globally.
      
      Post his retirement in 2016, Gerrard seamlessly transitioned to the coaching realm. He honed his managerial acumen with Liverpool's youth squads before stepping into senior managerial roles that amplified his burgeoning reputation. Notably, he helmed Aston Villa, showcasing his tactical prowess in the demanding English football landscape. His subsequent move to Al-Ettifaq in the Saudi Pro League highlighted his ambition to navigate diverse footballing terrains and further solidify his managerial credentials.
      
      With a strategic foresight, profound game insights, and an enduring legacy as a football titan, Steven Gerrard's managerial journey continues to captivate, transcending the boundaries of his stellar playing career.`,
      imgSrc: './steven.jpg',
      profession: 'Football Manager'
    },
    // The boolean state to toggle the display of the Person profile
    shows: false,
    // State to track the time interval since the component was mounted
    timeInterval: 0,
  };
  // A function to toggle the shows state when the button is clicked
  toggleProfile = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };
  // Lifecycle method called before the component is unmounted
  componentWillUnmount() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.intervalId);
  }
  // Render method to display the component UI
  render() {
    // Destructure the person object fields from the state
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className='App'>
        {/* Button to toggle the display of the Person profile */}
        <button onClick={this.toggleProfile}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {/* Conditionally render the Person profile based on the shows */}
        {this.state.shows && (
          <div>
            <h1>{fullName}</h1>
            {/* Display the bio with proper paragraph breaks */}
            <div 
            style={{ 
              whiteSpace: 'pre-line', 
              textAlign: 'left',
              padding: '25px',
              margin: '25px 0'
              }}>{bio}
            </div>
            <img 
            src={imgSrc} 
            alt={fullName} 
            style={{ 
              width: '100%', 
              height: '850px',                 
              paddingTop: '25px', 
              paddingBottom: "10px",
               }}
            />
            <p>{profession}</p>
          </div>
        )}
        {/* Display the time interval since the component was mounted */}
        <p>Time since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
} 

export default App;
