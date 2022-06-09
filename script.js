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

    alert(li.children[0].href)
  }
}

changeSocialLinks()
