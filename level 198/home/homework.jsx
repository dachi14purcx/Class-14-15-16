import { useState, useEffect, useRef } from "react";

export default function App() {
  const [text, setText] = useState("");

  const colors = ["red", "blue", "green", "yellow"];
  const [index, setIndex] = useState(0);

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState("");

  const [post, setPost] = useState({ title: "", desc: "" });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handleClick = () => setIndex((prev) => (prev + 1) % colors.length);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleFormChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
  const handleFormSubmit = () => {
    if (!values.name || !values.email || !values.password) {
      setErrors("All fields are required");
    } else {
      setErrors("");
      localStorage.setItem("formData", JSON.stringify(values));
    }
  };

  const handlePostChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });
  const handleAddPost = () => {
    if (post.title && post.desc) {
      setPosts([...posts, post]);
      setPost({ title: "", desc: "" });
    }
  };

  return (
    <div style={{ background: colors[index], minHeight: "100vh", padding: "20px" }}>
      <h2>1) Real-time Input</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />
      <p>{text}</p>

      <h2>2) Background Changes on Click (Anywhere)</h2>
      <p>Click anywhere on the page to change background color</p>

      <h2>3) Timer</h2>
      <h1>{time}</h1>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => setRunning(true)}>Resume</button>
      <button onClick={() => { setTime(0); setRunning(false); }}>Restart</button>

      <h2>4) Form with Validation & localStorage</h2>
      <input name="name" placeholder="Name" value={values.name} onChange={handleFormChange} />
      <input name="email" placeholder="Email" value={values.email} onChange={handleFormChange} />
      <input name="password" type="password" placeholder="Password" value={values.password} onChange={handleFormChange} />
      <button onClick={handleFormSubmit}>Submit</button>
      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <h2>5) Post Adding Project</h2>
      <input name="title" placeholder="Post Title" value={post.title} onChange={handlePostChange} />
      <input name="desc" placeholder="Post Description" value={post.desc} onChange={handlePostChange} />
      <button onClick={handleAddPost}>Add Post</button>
      <div>
        {posts.map((p, i) => (
          <div key={i} style={{ border: "1px solid black", margin: "10px", padding: "5px" }}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}