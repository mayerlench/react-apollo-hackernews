import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    createLink(description: $description, url: $url) {
      id
      url
      description
    }
  }
`

const CreateLink = (props) => {
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div>
            <div className="flex flex-column mt3">
                <input
                    className="mb2"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="text"
                    placeholder="A description for the link"
                />
                <input
                    className="mb2"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    type="text"
                    placeholder="The URL for the link"
                />
            </div>
            <Mutation
                mutation={POST_MUTATION}
                variables={{ description, url }}
                onCompleted={() => props.history.push('/')}
            >
                {postMutation => <button onClick={postMutation}>Submit</button>}
            </Mutation>
        </div>
    )
}

export default CreateLink