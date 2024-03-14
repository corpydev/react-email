'use client';

import { useState } from "react";

export default function Page(): JSX.Element {
  const [formData, setFormData] = useState({
    heading: '',
    username: '',
    content: '',
    gender: 'male',
    inviteLink: '',
    inviteLinkContent: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.replace(`/mailing?username=${formData.username}&content=${formData.content}&gender=${formData.gender}&inviteLink=${formData.inviteLink}&inviteLinkContent=${formData.inviteLinkContent}&heading=${formData.heading}`);
  }

  return (
    <div>
      Create email from provided forms...

      <div>
        <form onSubmit={handleSubmit}>

        <div>
            <label htmlFor="heading">Title of email</label>
            <input onChange={handleChange} type="text" id="heading" name="heading" required />
          </div>

          <div>
            <label htmlFor="username">User name</label>
            <input onChange={handleChange} type="text" id="username" name="username" required />
          </div>

          <div>
            <label htmlFor="content">Content</label>
            <textarea onChange={handleChange} id="content" name="content" required />
          </div>

          <div>
            <label htmlFor="gender">What's client gender?</label>
            <select onChange={handleChange} id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="inviteLink">URL to redirect</label>
            <input onChange={handleChange} id="inviteLink" name="inviteLink" required />
          </div>

          <div>
            <label htmlFor="inviteLinkContent">URL Button content</label>
            <input onChange={handleChange} id="inviteLinkContent" name="inviteLinkContent" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
