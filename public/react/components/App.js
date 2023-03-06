import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Form } from "./Form"

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [isAddingPage, setIsAddingPage] = useState(false)
	console.log(pages)

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} /><br></br>
			<button onClick={() => setIsAddingPage(!isAddingPage)}>Click Here To Create A Post</button>
			{isAddingPage && <Form fetchPages={fetchPages}/>}
		</main>
	)
}