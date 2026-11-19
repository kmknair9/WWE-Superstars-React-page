import './App.css';
import Img from './assets/image.jpg';

function App() {
  return (
    <div>
      <h1>WHAT HAPPENED TO WWE SUPERSTARS?</h1>
      <img
        src={Img}
        alt="WWE Superstar"
        width="1024"
      />
      <p>
        Athletes face physical and mental health challenges due to high training loads, repetitive physical stress, nutritional pressures, and competitive environments.
      </p>
      <br />

      <h2>Major Physical Health Causes</h2>
      <ul>
        <li>
          <strong>Overuse and Repetitive Stress:</strong> Constant high-impact or repetitive training causes microdamage to bones, tendons, and joints, leading to conditions like bone stress injuries, tendinitis, and stress fractures.
        </li>
        <li>
          <strong>Inadequate Nutrition and Energy Deficits:</strong> Restricting calories or trying to meet strict weight-class and body-fat standards can lead to the Female Athlete Triad—characterized by low energy availability, irregular menstruation, and compromised bone mineral density (osteoporosis).
        </li>
        <li>
          <strong>Cardiovascular Strain:</strong> Intense physical conditioning remodels the heart. While often a healthy adaptation ("athlete's heart"), extreme stress combined with genetic factors or substance use can trigger serious cardiac issues like hypertrophic cardiomyopathy or arrhythmias.
        </li>
        <li>
          <strong>Traumatic Injuries and Concussions:</strong> High-contact or high-speed sports carry risks of acute structural damage (such as torn ligaments and bone fractures) as well as sports-related concussions that can result in short-term and long-term cognitive or neurodegenerative effects.
        </li>
      </ul>
    </div>
  );
}

export default App;
