const usersWrapEl = document.querySelector('.user-wrap')

export function updateUi(arr) {
	const html = arr
		.map(
			item => `
    <div class="user-card">
      <div class="user-card__header">
        <div class="avatar">${item.id}</div>
        <div>
          <h2>Todo #${item.id}</h2>
          <p>User ID: ${item.userId}</p>
        </div>
      </div>

      <div class="user-card__body">
        <p>${item.title}</p>
        <p>${item.completed ? 'Completed' : 'Not completed'}</p>
      </div>
    </div>
  `,
		)
		.join('')

	usersWrapEl.innerHTML = html
}
