import son_qismi from './son_qismi.module.css';

const Son_qismi = () => {
  return (
    <div className={son_qismi.bosh_qismi}>
      <div className={son_qismi.sonlar}>

        <div className={son_qismi.card}>
          <h1>50+</h1>
          <span>Projects Completed</span>
        </div>

        <div className={son_qismi.card}>
          <h1>45+</h1>
          <span>GitHub Repository</span>
        </div>

        <div className={son_qismi.card}>
          <h1>5+</h1>
          <span>Years of Experience</span>
        </div>

        <div className={son_qismi.card}>
          <h1>700+</h1>
          <span>YouTube Subscribers</span>
        </div>

      </div>
    </div>
  );
};

export default Son_qismi;