import { LOAD_POST } from '../action-types/index';

export const loadPost = () => {
		return async (dispatch) =>{
			const handleLoadPost = async ()=>{
			const URL = 'https://randomuser.me/api/';
			async function load(url){
				const response = await fetch(url);
				const data = await response.json();
				return data;
			}
			async function loadImg(){
				return await fetch('https://picsum.photos/600/600/?random');
			}
			let user = await load(URL);
			user = {...user.results[0]}
			let img = await loadImg()
			user.post = img.url;
			return user;
		}
		const post =  await handleLoadPost();

		dispatch({
			type: LOAD_POST,
			payload: post
		})
		}
	}
	