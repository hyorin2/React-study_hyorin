// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <ProfileCard 
        name="김철수"
        age={25}
        job="프론트엔드 개발자"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProfileCard 
        name="이영희"
        age={28}
        job="디자이너"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
    </div>
  );
}

function ProfileCard({ name, age, job, avatar }) {
  return (
    <div style={styles.card}>
      <img src={avatar} alt={name} style={styles.avatar} />
      <h2>{name}</h2>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    width: "200px",
    textAlign: "center",
    margin: "10px",
    display: "inline-block",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover"
  }
};

export default App;
