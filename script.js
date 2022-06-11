const LinksSocialMedia = {
  github: 'renyzeraa',
  youtube: 'renans98',
  instagram: 'renyzeraa',
  facebook: 'renans98',
  twitter: 'renyzeraa'
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialLinks()

function getProfileGithub() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
      userName.textContent = data.name
      userLogin.textContent = data.login
      userBio.textContent = data.bio
      userLink.href = data.url
      userImage.src = data.avatar_url
    })
}

getProfileGithub()
