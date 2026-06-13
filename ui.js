const usersWrapEl = document.querySelector('.user-wrap')

export function UpdateUi(arr) {
	// innerHTML += o'rniga, bitta marta qo'shamiz
	const html = arr
		.map(
			item => `
    <div class="user-card">
      <div class="user-card__header">
        <div class="avatar">${item.name[0]}</div>
        <div>
          <h2>${item.userId}</h2>
          <p>${item.id}</p>
        </div>
      </div>

      <div class="user-card__body">
        <p>${item.title}</p>
        <p>${item.completed}</p>
      </div>
    </div>
  `,
		)
		.join('')

	usersWrapEl.innerHTML += html
}

window.goUsers = function (id) {
	window.location.href = `http://127.0.0.1:5500/pages/users.html?id=${id}`
}
