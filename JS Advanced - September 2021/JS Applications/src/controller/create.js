import { createMemeRequest } from '../crud.js'
import { page } from '../lib.js'
import { notify } from '../views/notification.js'

export async function createMeme(ev) {
    ev.preventDefault()
    const form = document.getElementById(ev.target.id)
    const formData = new FormData(form)
    const formDetails = {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        imageUrl: formData.get('imageUrl').trim(),
    }
    if (formDetails.title != '' && formDetails.description != '' && formDetails.imageUrl != '') {
        createMemeRequest(formDetails, sessionStorage.accessToken);
        page.redirect('/allmemes');
    } else {
        return notify('All fields are mandatory!');
    }
}