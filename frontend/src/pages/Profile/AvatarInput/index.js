import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@rocketseat/unform'
import api from '~/services/api'

import { Container } from './styles'

function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar')
  const [file, setFile] = useState(defaultValue && defaultValue.id)
  const [preview, setPreview] = useState(defaultValue && defaultValue.url)
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      })
    }
  }, [ref, registerField])

  const handleChange = async (event) => {
    const formData = new FormData()
    const [fileName] = event.target.files

    formData.append('file', fileName)

    const { data } = await api.post('/file', formData)

    const { id, url } = data.file

    setFile(id)
    setPreview(url)
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  )
}

export default AvatarInput
