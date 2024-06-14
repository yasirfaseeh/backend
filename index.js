require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const data = {
    "login": "yasirfaseeh",
    "id": 158330006,
    "node_id": "U_kgDOCW_slg",
    "avatar_url": "https://avatars.githubusercontent.com/u/158330006?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yasirfaseeh",
    "html_url": "https://github.com/yasirfaseeh",
    "followers_url": "https://api.github.com/users/yasirfaseeh/followers",
    "following_url": "https://api.github.com/users/yasirfaseeh/following{/other_user}",
    "gists_url": "https://api.github.com/users/yasirfaseeh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yasirfaseeh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yasirfaseeh/subscriptions",
    "organizations_url": "https://api.github.com/users/yasirfaseeh/orgs",
    "repos_url": "https://api.github.com/users/yasirfaseeh/repos",
    "events_url": "https://api.github.com/users/yasirfaseeh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yasirfaseeh/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-01-31T18:12:12Z",
    "updated_at": "2024-05-11T12:57:31Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/yasir', (req, res)=>{
    res.send('<h1>Hi yasir</h1>')
})
app.get('/data', (req, res)=>{
    res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})