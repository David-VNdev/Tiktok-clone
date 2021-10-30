import { useEffect, useState } from "react";

// useEffect(callback, [deps])
// Case
// 1. useEffect(callback)
// -Callback is called whenever the component re-renders
// -Callback is called after the component is mounted
// 2. useEffect(callback,[])
// - Callback is called ONCE when it's mounted
// 3. useEffect(callback ,[deps])
// -Callback will be called again when deps change

// Cleanup function is always called after the component is unmounted
// Cleanup function is always called after the component before a new component mounted
// Cleanup function is called before the callback

// Content with constructor
// const Content = () => {
//     const [posts, setPosts] = useState([]);
//     const [title, setTitle] = useState("");
//     const [active, setActive] = useState("posts");
//     const [showGoToTop, setShowGoToTop] = useState(false);
//     const tabs = ["posts", "comments", "albums"];
//     console.log("scroll");

//     useEffect(() => {
//         console.log(title);
//         document.title = title;
//         fetch(`https://jsonplaceholder.typicode.com/${active}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             });
//     }, [active, title]);

//     useEffect(() => {

//         const handleScroll = () => setShowGoToTop(window.scrollY > 200);
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             console.log("unmount");
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div>
//             {tabs.map((tab, index) => (
//                 <button
//                     style={
//                         tab === active
//                             ? { color: "white", backgroundColor: "#333" }
//                             : {}
//                     }
//                     onClick={() => setActive(tab)}
//                     key={index}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <br />
//             <input value={title} onChange={e => setTitle(e.target.value)} />
//             <ul>
//                 {posts.map((post, index) => (
//                     <li key={post.id}>
//                         {" "}
//                         {active === "comments" ? post.body : post.title}
//                     </li>
//                 ))}
//             </ul>
//             {showGoToTop && (
//                 <button
//                     style={{ position: "fixed", right: 20, bottom: 20 }}
//                     onClick={() => window.scrollTo(0, 0)}
//                 >
//                     Go to top
//                 </button>
//             )}
//         </div>
//     );
// };

// const Content = () => {
// 	const [avatars, setAvatars] = useState([]);

// 	const handleChangeAvatar = e => {
//         if(avatars.length>0)  avatars.forEach(avatar => URL.revokeObjectURL(avatar));
//         let myNewAvatars = []
// 		for (let i = 0; i < e.target.files.length; i++) {
// 			myNewAvatars.push(URL.createObjectURL(e.target.files[i]));
// 		}
//         console.log(myNewAvatars)
//         setAvatars(myNewAvatars);
// 	};

// 	return (
// 		<div>
// 			<input type="file" multiple onChange={handleChangeAvatar} />
// 			{avatars.length > 0 && avatars.map((avatar, index) => <img key = {index} src={avatar}></img>)}
// 		</div>
// 	);
// };

// Lang nghe
const lessons = [
	{ id: 1, name: "Lesson 1" },
	{ id: 2, name: "Lesson 2" },
	{ id: 3, name: "Lesson 3" },
];

const handleComment = ({ detail }) => {
	console.log(detail);
};
function Content() {
	const [lessonID, setLessonId] = useState(1);

	useEffect(() => {
		window.addEventListener(`lesson-${lessonID}`, handleComment);
		return () => {
			window.removeEventListener(`lesson-${lessonID}`, handleComment);
		};
	}, [lessonID]);

    const [number, setNumber] = useState(0);

	return (
		<div>
			<h1>{number}</h1>
            <button onClick = {()=>setNumber((number +1)%4)}>Click me</button>
		</div>
	); 
}

export default Content;
