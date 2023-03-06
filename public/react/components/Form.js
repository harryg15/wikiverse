import React, { useState } from 'react';

export const Form = ({fetchPages}) => {
    const [postInfo, setPostInfo] = useState({
        name: "",
        email: "",
        title: "",
        content: "",
        tags: ""
    })

    async function handleSubmit(e) {
        e.preventDefault()

        const url = "http://localhost:3000/api/wiki"
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postInfo)
        })
        const data = await response.json()
        console.log(data)

        setPostInfo({name: "", email: "", title: "", content: "", tags: ""})
        fetchPages()
    }

    async function handleChange(e) {
        setPostInfo({...postInfo, [e.target.name]: e.target.value})
    }

	return (
			<>
			<form onSubmit={handleSubmit}><br></br>
  				<label>Name:<br></br><input onChange={handleChange} type="text" name='name'/></label><br></br>
  				<label>Email:<br></br><input onChange={handleChange} type="text" name="email"/></label><br></br>
  				<label>Post Title:<br></br><input onChange={handleChange} type="text" name="title"/></label><br></br>
  				<label>Content:<br></br><input onChange={handleChange} type="textarea" name="content"/></label><br></br>
  				<label>Tags (Optional):<br></br><input onChange={handleChange} type="text" name="tags"/></label><br></br>
  					<br></br><button type="submit">Submit</button>
			</form>
			</>
	)
}